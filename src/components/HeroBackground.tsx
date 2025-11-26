"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 100; // Number of stars in the constellation
const CONNECTION_DISTANCE = 2.5; // Max distance to draw a line
const STAR_SPEED = 0.02; // Speed of star movement

const Constellations = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Initialize stars with random positions and velocities using useMemo for initial arrays
  const initialArrays = useMemo(
    () => ({
      positions: new Float32Array(STAR_COUNT * 3),
      velocities: new Float32Array(STAR_COUNT * 3),
    }),
    []
  );

  const stars = useRef(initialArrays);

  // Initialize on first render
  useEffect(() => {
    const { positions, velocities } = stars.current;
    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      velocities[i * 3] = (Math.random() - 0.5) * STAR_SPEED;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * STAR_SPEED;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * STAR_SPEED;
    }
  }, []);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);

  useFrame((_, delta) => {
    const positions = stars.current.positions;
    const velocities = stars.current.velocities;

    // Update star positions
    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] += velocities[i * 3] * delta;
      positions[i * 3 + 1] += velocities[i * 3 + 1] * delta;
      positions[i * 3 + 2] += velocities[i * 3 + 2] * delta;

      // Bounce off bounds (simple box)
      if (Math.abs(positions[i * 3 + 0]) > 5) velocities[i * 3 + 0] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 5) velocities[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Calculate connections
    const linePositions: number[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      for (let j = i + 1; j < STAR_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
        }
      }
    }

    // Update lines
    if (linesRef.current) {
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      // lineGeometry.attributes.position.needsUpdate = true; // Not needed if we replace the attribute
    }
  });

  return (
    <group>
      {/* Stars */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={STAR_COUNT}
            array={initialArrays.positions}
            itemSize={3}
            args={[initialArrays.positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#3b82f6"
          size={0.1}
          sizeAttenuation
          transparent
          opacity={0.5}
          depthWrite={true}
        />
      </points>

      {/* Connections */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#93c5fd"
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Constellations />
      </Canvas>
    </div>
  );
};

export default HeroBackground;

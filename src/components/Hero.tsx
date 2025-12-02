import HeroBackground from "./HeroBackground";

export const Hero = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-thin tracking-widest text-neutral-800 mb-4 font-serif">
          Thoughts & <br className="md:hidden" />
          <span className="italic">Perspectives</span>
        </h1>
        <p className="text-neutral-500 text-sm md:text-base tracking-widest uppercase mt-4">
          Exploring the unseen corners of the digital world
        </p>
      </div>
    </section>
  );
};

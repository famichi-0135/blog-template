import Image from "next/image";

export const Introduce = () => {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-neutral-200/50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex space-x-2 items-center space-between">
        <div className="w-20 h-20 flex-shrink-0 mr-4">
          <Image
            src="/humberger.png"
            width={70}
            height={70}
            alt="ロゴ画像"
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>

        <div className="space-y-2  ">
          <h3 className="font-bold text-xl">famichi</h3>
          <p>時代に取り残されないよう日々、必死に生きてます。</p>
        </div>
      </div>
    </div>
  );
};

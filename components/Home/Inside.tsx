import Image from "next/image";
import React from "react";

const Inside = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 md:px-1 py-24">
        <div className="marhey-bold text-[32px] md:text-[48px] text-center">
          What's Inside the Box?
        </div>
        <div className="text-center text-[16px]">
          Everything you need for fast, fun, Yoruba-powered gameplay.
        </div>
        <div className="flex justify-center items-center py-8">
          <Image src={`/box.svg`} alt="Box" width={754} height={477} />
        </div>
        <div className="text-[24px] montserrat-semibold text-center">
          No long setup. No complicated rules.
        </div>
        <div className="text-center text-[16px]">
          Just open the box and start playing.
        </div>
      </div>
    </div>
  );
};

export default Inside;

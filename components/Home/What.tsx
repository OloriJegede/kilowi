import Image from "next/image";
import React from "react";

const What = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/whatBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl py-12 md:py-24 px-4 md:px-1 mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="pt-14 space-y-5">
          <div className="marhey-semibold text-[32px] text-center md:text-left md:text-[45.52px] leading-[120%]">
            What is KÍLOWÍ?
          </div>
          <div className="text-[15.14px] text-center md:text-left space-y-8">
            <p>
              <span className="montserrat-semibold">KÍLOWÍ </span>is a
              fast-paced Yoruba card game played in teams.{" "}
            </p>
            <p>
              In each round, one player picks a card and describes the word in
              Yoruba without saying it directly. Their teammates must guess and
              say the correct Yoruba word before the sand timer runs out.
            </p>
            <p>
              Every round pushes you to use Yoruba actively, expand your
              vocabulary, and trust your instincts. You are not just recognising
              words, you are speaking them, explaining them, and thinking on
              your feet.
            </p>
            <p className="montserrat-semibold">
              Learning happens fast here. And so does the fun.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/what.svg"
            alt="what"
            width={608.84}
            height={404}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default What;

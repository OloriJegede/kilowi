import Image from "next/image";
import React from "react";

const Buy = () => {
  return (
    <div id="buy" className="max-w-[1600px] mx-auto py-14 px-4 md:px-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Image
            src={`/cards.svg`}
            width={763}
            height={516}
            alt="what"
            className="w-full"
          />
        </div>
        <div className="pt-10 md:pt-24">
          <div
            className="text-center text-[32px] md
          :text-[48px] marhey-semibold"
          >
            Buy KÍLOWÍ
          </div>
          <section className="space-y-2">
            <div className="text-[16px] w-4/5 md:w-full mx-auto text-center ">
              Bring the game home. Bring the language alive.
            </div>
            <div className="text-[16px] w-4/5 md:w-full mx-auto text-center">
              KÍLOWÍ is available now on <span className="">Amazon, Jumia</span>{" "}
              and <span>Konga</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
              <Image src={`/amazon.svg`} width={179} height={40} alt="amazon" />
              <Image src={`/jumia.svg`} width={153} height={40} alt="jumia" />
              <Image src={`/konga.svg`} width={149} height={40} alt="konga" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Buy;

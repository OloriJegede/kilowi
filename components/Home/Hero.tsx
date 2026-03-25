import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-1 pt-14 md:pt-38 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="pt-8 md:pt-20">
            <div className="marhey-semibold text-[32px] md:text-[48px] leading-[120%] text-center md:text-left">
              Think fast.
              <br /> Speak Yoruba faster.
            </div>
            <div className="text-[16px] md:text-[20px] text-[#2E2E2E] text-center md:text-left leading-[180%] py-4">
              KÍLOWÍ is a fast-paced Yoruba card game designed to keep the
              language alive through quick thinking, sharp reactions, and plenty
              of laughter. If you love games, culture, and a little pressure,
              this one is for you.
            </div>
            <div className="flex-col md:flex justify-center md:justify-start items-center space-x-5 pt-4">
              <Button
                asChild
                className="bg-[#006200] px-14 py-5 rounded-[8px] montserrat-semibold text-white"
              >
                <Link href={`/#buy`}>BUY NOW</Link>
              </Button>
              <Button
                asChild
                variant={`outline`}
                className="bg-transparent text-[#151515] border border-[#151515] montserrat-semibold px-4"
              >
                <Link href={`/rules`}>See How to Play</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/hero-img.svg"
              alt="hero"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

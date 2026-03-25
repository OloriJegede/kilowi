import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Rules = () => {
  return (
    <div className="max-w-7xl mx-auto py-14">
      <div className="md:w-4/5 mx-auto space-y-6 flex-col justify-center items-center rulesBg md:rounded-[16px] p-8">
        <div className="flex justify-center items-center">
          <Image src={`/book.svg`} width={40} height={40} alt="books" />
        </div>
        <div className="text-white text-[32px] text-center marhey-semibold">
          Learn the Rules
        </div>
        <div className="text-[#FAFAFA] text-[16px] text-center md:w-3/5 mx-auto">
          Want to play KÍLOWÍ like a pro? Check out the rules and get ready to
          think fast, speak Yoruba quicker, and learn more along the way
        </div>
        <div className="md:flex md:justify-center items-center space-x-3 mb-6">
          <Button asChild className="montserrat-semibold px-6 bg-[#3433CC]">
            <Link href={`/rules`}>See How to Play</Link>
          </Button>
          <Button
            asChild
            variant={`outline`}
            className="montserrat-semibold px-6 border border-[#ffffff] bg-transparent text-white"
          >
            <Link href={`/#buy`}>Buy KÍLOWÍ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rules;

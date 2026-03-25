import React from "react";
import Image from "next/image";

const Who = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-1">
      <div className="marhey-bold text-[32px] md:text-[48px] text-center">
        Who is it for?
      </div>
      <div className="text-center text-[20px]">KÍLOWÍ is perfect for:</div>
      <div className="md:w-4/5 mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-start items-center space-x-3">
            <Image
              src={`/check-check.svg`}
              width={24}
              height={24}
              alt="check"
            />
            <div>Teens and adults</div>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <Image
              src={`/check-check.svg`}
              width={24}
              height={24}
              alt="check"
            />
            <div>Cultural events and hangouts</div>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <Image
              src={`/check-check.svg`}
              width={24}
              height={24}
              alt="check"
            />
            <div>Game nights with friends and family</div>
          </div>
          <div className="flex justify-start items-center space-x-3">
            <Image
              src={`/check-check.svg`}
              width={24}
              height={24}
              alt="check"
            />
            <div>Yoruba learners and speakers at any level</div>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 mx-auto bg-[#EBEBFA] rounded-[16px] p-6 mt-4">
        <div className="text-[20px] text-center">
          Whether you are fluent, learning, or just familiar with the language,
          KÍLOWÍ meets you where you are and pushes you a little further.
        </div>
        <div className="text-[16px] text-center pt-4">
          À wa kẹ́ kọ́ (We all came to learn)
        </div>
      </div>
    </div>
  );
};

export default Who;

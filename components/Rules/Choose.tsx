import React from "react";

const Choose = () => {
  return (
    <div className="max-w-7xl mx-auto py-14">
      <div className="text-[#2E2E2E] text-[32px] md:text-[46.85px] marhey-semibold text-center pt-4 pb-10">
        Choose your GAME mode
      </div>
      <div className="md:w-3/5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          <div
            className="flex-col justify-center px-4 py-12 items-center space-y-2"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="flex justify-center items-center space-x-2">
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
            </div>
            <div className="text-[#1A1A1A] text-[24px] marhey- text-center">
              2 players
            </div>
            <div className="text-[#1A1A1A] text-[16px] text-center">
              One-on-One
            </div>
          </div>
          <div
            className="flex-col justify-center px-4 py-12 items-center space-y-2"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="flex justify-center items-center space-x-2">
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
            </div>
            <div className="text-[#1A1A1A] text-[24px] marhey- text-center">
              4 players
            </div>
            <div className="text-[#1A1A1A] text-[16px] text-center">
              Team battle
            </div>
          </div>
          <div
            className="flex-col justify-center px-4 py-12 items-center space-y-2"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="flex justify-center items-center space-x-2">
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
              <div className="rounded-full bg-[#0D0D49] w-[20px] h-[20px]"></div>
            </div>
            <div className="text-[#1A1A1A] text-[24px] marhey- text-center">
              Large group
            </div>
            <div className="text-[#1A1A1A] text-[16px] text-center">
              Party mode
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

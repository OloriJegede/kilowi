import React from "react";
import Image from "next/image";
const Tips = () => {
  return (
    <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 md:px-1">
      <div className="md:w-5/6 mx-auto">
        <div className="text-[#2E2E2E] text-[32px] md:text-[46.85px] marhey-semibold text-center pt-4">
          Tips for Success
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
          <div
            className="md:border-l-[8px] md:border-[#E7E7ED] min-h-[250px]"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="text-[#0D0D49] montserrat-semibold text-[20px] py-4 px-4 bg-[#E7E7ED] md:w-1/2">
              For Describers
            </div>
            <div className="p-6 space-y-4">
              <div className="text-[16px] montserrat-bold text-[#1A1A1A] space-y-3">
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={`/check-check.svg`}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <div>Use synonyms and related concepts</div>
                </div>
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={`/check-check.svg`}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <div>Describe the function or use of the item</div>
                </div>
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={`/check-check.svg`}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <div>Give cultural context when helpful</div>
                </div>
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={`/check-check.svg`}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <div>Use gestures if allowed in your group</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="md:border-l-[8px] md:border-[#E7E7ED] min-h-[250px]"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="text-[#0D0D49] montserrat-semibold text-[20px] py-4 px-4 bg-[#E7E7ED] md:w-1/2">
              For Guessers
            </div>
            <div className="p-6 space-y-4">
              <div className="text-[16px] montserrat-bold text-[#1A1A1A] space-y-3">
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={`/check-check.svg`}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <div>Consider cultural references</div>
                </div>
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={`/check-check.svg`}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <div>Consider cultural references</div>
                </div>
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={`/check-check.svg`}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <div>Ask clarifying questions if allowed</div>
                </div>
                <div className="flex justify-start items-center space-x-3">
                  <Image
                    src={`/check-check.svg`}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <div>Build on partial clues</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tips;

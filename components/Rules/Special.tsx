import React from "react";

const Special = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-1">
      <div className="md:w-5/6 mx-auto">
        <div className="flex justify-center items-center">
          <div className="text-[16px] text-[#FFF5E7] rounded-full px-6 py-4 bg-[#FF9811] montserrat-semibold">
            Special Rules
          </div>
        </div>
        <div className="text-[#2E2E2E] text-[32px] md:text-[46.85px] marhey-semibold text-center pt-4">
          Rules for Yoruba Learners
        </div>
        <div className="text-center text-[16px] md:text-[20px] montserrat-medium">
          Playing with Yoruba-Speaking Players
        </div>
        <div className="text-center text-[16px] md:w-[50%] mx-auto mt-2">
          Perfect for mixed groups where some are learning Yoruba while others
          are fluent!
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
          <div
            className="md:border-l-[8px] md:border-[#E7E7ED] min-h-[250px]"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="text-[#0D0D49] montserrat-semibold text-[20px] py-4 px-4 bg-[#E7E7ED] md:w-1/2">
              The Learner's Role 👤
            </div>
            <div className="p-6 space-y-4">
              <div className="text-[16px] montserrat-bold text-[#1A1A1A]">
                Olùdíje tí kìí ṣe elédè Yorùbá mú káàdì náà, kò sì ṣe àpèjúwe
                ọ̀rọ̀ tí ó wà ní òkè káàdì náà ní èdè Gẹ̀ẹ́sì.
              </div>
              <div className="text-[16px] text-[#1A1A1A]">
                The Yoruba-Learner holds the card and describes the word at the
                top of the card in English and/or Yoruba.
              </div>
            </div>
          </div>
          <div
            className="md:border-l-[8px] md:border-[#E7E7ED] min-h-[250px]"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="text-[#0D0D49] montserrat-semibold text-[20px] py-4 px-4 bg-[#E7E7ED] md:w-1/2">
              The Speaker's Role 🗣️
            </div>
            <div className="p-6 space-y-4">
              <div className="text-[16px] montserrat-bold text-[#1A1A1A]">
                Olùdíje Ní Èdè Yorùbá gbọ́dọ̀ ṣe àmọ̀rò ọ̀rọ̀ náà, kí ó sì pèsè
                ìdáhùn ní èdè Yorùbá.
              </div>
              <div className="text-[16px] text-[#1A1A1A]">
                The Yoruba-speaking player (speaking only Yoruba) must guess the
                word and provide the answer in Yoruba.
              </div>
            </div>
          </div>
          <div
            className="md:border-l-[8px] md:border-[#E7E7ED] min-h-[250px]"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="text-[#0D0D49] montserrat-semibold text-[20px] py-4 px-4 bg-[#E7E7ED] md:w-1/2">
              Need Help? 💡
            </div>
            <div className="p-6 space-y-4">
              <div className="text-[16px] montserrat-bold text-[#1A1A1A]">
                Tí o bá ní ìdádúró, o lè lo àmì ohùn ọ̀rọ̀ náà.
              </div>
              <div className="text-[16px] text-[#1A1A1A]">
                If you're stuck, you may sound out the word.
              </div>
            </div>
          </div>
          <div
            className="md:border-l-[8px] md:border-[#E7E7ED] min-h-[250px]"
            style={{ boxShadow: "0px 1px 24px 0px #0000000D" }}
          >
            <div className="text-[#0D0D49] montserrat-semibold text-[20px] py-4 px-4 bg-[#E7E7ED] md:w-1/2">
              No Gestures 🚫
            </div>
            <div className="p-6 space-y-4">
              <div className="text-[16px] montserrat-bold text-[#1A1A1A]">
                Kò sí àáyè fún àwọn olùta ayò láti lo àfàrájúwe.
              </div>
              <div className="text-[16px] text-[#1A1A1A]">
                Players are not allowed to use gestures.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Special;

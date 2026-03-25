"use client";

import Image from "next/image";
import { useState } from "react";

const rules = [
  {
    rule: "Rule 1",
    image: "/rule1.png",
    english: "You must not use the four words in the body of the card.",
    yoruba: "Iwọ kò gbọdọ̀ lo àwọn òrò mérin tí ó wà nínú ara káàdì náà.",
  },
  {
    rule: "Rule 2",
    image: "/rule2.png",
    english:
      "You must speak only Yoruba while you are trying to explain the word at the top of the card.",
    yoruba:
      "Yorùbá nìkan ni Ọ gbọdọ̀ sọ, nígbàtí o ń gbìyànjú làti ṣàlàyé ọ̀rọ̀ tí ó wà ní òkè káàdì náà.",
  },
  {
    rule: "Rule 3",
    image: "/rule3.png",
    english: "If you're stuck, you may sound out the word.",
    yoruba: "Tí o bá ní ìdádúró, o lè lo àmì ohùn ọ̀rọ̀ náà.",
  },
  {
    rule: "Rule 4",
    image: "/rule4.png",
    english: "Players are not allowed to use gestures.",
    yoruba: "Kò sí àáyè fún àwọn olùta ayò láti lo àfàrájúwe.",
  },
];

const Games = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="max-w-7xl mx-auto py-14 px-4 md:px-1">
      <div className="text-[#2E2E2E] text-[32px] md:text-[48px] marhey-semibold text-center">
        Game Rules
      </div>
      <div className="text-[#2E2E2E] text-[16px] md:text-[20px] md:w-[67%] mx-auto space-y-6">
        <div className="text-center">
          Click any card to flip between Yoruba and English
        </div>
      </div>
      <section className="md:w-3/5 mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map((card, index) => (
            <div
              key={index}
              className="flip-card cursor-pointer h-full"
              onClick={() => toggleFlip(index)}
            >
              <div
                className={`flip-card-inner ${flippedCards[index] ? "flip-card-flipped" : ""}`}
              >
                {/* Front - English */}
                <div className="flip-card-front bg-[#E7E7ED] rounded-[16px] p-6 gap-7">
                  <div className="flex justify-between items-center">
                    <div className="bg-white rounded-full px-5 py-1 text-[12px]">
                      {card.rule}
                    </div>
                    <div className="bg-white rounded-full px-5 py-1 text-[12px]">
                      ENGLISH
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src={card.image} width={72} height={38} alt="rule" />
                  </div>
                  <div className="text-[16px] text-center">{card.english}</div>
                  <div className="text-[#8D8C8C] text-[12px] text-center">
                    Click to flip card for Yoruba
                  </div>
                </div>

                {/* Back - Yoruba */}
                <div className="flip-card-back bg-[#E5EFE5] rounded-[16px] p-6 gap-7">
                  <div className="flex justify-between items-center">
                    <div className="bg-[#2E7D32] rounded-full px-5 py-1 text-[12px] text-white">
                      {card.rule}
                    </div>
                    <div className="bg-[#2E7D32] rounded-full px-5 py-1 text-[12px] text-white">
                      YORUBA
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src={card.image} width={72} height={38} alt="rule" />
                  </div>
                  <div className="text-[16px] text-[#000000] text-center">
                    {card.yoruba}
                  </div>
                  <div className="text-[#8D8C8C] text-[12px] text-center">
                    Click to translate
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Games;

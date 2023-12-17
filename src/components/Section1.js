import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Section1 = () => {
  const [count, setCount] = useState(1);

  return (
    <section
      className={`    ${
        count === 1
          ? "bg-[#8C53FE] text-white color-change"
          : count === 2
          ? "bg-[#7D9AF3] text-white color-change"
          : count === 3
          ? "bg-[#5BE0E6] text-white color-change"
          : ""
      }`}
    >
      <div className="section-1-bg flex items-center justify-around h-full w-full">
        <div className="flex flex-col p-2">
          <TypeAnimation
            sequence={[
              "Merhaba...",
              1000,
              () => {
                setCount(2);
              },
              "Sanayi 4.0'a\nhazır mısın?",
              1000,
              () => {
                setCount(3);
              },
              "Hey Ema!",
              1000,
              () => {
                setCount(1);
              },
            ]}
            wrapper="strong"
            className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]"
            speed={30}
            deletionSpeed={60}
            style={{ whiteSpace: "pre-line" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  );
};

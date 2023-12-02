import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export const Section1 = () => {
  const [count, setCount] = useState(1);

  return (
    <div
      className={`flex items-center justify-around w-full h-[100vh] max-h-[100vh] box-border snap-center ${
        count === 1
          ? "bg-gray-300"
          : count === 2
          ? "bg-blue-600"
          : count === 3
          ? "bg-purple-600"
          : ""
      }`}
    >
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
  );
};

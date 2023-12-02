import React from "react";
import ema from "../assets/circleForEma-removebg.png";
import svgLogo from "../assets/comunication.svg";
import ScrollAnimation from "react-animate-on-scroll";

export const Section2 = () => {
  return (
    <div
      id="deneme123"
      className="h-[100vh] w-full bg-red-400 flex flex-col items-center justify-center "
    >
      <ScrollAnimation
        duration={2}
        animateOnce={true}
        animateIn="animate__zoomInDown"
        animateOut="animate__zoomOutDown"
      >
        <img src={ema} className="w-[250px] my-10" />
      </ScrollAnimation>
      <h1>HABERLEŞME</h1>
      <h2 className="m-5 break-all">
        Ema robotumuz bünyesindeki yazılımlar sayesinde hem mobil uygulamamızla
        hem web servislerinizle haberleşebilir.
      </h2>
    </div>
  );
};

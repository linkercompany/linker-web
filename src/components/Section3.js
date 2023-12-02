import React from "react";
import ema from "../assets/circleForEma-removebg.png";
import svgLogo from "../assets/comunication.svg";
import ScrollAnimation from "react-animate-on-scroll";

export const Section3 = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-start ">
      <ScrollAnimation
        //  animateIn="slideLeft"
        duration={2}
        delay={100}
        animateIn="animate__zoomInDown"
        animateOut="animate__zoomOutRight"
        // animateOnce={true}
        // initiallyVisible={true}
      >
        <img src={ema} className="w-[250px] my-10" />
      </ScrollAnimation>
      <div className="">
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <img src={svgLogo} className="w-[50px] " />
        </ScrollAnimation>
      </div>
      <h1>HABERLEŞME</h1>
      <h2 className="m-5 break-all">
        Ema robotumuz bünyesindeki yazılımlar sayesinde hem mobil uygulamamızla
        hem web servislerinizle haberleşebilir.
      </h2>
    </div>
  );
};

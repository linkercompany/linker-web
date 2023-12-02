import { useNavigate } from "react-router-dom";
import { Section1, Section2, Section3 } from "../components";
import { Navbar } from "../layouts/Navbar";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const Home = () => {
  const navigate = useNavigate();

  // const path = document.querySelector(".path");
  // const length = path.getTotalLength();
  // document.documentElement.style.setProperty("--length", length);

  // let options = {
  //   threshold: [0.5, 1],
  // };

  // function drawSvg(items) {
  //   if (items[0].isIntersecting) {
  //     path.classList.add("draw");
  //   } else {
  //     path.classList.remove("draw");
  //   }
  // }
  return (
    <div className="w-full  ">
      <Navbar />
      <div
        // style={{
        //   height: "100vh",
        //   overflowY: "scroll",
        //   scrollSnapType: "y mandatory",
        // }}
        className=" snap-y overflow-y-scroll snap-mandatory"
      >
        {/* <div
          // style={{
          //   height: "100%",
          //   scrollSnapAlign: "center",
          // }}
          className="h-[100vh] snap-center"
        > */}
        <Section1 />
        {/* </div> */}
        <div
          // style={{
          //   height: "100%",
          //   scrollSnapAlign: "center",
          // }}
          className="h-[100vh] snap-center"
        >
          <Section2 />
        </div>
        <div
          // style={{
          //   height: "100%",
          //   scrollSnapAlign: "center",
          // }}
          className="h-[100vh] snap-center"
        >
          <Section3 />
        </div>
      </div>
    </div>
  );
};

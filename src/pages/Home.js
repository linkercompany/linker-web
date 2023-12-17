import { useNavigate } from "react-router-dom";
import { Navbar } from "../layouts/Navbar";
import { Carousel } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Footer, Section1, Section2, Section3 } from "../components";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[90vh]">
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </div>
  );
};

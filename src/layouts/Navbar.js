import React, { useState } from "react";
import logo from "../assets/whiteLogo.svg";
import menu from "../assets/menu.svg";
import "animate.css";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" fixed top-0 right-0 left-0">
      <div className="  sticky  top-0 right-0 left-0 z-30 backdrop-blur-sm h-[100px] w-full bg-transparent text-white  flex items-center justify-center  font-bold border-solid border-b-2 border-white ">
        <div className="h-full w-[80vw] flex  items-center justify-between xl:justify-between">
          <img
            src={logo}
            alt="Logo"
            onClick={() => {
              scrollToTop();
            }}
            className=" w-[80px] md:w-[100px]  hover:scale-[1.1] delay-100 duration-300"
          />

          <div className="hidden lg:flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between">
            <div className=" lg:block text-white">
              <a className="scroll-smooth" href="#product">
                <label className="mx-2 xl:mx-3 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
                  ÜRÜN
                </label>
              </a>
              <a href="#team">
                <label className="mx-2 xl:mx-3 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
                  EKİP
                </label>
              </a>
              <a href="#partnership">
                <label className="mx-2 xl:mx-3 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
                  PAYDAŞLAR
                </label>
              </a>
            </div>
          </div>
          <div className="flex items-center mr-4 lg:hidden">
            <div className="block  " onClick={() => setIsNavOpen(true)}>
              <img src={menu} alt="menu" className="h-6 sm:h-7 " />
            </div>
          </div>
          <div className="absolute z-50  top-0 right-0   ">
            {isNavOpen === true ? (
              <div
                className=" h-screen w-screen bg-[#8C53FE]/80 backdrop-blur lg:hidden"
                onClick={() => setIsNavOpen(false)}
              >
                <div className="flex h-screen flex-col items-center justify-center text-xl text-white">
                  <>
                    <a
                      href="#product"
                      className="p-5  drop-shadow-xl duration-200 hover:text-white/100 border-b-2 "
                    >
                      ÜRÜN
                    </a>
                    <a
                      href="#team"
                      className="p-5  drop-shadow-xl duration-200 hover:text-white/100 border-b-2 "
                    >
                      EKİP
                    </a>
                    <a
                      href="#partnership"
                      className="p-5  drop-shadow-xl duration-200 hover:text-white/100  "
                    >
                      PAYDAŞLAR
                    </a>
                  </>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

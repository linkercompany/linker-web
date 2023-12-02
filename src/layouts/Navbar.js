import React, { useState } from "react";
import logo from "../assets/linkerLogo.svg";
import menu from "../assets/menu.svg";
import { useNavigate } from "react-router-dom";
import "animate.css";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //Metaversu keşfet

  return (
    <div className="  sticky  top-0 z-30 backdrop-blur-sm h-[100px] w-full bg-[#fff]   flex items-center justify-center  font-bold border-solid border-b-2 border-black text-black">
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
          <div className=" lg:block text-black">
            <a className="scroll-smooth" href="#deneme">
              <label className="mx-2 xl:mx-3 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
                ÜRÜNÜMÜZ
              </label>
            </a>
            <a href="#deneme3">
              <label className="mx-2 xl:mx-3 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
                WORKSHOP
              </label>
            </a>
            <label className="mx-2 xl:mx-3 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
              GAMEJAM
            </label>
            <label className="mx-2 xl:mx-3 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
              BAŞVURU
            </label>
          </div>
        </div>
        <div className="flex items-center mr-4 lg:hidden">
          <div className="block  " onClick={() => setIsNavOpen(true)}>
            <img src={menu} className="h-6 sm:h-7 text-black" />
          </div>
        </div>
        <div className="absolute  top-0 right-0 ">
          {isNavOpen === true ? (
            <div
              className=" h-screen w-screen bg-[#000033]/90 backdrop-blur lg:hidden"
              onClick={() => setIsNavOpen(false)}
            >
              <div className="flex h-screen flex-col items-center justify-center text-xl text-white">
                <>
                  <a className="p-5  drop-shadow-xl duration-200 hover:text-white/100 border-b-2 ">
                    ÜRÜNÜMÜZ
                  </a>
                  <a className="p-5  drop-shadow-xl duration-200 hover:text-white/100 border-b-2 ">
                    WORKSHOP
                  </a>
                  <a className="p-5  drop-shadow-xl duration-200 hover:text-white/100 border-b-2 ">
                    GAMEJAM
                  </a>
                  <a className="p-5  drop-shadow-xl duration-200 hover:text-white/100">
                    BAŞVURU
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
  );
};

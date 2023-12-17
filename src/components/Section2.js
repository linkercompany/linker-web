import React, { useRef } from "react";
// import { useScroll, useTransform } from "framer-motion";

export const Section2 = () => {
  // const { scrollYProgress } = useScroll();

  const scrollRef = useRef(null);

  // function useParallax(value, distance) {
  //   return useTransform(value, [0, 1], [-distance, distance]);
  // }
  // const y = useParallax(scrollYProgress, 50);

  return (
    <section id="product">
      <div
        ref={scrollRef}
        className="w-full h-full bg-[#8C53FE] flex  items-center justify-around "
      >
        <div className="flex-2">
          {/* <motion.div
            className="w-[200px] h-[200px] bg-gradient-to-r from-cyan-500 to-blue-500  text-white flex items-center justify-center"
            whileInView={{
              scale: [2, 1, 1, 2, 2],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "20%", "50%"],
            }}
            transition={{ duration: 2 }}
          >
            <h1>Ema Foto</h1>
          </motion.div> */}
        </div>
        <div className="z-30"></div>
      </div>
    </section>
  );
};

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { PiNavigationArrowFill } from "react-icons/pi";

const Hero = () => {
  const constraintsRef = useRef(null);

  return (
    <section className="w-full text-white font-medium border-light p-4 my-4 rounded-2xl border-solid border-2">
      <motion.div
        className="w-full h-[400px] flex justify-center items-center"
        ref={constraintsRef}
      >
        <motion.div
          className="relative border-fluor border-solid border-2 cursor-grab active:cursor-grabbing z-[2]"
          drag
          dragConstraints={constraintsRef}
        >
          <div className="absolute w-2 h-2 bg-white border-fluor border-solid border-[1px] -top-1 -left-1" />
          <div className="absolute w-2 h-2 bg-white border-fluor border-solid border-[1px] -top-1 -right-1" />
          <div className="absolute w-2 h-2 bg-white border-fluor border-solid border-[1px] -bottom-1 -right-1" />
          <div className="absolute w-2 h-2 bg-white border-fluor border-solid border-[1px] -bottom-1 -left-1" />
          <PiNavigationArrowFill className="text-3xl absolute fill-fluor -bottom-10 -right-10" />
          <div className="overflow-hidden">
            <span className={`text-9xl font-kanit block -mb-3 -mt-4`}>
              Diseño
            </span>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex justify-center items-center gap-6 px-36 my-6 text-light font-manrope font-bold text-xl opacity-60">
        <div>DISEÑO</div>
        <div className="flex-1 h-1 rounded-full bg-light" />
        <div>COMO</div>
        <div className="flex-1 h-1 rounded-full bg-light" />
        <div>SIGNIFICADO</div>
      </div>
    </section>
  );
};

export default Hero;

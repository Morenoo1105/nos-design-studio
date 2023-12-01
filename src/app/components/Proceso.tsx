"use client";

import Link from "next/link";
import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

const data = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 1,
    y: 1,
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 3,
    y: 2,
  },
  {
    x: 4,
    y: 2,
  },
  {
    x: 5,
    y: 3,
  },
];

const CustomDot: React.FC<{
  cx?: number;
  cy?: number;
  payload?: { x: number; y: number };
}> = ({ cx, cy, payload }) => {
  if (payload?.x == 0) {
    return <circle id="dot-0" cx={cx} cy={cy} />;
  } else if (payload?.x == 1) {
    document.getElementById("info-1")!.style.top = cy! - 50 + "px";
    document.getElementById("info-1")!.style.left = cx! + "px";
  } else if (payload?.x == 2) {
    document.getElementById("info-2")!.style.top = cy! + 50 + "px";
    document.getElementById("info-2")!.style.left = cx! + "px";
  } else if (payload?.x == 3) {
    document.getElementById("info-3")!.style.top = cy! - 50 + "px";
    document.getElementById("info-3")!.style.left = cx! + "px";
    document.getElementById("info-gradient")!.style.top = cy! + "px";
    document.getElementById("info-gradient")!.style.left = cx! + "px";
  } else if (payload?.x == 4) {
    document.getElementById("info-4")!.style.top = cy! + 50 + "px";
    document.getElementById("info-4")!.style.left = cx! + "px";
  } else if (payload?.x == 5) {
    document.getElementById("info-5")!.style.top = cy! - 50 + "px";
    document.getElementById("info-5")!.style.left = cx! - 80 + "px";
  }

  if (payload?.x == 0) {
    return <circle id="dot-0" cx={cx} cy={cy} />;
  } else if (payload?.x == 5) {
    return (
      <>
        <circle id="dot-5" cx={cx} cy={cy} />
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 512 512"
            markerWidth="15"
            markerHeight="15"
            refX="300"
            refY="256"
            orient="auto"
          >
            <path
              fill="none"
              className="stroke-light"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
              d="M184 112l144 144-144 144"
            />
          </marker>
        </defs>
      </>
    );
  }
  return (
    <circle
      r={7}
      id={`dot-${payload?.x}`}
      cx={cx}
      cy={cy}
      className="fill-fluor"
    />
  );
};

const Proceso = () => {
  const bubbleClassName =
    "absolute -translate-x-1/2 translate-y-0-translate-y-1/2 bg-white z-10 text-dark font-bold border-white px-4 py-1 rounded-full w-fit";
  const bubbleColClassName =
    "bg-white text-dark border-white px-4 py-1 rounded-full font-bold w-5/6 sm:w-1/2 text-center";
  return (
    <section
      id="proceso"
      className="relative w-full text-white font-medium border-light my-4 p-4 sm:p-14 rounded-2xl border-solid border-2"
    >
      <div className="relative md:absolute mb-10 z-10">
        <h1 className="text-4xl">/ Seguimiento de proyectos</h1>
        <p className="hidden md:block mt-4">
          Construimos un trabajo cómodo en cada etapa.
        </p>
      </div>

      <div className="flex md:hidden w-full p-0 flex-col items-center gap-1">
        <div className={bubbleColClassName}>1. Inmersión</div>
        <HiOutlineArrowLongDown className="w-9 h-9" />
        <div className={bubbleColClassName}>2. Investigación</div>
        <HiOutlineArrowLongDown className="w-9 h-9" />
        <div className={bubbleColClassName}>3. Concepto</div>
        <HiOutlineArrowLongDown className="w-9 h-9" />
        <div className={bubbleColClassName}>4. Diseño</div>
        <HiOutlineArrowLongDown className="w-9 h-9" />
        <div className={bubbleColClassName}>5. Producto final</div>
        <HiOutlineArrowLongDown className="w-9 h-9" />
        <Link
          href="/"
          className=" bg-fluor z-10 text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2 whitespace-nowrap w-5/6 sm:w-1/2 text-center mb-6"
        >
          Hablemos del proyecto
        </Link>
      </div>

      <div className="hidden md:block w-full h-full p-0 relative">
        <Link
          href="/"
          className="absolute bottom-0 left-0 bg-fluor z-10 text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2 w-auto whitespace-nowrap"
        >
          Hablemos del proyecto
        </Link>
        <div id="info-1" className={`${bubbleClassName}`}>
          1. Inmersión
        </div>
        <div id="info-2" className={`${bubbleClassName}`}>
          2. Investigación
        </div>
        <div id="info-3" className={`${bubbleClassName}`}>
          3. Concepto
        </div>
        <div
          id="info-gradient"
          className="block absolute -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[radial-gradient(circle_at_50%_50%,_rgba(181,_255,_36,_0.4)_0%,_rgba(181,_255,_36,_0)_60%)]"
        />
        <div id="info-4" className={`${bubbleClassName}`}>
          4. Diseño
        </div>
        <div id="info-5" className={`${bubbleClassName}`}>
          5. Producto final
        </div>
        <ResponsiveContainer
          className="hidden md:block"
          width="100%"
          height={500}
        >
          <LineChart
            width={5}
            height={3}
            data={data}
            margin={{ top: 60, right: 100, left: 195, bottom: 20 }}
          >
            <Line
              dataKey="y"
              isAnimationActive={false}
              stroke="#ACACAC"
              strokeWidth={2}
              markerEnd="url(#arrow)"
              dot={<CustomDot />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Proceso;

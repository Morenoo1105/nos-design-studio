"use client";

import Image from "next/image";
import Link from "next/link";
import { precios } from "../constants";

interface CardProps {
  titulo: string;
  img: string;
  text: string;
  precio: string;
}

const PriceCard = ({ titulo, img, text, precio }: CardProps) => {
  return (
    <div className="relative bg-white border-white min-w-[17rem] w-[17rem] h-[22rem] md:min-w-[26rem] md:w-[26rem] md:h-[30rem] rounded-2xl border-solid border-2 flex flex-col overflow-hidden">
      <div className="relative w-full h-auto">
        <p
          className={`absolute bottom-0 left-0 ${
            titulo == "Diseño web"
              ? "bg-dark text-white font-semibold"
              : "bg-fluor text-dark font-bold"
          }  w-4/6 h-1/2 rounded-e-full flex items-center justify-start pl-6 text-xl md:text-2xl`}
        >
          {titulo}
        </p>
        <Image
          src={img}
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className={`w-full h-auto ${
            titulo !== "Diseño web" ? "bg-dark" : "bg-fluor"
          }`}
        />
      </div>
      <div className="flex flex-col justify-between w-full h-full text-dark p-6 text-base md:text-lg">
        <p>{text}</p>
        <div className="flex flex-row justify-between items-end">
          <p className="text-xs">
            desde
            <br />{" "}
            <span className="text-2xl md:text-3xl font-bold">{precio}</span>
          </p>
          <Link
            href="/"
            className="bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2 w-auto whitespace-nowrap"
          >
            Hablemos <span className="hidden md:inline">del proyecto</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Precios = () => {
  return (
    <section id="precios" className="w-full my-4">
      <div className="w-full flex flex-col text-white font-medium px-0 py-12">
        <div className="w-full mb-10 p-4 sm:p-14 !pb-0">
          <h1 className="text-4xl">/ ¿Cuál es el precio?</h1>
          <p className="mt-4">
            Te diremos el precio exacto después de que nos expliques tu
            propuesta.
          </p>
        </div>
        <div className="w-full min-w-full max-w-full flex flex-row justify-between gap-8 overflow-x-auto pl-4 sm:pl-14 pr-4 sm:pr-14 pb-4">
          {precios.map((card) => (
            <PriceCard key={card.titulo} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Precios;

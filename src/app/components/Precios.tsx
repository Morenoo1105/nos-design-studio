"use client";

import Image from "next/image";
import Link from "next/link";

const Precios = () => {
  return (
    <section id="proyectos" className="w-full my-4">
      <div className="w-full flex flex-col text-white font-medium px-0 py-12">
        <div className="w-full mb-10">
          <h1 className="text-4xl">/ ¿Cuál es el precio?</h1>
          <p className="mt-4">
            Te diremos el precio exacto después de que nos expliques tu
            propuesta.
          </p>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="relative bg-white border-white w-[28rem] h-[30rem] rounded-2xl border-solid border-2 flex flex-col overflow-hidden">
            <div className="relative w-full h-auto">
              <p className="absolute bottom-0 left-0 bg-fluor w-4/6 h-1/2 rounded-e-full text-dark font-semibold flex items-center justify-start pl-6 text-xl">
                Diseño gráfico
              </p>
              <Image
                src="/demoWebs/nos/price1.png"
                alt="Daria portrait"
                width={0}
                height={0}
                sizes="100%"
                className="w-full h-auto bg-dark"
              />
            </div>
            <div className="flex flex-col justify-between w-full h-full text-dark p-6 text-lg">
              <p>
                Branding / Redes Sociales / Presentaciones / Diseño de Packaging
                / Infografías
              </p>
              <div className="flex flex-row justify-between items-end">
                <p className="text-xs">
                  desde
                  <br /> <span className="text-3xl font-bold">15.000₽</span>
                </p>
                <Link
                  href="/"
                  className="bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2 w-auto whitespace-nowrap"
                >
                  Hablemos del proyecto
                </Link>
              </div>
            </div>
          </div>
          <div className="relative bg-white border-white w-[28rem] h-[30rem] rounded-2xl border-solid border-2 flex flex-col overflow-hidden">
            <div className="relative w-full h-auto">
              <p className="absolute bottom-0 left-0 bg-dark w-4/6 h-1/2 rounded-e-full text-white font-semibold flex items-center justify-start pl-6 text-xl">
                Diseño web
              </p>
              <Image
                src="/demoWebs/nos/price2.png"
                alt="Daria portrait"
                width={0}
                height={0}
                sizes="100%"
                className="w-full h-auto bg-fluor"
              />
            </div>
            <div className="flex flex-col justify-between w-full h-full text-dark p-6 text-lg">
              <p>
                Prototipado / Diseño de Landing Pages / Diseño en Tilda / Diseño
                de Correos Electrónicos
              </p>
              <div className="flex flex-row justify-between items-end">
                <p className="text-xs">
                  desde
                  <br /> <span className="text-3xl font-bold">25.000₽</span>
                </p>
                <Link
                  href="/"
                  className="bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2 w-auto whitespace-nowrap"
                >
                  Hablemos del proyecto
                </Link>
              </div>
            </div>
          </div>
          <div className="relative bg-white border-white w-[28rem] h-[30rem] rounded-2xl border-solid border-2 flex flex-col overflow-hidden">
            <div className="relative w-full h-auto">
              <p className="absolute bottom-0 left-0 bg-fluor w-4/6 h-1/2 rounded-e-full text-dark font-semibold flex items-center justify-start pl-6 text-xl">
                Startups
              </p>
              <Image
                src="/demoWebs/nos/price3.png"
                alt="Daria portrait"
                width={0}
                height={0}
                sizes="100%"
                className="w-full h-auto bg-dark"
              />
            </div>
            <div className="flex flex-col justify-between w-full h-full text-dark p-6 text-lg">
              <p>
                Paquete de empresa: <br />
                Identidad Corporativa + Landing Page en 30 días
              </p>
              <div className="flex flex-row justify-between items-end">
                <p className="text-xs">
                  desde <br />
                  <span className="text-3xl font-bold">85.000₽</span>
                </p>
                <Link
                  href="/"
                  className="bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2 w-auto whitespace-nowrap"
                >
                  Hablemos del proyecto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;

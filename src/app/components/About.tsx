import Image from "next/image";

const About = () => {
  return (
    <section id="sobreNOS" className="relative w-full my-4 rounded-2xl">
      <div className="w-full flex flex-col md:flex-row bg-none md:bg-light/10 text-white font-medium px-4 sm:px-14 py-12 rounded-2xl backdrop-blur-xl gap-8">
        <div className="w-full md:w-1/3">
          <h1 className="text-4xl mb-10">
            / Sobre{" "}
            <div className="inline-block">
              <span className="relative ml-2 text-[26px] leading-10 text-dark font-black">
                NOS
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full px-9 bg-fluor rounded-full z-[-10]" />
              </span>
              otras
            </div>
          </h1>
          <ol className="flex flex-col">
            <li className="flex gap-6 items-center py-10">
              <div className="text-fluor text-6xl w-20">01</div>
              <div className="textBalance max-w-[200px]">
                Especialistas honestas y abiertas de mente.
              </div>
            </li>
            <li className="flex gap-6 items-center border-y-2 border-y-light py-10">
              <div className="text-fluor text-6xl w-20">02</div>
              <div className="textBalance max-w-[200px]">
                Atentas a los detalles y plazos.
              </div>
            </li>
            <li className="flex gap-6 items-center py-10">
              <div className="text-fluor text-6xl w-20">03</div>
              <div className="textBalance max-w-[200px]">
                Trabajamos para la calidad y los resultados.
              </div>
            </li>
          </ol>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="w-full hidden md:flex justify-end gap-10">
            <div className="flex flex-col items-end">
              <span className="text-fluor">2022</span>
              <span className="text-light leading-none">fundado</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-fluor">+30</span>
              <span className="text-light leading-none">proyectos</span>
            </div>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row lg:items-stretch justify-end gap-10">
            <div className="border-light w-full lg:w-[20rem] p-6 my-4 rounded-2xl border-solid border-2 bg-none lg:bg-circles bg-[length:70%] bg-no-repeat bg-[top_3rem_right_-5rem] flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 justify-start lg:justify-between">
              <Image
                src="/images/alya.png"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-fluor border-solid border-2"
                alt="Alya portrait"
                width={0}
                height={0}
                sizes="100%"
              />
              <div className="text-white">
                <p className="text-2xl mb-4">Alya Kucherova</p>
                <p className="textBalance">
                  Diseñadora de comunicación, supervisora de la escuela
                  Auditoria
                </p>
              </div>
            </div>
            <div className="border-light w-full lg:w-[20rem] p-6 my-4 rounded-2xl border-solid border-2 bg-none lg:bg-circles bg-[length:70%] bg-no-repeat bg-[top_3rem_right_-5rem] flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 justify-start lg:justify-between">
              <Image
                src="/images/daria.png"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-fluor border-solid border-2"
                alt="Daria portrait"
                width={0}
                height={0}
                sizes="100%"
              />
              <div className="text-white">
                <p className="text-2xl mb-4">Daria Polshina</p>
                <p className="textBalance">
                  UX/UI, <br />
                  Diseñadora gráfica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/stroke.png"
        className="hidden md:block absolute -z-10 opacity-40 -right-[15rem] top-[5rem] -rotate-[20deg]"
        alt=""
        width={750}
        height={750}
      />
    </section>
  );
};

export default About;

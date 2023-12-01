"use client";

import { BsInstagram } from "react-icons/bs";

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden w-full text-white font-medium border-light p-4 sm:p-14 my-4 rounded-2xl border-solid border-2"
    >
      <div className="w-full flex flex-col md:flex-row text-white font-medium">
        <div className="textBalance w-full h-full mb-10">
          <h1 className="text-4xl">¿Listo para empezar a colaborar?</h1>
          <p className="mt-4">Discutiremos ideas y ofreceremos soluciones. </p>
        </div>
        <address className="w-full md:w-3/5 h-full flex flex-col gap-8 not-italic mb-24">
          <div className="flex flex-col gap-4">
            <p>Correo electrónico</p>
            <div className="w-full h-[2px] rounded-full bg-light"></div>
            <a
              className="text-white hover:text-fluor transition-colors"
              href="mailto:we-diz.@yandex.ru"
            >
              we-diz.@yandex.ru
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p>Teléfono</p>
            <div className="w-full h-[2px] rounded-full bg-light"></div>
            <a
              className="text-white hover:text-fluor transition-colors"
              href="tel:+79002983183"
            >
              +7 900 298 31 83
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p>Encuéntranos en RRSS</p>
            <div className="w-full h-[2px] rounded-full bg-light"></div>
            <a
              className="text-white hover:text-fluor transition-colors"
              href="https://www.instagram.com/we.we_studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="inline-block mr-2" />
              @we.we_studio
            </a>
          </div>
        </address>
      </div>
      <div className="absolute -z-[1] -bottom-[20rem] left-1/2 w-[40rem] md:w-[120rem] -translate-x-1/2 h-[30rem] bg-[radial-gradient(ellipse_at_50%_50%,_rgba(181,_255,_36,_1)_0%,_rgba(181,_255,_36,_0)_70%)]" />
    </section>
  );
};

export default Contacto;

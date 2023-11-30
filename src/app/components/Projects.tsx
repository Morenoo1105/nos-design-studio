"use client";

import Image from "next/image";
import { proyectos } from "@/app/constants";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(proyectos[3]);

  return (
    <section id="proyectos" className="w-full my-4">
      <div className="w-full flex flex-col text-white font-medium px-14 py-12">
        <div className="w-full mb-10">
          <h1 className="text-4xl">/ Proyectos y servicios</h1>
          <p className="mt-4">Te ayudaremos a implementar tus ideas.</p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <ul className="w-full flex flex-row gap-3 m-0 p-1">
            {proyectos.map((item) => (
              <li
                key={`btn-${item.nombre}`}
                className={`${
                  item === selectedTab ? "bg-light" : "bg-none"
                } text-white font-medium border-light px-4 py-1 hover:bg-light transition-colors rounded-full border-solid border-2 w-full text-center hover:cursor-pointer`}
                onClick={() => setSelectedTab(item)}
              >
                {item.nombre}
              </li>
            ))}
          </ul>
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.nombre : "nada"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-row"
              >
                {selectedTab ? (
                  <>
                    <div className="w-full flex flex-col justify-between">
                      <div className="flex flex-col gap-8 pt-4 textBalance w-4/5 text-light">
                        <p>{selectedTab.texto1}</p>
                        <p>{selectedTab.texto2}</p>
                      </div>
                      <div>
                        <Link
                          href={selectedTab.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-fluor text-dark font-black border-fluor px-4 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2 w-auto whitespace-nowrap"
                        >
                          Ver más
                        </Link>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 bg-light/10 text-light font-medium p-4 rounded-2xl">
                      <p>{selectedTab.tituloImagen}</p>

                      <div className="relative rounded-2xl w-full h-[28rem] bg-light/10">
                        <Image
                          src={selectedTab.imagen}
                          alt={selectedTab.tituloImagen}
                          width={0}
                          height={0}
                          sizes="100%"
                          className="w-full max-h-full rounded-2xl object-cover"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

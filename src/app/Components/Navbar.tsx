"use client";

import { navLinks } from "@/app/constants";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa6";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full max-w-[1440px] ${
        open
          ? "max-h-[336px] sm:max-h-[144px] md:max-h-[112px]"
          : "max-h-[56px]"
      } transition-height duration-500 mx-auto bg-dark/80 backdrop-blur-sm z-20 rounded-2xl border-light border-solid border-2 flex flex-row justify-between items-start lg:items-center px-6 py-2 overflow-hidden`}
    >
      <ul className="w-full justify-start items-start flex flex-row flex-wrap gap-y-5 gap-x-3 my-[6px]">
        <div className="w-full lg:w-auto">
          <li key={navLinks[0].id}>
            <Link
              href={navLinks[0].id}
              className="bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2"
            >
              {navLinks[0].title}
            </Link>
          </li>
        </div>
        {navLinks.slice(1).map((link) => (
          <li key={link.id} className="lg:flex-none flex-1 lg:block flex">
            <Link
              href={link.id}
              className={`${
                link.id == "#nos"
                  ? "bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity"
                  : "bg-dark text-white font-medium border-light px-4 py-1 hover:bg-light transition-colors"
              } rounded-full border-solid border-2 whitespace-nowrap lg:flex-none flex-1 text-center`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex gap-x-3">
        <Link
          href="/"
          className="bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity rounded-full border-solid border-2 w-auto whitespace-nowrap"
        >
          Hablemos del proyecto
        </Link>
        <Link
          href="/"
          className="px-2 py-2 text-white border-light hover:bg-light transition-colors rounded-full border-solid border-2 flex items-center justify-center"
        >
          <FaPaperPlane className="-ml-[0.05rem] mr-[0.05rem]" />
        </Link>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="block lg:hidden absolute right-6 bg-light text-fluor font-black border-light px-4 py-4 hover:opacity-80 transition-opacity rounded-full border-solid border-2 w-auto"
      >
        {open ? (
          <CgClose className="absolute w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        ) : (
          <CgMenu className="absolute w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;

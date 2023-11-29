import { Button } from "@/app/ui";
import { navLinks } from "@/app/constants";
import Link from "next/link";
import clsx from "clsx";

const Navbar = () => {
  return (
    <nav className="mt-4 rounded-2xl border-light border-solid border-2">
      <ul className="w-full flex p-4 gap-3">
        {navLinks.map((link) => (
          <li>
            <Link
              href={link.id}
              className={`${
                link.id == "#nos"
                  ? "bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80"
                  : "text-light font-medium border-light px-4 py-1"
              }  rounded-full border-solid border-2
              
              hover:bg-light hover:text-white
              `}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

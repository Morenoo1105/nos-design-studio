import { navLinks } from "@/app/constants";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mt-4 rounded-2xl border-light border-solid border-2 flex flex-row justify-between items-center px-6 py-2">
      <ul className="w-full flex gap-x-3">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.id}
              className={`${
                link.id == "#nos"
                  ? "bg-fluor text-dark font-black border-fluor px-2 py-1 hover:opacity-80 transition-opacity"
                  : "text-white font-medium border-light px-4 py-1 hover:bg-light transition-colors"
              }  rounded-full border-solid border-2`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-3">
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
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import {
  Hero,
  Navbar,
  About,
  Projects,
  Proceso,
  Precios,
  Contacto,
} from "./Components";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      <Navbar />
      <div className="my-4 h-14" />
      <Hero />
      <About />
      <Projects />
      <Proceso />
      <Precios />
      <Contacto />
      <div className="w-full text-light text-center my-8">
        Diseño obtenido de{" "}
        <br className="block sm:hidden" />
        <Link
          href="https://www.behance.net/gallery/175320959/Landing-page-studija-dizajna-my"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-fluor transition-colors underline underline-offset-4 decoration-fluor"
        >
          Landing page / Студия дизайна МЫ
        </Link>{" "}
      </div>
    </main>
  );
}

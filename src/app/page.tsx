import {
  Hero,
  Navbar,
  About,
  Projects,
  Proceso,
  Precios,
  Contacto,
} from "./components";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Proceso />
      <Precios />
      <Contacto />
      <Navbar />
    </main>
  );
}

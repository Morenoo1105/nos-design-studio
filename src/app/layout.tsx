import type { Metadata } from "next";
import { Manrope, Kanit } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--manrope",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
  variable: "--kanit",
});

export const metadata: Metadata = {
  title: "NOS | Design Studio",
  description:
    "NOS es un estudio de diseño nacido en Rusia y formado por Alya Kucherova y Daria Polshina.",
  metadataBase: new URL("https://morenno.net/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${kanit.variable}`}>
      <body className="font-manrope bg-dark overflow-x-hidden">{children}</body>
    </html>
  );
}

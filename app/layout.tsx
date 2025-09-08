import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/components/UI/Navbar/Navbar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "700"], // normal, medium, bold
});

export const metadata: Metadata = {
  title: "SWAPI App | Изучение вселенной Star Wars",
  description:
    "Интерактивная энциклопедия по вселенной Star Wars. Изучите фильмы и персонажей с помощью современного Next.js приложения.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={raleway.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

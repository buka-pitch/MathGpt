import Navbar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Fotter from "../components/Fotter";
import { FloatingAiChat } from "@/components/FloatingAiChat";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MathGpt",
  description: "Learn, Develop and Practise you Math knowlage with AI ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "relative text-black  "}>
        <FloatingAiChat />

        <Navbar />
        {children}
        <Fotter />
      </body>
    </html>
  );
}

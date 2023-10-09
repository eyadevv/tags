import "@/style/global.css";
import { Metadata } from "next";
import Nav from "@/src/components/Nav/Nav";
import Footer from "@/src/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
export const metadata: Metadata = {
  title: "TAGS",
  description: "Payment Tags Made Easy",
};

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-screen flex-shrink-0 h-screen bg-gradient-to-b from-primary to-black text-white flex flex-col justify-between items-center overflow-auto gap-0">
        <Nav />
        <main className="w-screen pt-2 flex-grow h-full flex flex-col justify-start items-center overflow-y-scroll overflow-x-clip ">
          {children}
        </main>
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}

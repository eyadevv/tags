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
        <main className="w-screen relative flex-grow h-[80vh] flex flex-col justify-start items-center overflow-y-scroll overflow-x-clip ">
          {children}
        </main>

        <Link
          href="/studio"
          className="w-12 hidden xs:flex h-12 absolute bottom-10 right-2 rounded bg-blue-900  justify-center items-center"
        >
          <AiOutlinePlus size={30} />
        </Link>

        <Analytics />
      </body>
    </html>
  );
}

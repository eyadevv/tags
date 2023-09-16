import "@/style/global.css";
import { Metadata } from "next";
import Nav from "@/src/components/Nav/Nav";
import Footer from "@/src/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import MobileMenu from "@/src/components/MobileMenu/MobileMenu";
export const metadata: Metadata = {
  title: "TAGS",
  description: "Payment Tags Made Easy",
};

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-screen flex-shrink-0 h-screen bg-gradient-to-b from-primary to-black text-white flex flex-col justify-between items-center overflow-auto gap-0">
        <Nav />
        <main className="w-screen flex-grow h-[80vh] flex flex-col justify-start items-center overflow-y-scroll overflow-x-clip ">
          {/* <section className="w-full h-max bg-white bg-opacity-10  flex flex-col justify-start items-center rounded-2xl "> */}
          {children}
          {/* <Footer /> */}
          {/* </section> */}
        </main>
        <MobileMenu />

        <Analytics />
      </body>
    </html>
  );
}

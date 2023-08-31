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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-secondary-focus text-white flex flex-col justify-between items-center overflow-auto gap-0">
        <Nav />
        <main className="w-screen flex-grow p-4 h-[80vh] bg-primary flex flex-col justify-start items-center overflow-auto ">
          <section className="w-full h-max bg-black bg-opacity-10 flex flex-col justify-start items-center rounded-2xl ">
            {children}
          </section>
        </main>
        <MobileMenu />

        <Analytics />
      </body>
    </html>
  );
}

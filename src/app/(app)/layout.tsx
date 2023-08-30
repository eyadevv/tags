import "@/style/global.css";
import { Metadata } from "next";
import Nav from "@/src/components/Nav/Nav";
import Footer from "@/src/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
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
      <body className="w-screen relative h-max bg-primary text-white flex flex-col justify-start items-center overflow-auto overflow-x-clip gap-6">
        <Nav />
        <section className="w-11/12 h-max min-h-screen bg-secondary-content flex flex-col justify-start items-center rounded-2xl bg-opacity-10 ">
          {children}
        </section>
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}

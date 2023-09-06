"use client";
import Nav from "@/src/components/Studio/Nav";
import "@/style/global.css";
export default function StudioLayout({
  children,
  params,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-max min-h-screen  flex  flex-col justify-start items-center overflow-auto ">
      <section className="">{children}</section>
      <Nav id={1} />
    </main>
  );
}

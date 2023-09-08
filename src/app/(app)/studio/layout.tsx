// import Nav from "@/src/components/Studio/Nav";
import "@/style/global.css";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-max flex justify-center items-center overflow-auto ">
      {children}
      {/* <Nav /> */}
    </main>
  );
}

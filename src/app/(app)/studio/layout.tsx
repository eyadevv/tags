import Nav from "@/src/components/Studio/Nav";
import "@/style/global.css";
import Preview from "@/src/components/Studio/Preview";
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-max min-h-screen  flex  flex-col justify-start items-center overflow-auto ">
      <Preview>{children}</Preview>
      <Nav />
    </main>
  );
}

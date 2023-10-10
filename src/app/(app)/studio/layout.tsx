import Footer from "@/src/components/Footer/Footer";
import "@/style/global.css";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full pt-2 flex flex-col justify-start items-start overflow-auto m-0 p-0 ">
      {children}
    </main>
  );
}

import Pagination from "@/src/components/Pagination/Pagination";
import "@/style/global.css";
import Link from "next/link";
export default function TagsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-max text-white flex flex-col justify-start items-center overflow-auto pt-2 rounded-2xl">
      <nav className="w-max py-2 px-4 flex flex-row-reverse justify-center items-start gap-4 rounded-xl bg-black bg-opacity-30">
        <Link
          href="/tags/free"
          className="p-3 hover:bg-black hover:bg-opacity-20 rounded-xl"
        >
          مجاني
        </Link>
        <Link
          href="/tags/premium"
          className="p-3 hover:bg-black hover:bg-opacity-20 rounded-xl"
        >
          حزمة
        </Link>
        <Link
          href="/tags/paid"
          className="p-3 hover:bg-black hover:bg-opacity-20 rounded-xl"
        >
          مدفوع
        </Link>
      </nav>
      {children}
    </div>
  );
}

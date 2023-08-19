import "@/styles/tailwind.css"
import Link from "next/link"
export default function TagsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="w-full h-full  text-white flex flex-col justify-start items-center overflow-auto" >
                  <nav className="w-max py-2 px-4 flex flex-row-reverse justify-center items-start gap-4 rounded-xl" >
        <Link href='/tags/free' className="p-3 bg-black bg-opacity-5 hover:bg-opacity-20 rounded-xl" >مجاني</Link>
        <Link href='/tags/premium' className="p-3 bg-black bg-opacity-5 hover:bg-opacity-20 rounded-xl" >حزمة</Link>
        <Link href='/tags/paid' className="p-3 bg-black bg-opacity-5 hover:bg-opacity-20 rounded-xl" >مدفوع</Link>
      </nav>
      <div className=" w-full h-full overflow-auto">
      {children}

      </div>

        </div>
      
    )
  }
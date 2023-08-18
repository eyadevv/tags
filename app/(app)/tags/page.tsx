import Link from "next/link"
const page = async () => {

  return (
    <div className="w-full h-full flex justify-center items-start " >
      <nav className="w-max py-2 px-4 flex flex-row-reverse justify-center items-start gap-4 bg-white bg-opacity-5 rounded-xl" >
        <Link href='/tags/free' className="p-3 bg-black bg-opacity-5 hover:bg-opacity-20 rounded-xl" >مجاني</Link>
        <Link href='/tags/premium' className="p-3 bg-black bg-opacity-5 hover:bg-opacity-20 rounded-xl" >حزمة</Link>
        <Link href='/tags/paid' className="p-3 bg-black bg-opacity-5 hover:bg-opacity-20 rounded-xl" >مدفوع</Link>
      </nav>
    </div>
  )
}

export default page
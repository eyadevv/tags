import Link from "next/link"

const Nav = () => {
  return (
    <nav className='w-11/12 sticky bg-primary top-0 h-[15vh] flex flex-row-reverse justify-between items-center' >
      <Link href='/tags'>
      <h2 className='text-5xl font-bold'>تاغز</h2></Link>
        <ul className='flex flex-row-reverse gap-2 w-1/3 justify-between items-center sm:hidden' >
            <Link href='/tags'>الرئيسية</Link>
            <Link href='/studio'>الأستديو</Link>
            <Link href='/library'>بطاقاتي</Link>
            <Link href='/account' className="bg-white rounded-full w-14 h-14" ></Link>
        </ul>
    </nav>
  )
}

export default Nav
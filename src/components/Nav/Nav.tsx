import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full px-[6%] sticky top-0 h-[15vh] flex flex-row-reverse justify-between items-center bg-black">
      <Link href="/tags/free">
        <h2 className="text-5xl font-bold">تاغز</h2>
      </Link>
      <ul className="flex flex-row-reverse gap-4 w-1/3 min-w-max justify-between items-center xs:hidden">
        <Link href="/tags/free">الرئيسية</Link>
        <Link href="/studio">الأستديو</Link>
        <Link href="/library">بطاقاتي</Link>
        <Link
          href="/account"
          className="bg-white rounded-full w-14 h-14"
        ></Link>
      </ul>
    </nav>
  );
};

export default Nav;

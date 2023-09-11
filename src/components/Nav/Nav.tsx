import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Nav = () => {
  return (
    <nav className=" w-full px-[6%] py-4 h-max min-h-[10vh] flex-shrink-0 flex flex-row-reverse justify-between z-10 items-center bg-black">
      <Link href="/tags">
        <h2 className="text-5xl font-bold">تاغز</h2>
      </Link>
      <MdMenu size={30} className="hidden xs:flex" />
      <ul className="flex flex-row-reverse gap-4 w-1/3 min-w-max justify-between items-center xs:hidden">
        <Link
          href="/tags"
          className="flex flex-col justify-center items-center"
        >
          <p>الرئيسية</p>
        </Link>
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

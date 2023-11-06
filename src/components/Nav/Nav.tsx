import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="drawer w-full px-[6%] py-4 h-max min-h-[10vh] flex-shrink-0 flex flex-row-reverse justify-between z-10 items-center bg-black">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col w-full">
        <div className="w-full navbar flex flex-row-reverse justify-between items-center">
          <Link href="/">
            <h2 className="text-5xl font-bold sm:text-2xl">تاغز</h2>
          </Link>
          <div className="hidden sm:flex">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none block sm:hidden w-max ">
            <ul className="menu menu-horizontal w-max flex flex-row justify-between items-center gap-10 text-md font-normal">
              <Link
                href="/"
                className="flex flex-col justify-center items-center"
              >
                <p>الرئيسية</p>
              </Link>
              <Link href="/studio">الأستديو</Link>
              <Link href="/about">عنا</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar content here */}
        <ul className="menu flex flex-col bg-black w-2/3 h-full  justify-between items-center p-10 text-md font-normal">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="btn btn-ghost text-lg absolute  right-5 top-5 "
          >
            <p>X</p>
          </label>
          <div className="w-max flex flex-col justify-start items-center gap-10">
            <Link
              href="/"
              className="flex flex-col justify-center items-center"
            >
              <p>الرئيسية</p>
            </Link>

            <Link href="/studio">الأستديو</Link>
            <Link href="/about">عنا</Link>
          </div>
          <a href="https://github.com/eyadevv" target="_black">
            Developed By Eyad Faisal
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

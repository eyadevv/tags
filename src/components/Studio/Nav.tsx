"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { MdEdit, MdShare, MdFormatPaint } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
const Nav = () => {
  const segment = useSelectedLayoutSegments()[1];
  const [visible, setvisible] = useState(true);

  return (
    <div
      style={{
        height: visible ? "max-content" : "0px",
        padding: visible ? "0.5rem" : "0px",
      }}
      className="flex flex-col bg-black w-20 h-max rounded-xl items-center   gap-3 absolute z-2 top-2/4 right-6 "
    >
      <p onClick={() => setvisible(!visible)} className="absolute -top-10">
        {visible ? (
          <AiOutlineEye size={30} />
        ) : (
          <AiOutlineEyeInvisible size={30} />
        )}
      </p>
      <ul
        style={{
          visibility: visible ? "visible" : "hidden",
        }}
        className={` flex w-full h-full flex-col gap-2 justify-between items-center`}
      >
        <Item
          icon={<MdEdit size={30} />}
          content="المحتوى"
          url={`/studio/content/${segment}`}
        />
        <hr className="h-[1px] w-full bg-white" />

        <Item
          icon={<MdFormatPaint size={30} />}
          content="التصميم"
          url={`/studio/design/${segment}`}
        />
        <hr className="h-[1px] w-full bg-white" />
        <Item
          content="مشاركة"
          url={`/studio/share/${segment}`}
          icon={<MdShare size={30} />}
        />
      </ul>
    </div>
  );
};
export default Nav;
const Item = ({
  content,
  icon,
  url,
}: {
  content: any;
  icon: any;
  url: string;
}) => {
  return (
    <Link
      href={url}
      className="w-full flex flex-col justify-center items-center gap-2 text-xs"
    >
      {icon}
      <p>{content}</p>
    </Link>
  );
};

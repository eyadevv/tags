import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineTags,
  AiOutlineEdit,
} from "react-icons/ai";
const MobileMenu = () => {
  return (
    <ul className="flex-row-reverse h-[8vh] w-full bg-black px-[6%] gap-4 justify-between items-center hidden xs:flex ">
      <Item content="الرئيسية" url="/tags" icon={<AiOutlineHome size={25} />} />
      <Item
        content="الأستديو"
        url="/studio"
        icon={<AiOutlineEdit size={25} />}
      />
      <Item
        content="بطاقاتي"
        url="/library"
        icon={<AiOutlineTags size={25} />}
      />
      <Item content="حسابي" url="/account" icon={<AiOutlineUser size={25} />} />
    </ul>
  );
};
export default MobileMenu;

const Item = ({ content, url, icon }: any) => {
  return (
    <Link href={url} className="flex flex-col justify-center items-center">
      {icon}
      <p className="text-sm">{content}</p>
    </Link>
  );
};

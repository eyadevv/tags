import PRISMA from "@/lib/prisma";
import Footer from "@/src/components/Footer/Footer";
import Preview from "@/src/components/Tag/Preview";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
const page = async () => {
  const tags = await PRISMA.tag
    .findMany()
    .then((res: any) => {
      return res?.length > 0 ? res : null;
    })
    .catch((err) => console.log(err));

  return (
    <div className="h-max relative w-full flex flex-row flex-wrap justify-center items-start gap-2 ">
      {tags ? (
        tags?.map((tag: any, id: any) => <Preview data={tag} key={id} />)
      ) : (
        <h2 className="text-2xl font-bold">Failed to Load Tag !</h2>
      )}

      <Link
        href="/studio"
        className="w-12 hidden xs:flex h-12 absolute bottom-10 right-2 rounded bg-blue-900  justify-center items-center"
      >
        <AiOutlinePlus size={30} />
      </Link>
    </div>
  );
};
export default page;

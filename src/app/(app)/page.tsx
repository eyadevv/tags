import PRISMA from "@/lib/prisma";
import Preview from "@/src/components/Tag/Preview";

const page = async () => {
  const tags = await PRISMA.tag
    .findMany({
      orderBy: {
        downloads: "desc",
      },
    })
    .then((res: any) => {
      return res?.length > 0 ? res : null;
    })
    .catch((err) => console.log(err));

  return (
    <div className="h-max w-full flex flex-row flex-wrap justify-center items-start gap-2 ">
      {/* <Link
        href="/studio"
        className="w-12 z-10 flex h-12 rounded bg-blue-900  justify-center items-center"
      >
        <AiOutlinePlus size={30} />
      </Link> */}
      {tags ? (
        tags?.map((tag: any, id: any) => <Preview data={tag} key={id} />)
      ) : (
        <h2 className="text-2xl font-bold">Failed to Load Tag !</h2>
      )}
    </div>
  );
};
export default page;

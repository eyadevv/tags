import PRISMA from "@/lib/prisma";
import Preview from "@/src/components/Tag/Preview";
const page = async () => {
  const tags = await PRISMA.tag
    .findMany()
    .then((res: any) => {
      return res?.length > 0 ? res : null;
    })
    .catch((err) => console.log(err));

  return (
    <div className="h-max w-full flex flex-wrap justify-center items-start p-4 gap-2">
      {tags ? (
        tags?.map((tag: any, id: any) => <Preview data={tag} key={id} />)
      ) : (
        <h2 className="text-2xl font-bold">Failed to Load Tag !</h2>
      )}
    </div>
  );
};
export default page;

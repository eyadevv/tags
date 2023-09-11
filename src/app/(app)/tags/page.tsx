import PRISMA from "@/lib/prisma";
import Preview from "@/src/components/Tag/Preview";
const page = async ({ params }: { params: { type: string } }) => {
  const tags = await PRISMA.tag
    .findMany()
    .then((res: any) => {
      return res?.length > 0 ? res : null;
    })
    .catch((err) => console.log(err));

  if (tags) {
    return (
      <div className=" flex min-h-screen w-full items-start justify-center flex-wrap xs:flex-col xs:justify-start xs:items-center gap-2">
        {tags?.map((tag: any, id: any) => (
          <Preview data={tag} key={id} />
        ))}
      </div>
    );
  } else {
    <h1>No Tags Found</h1>;
  }
};
export default page;

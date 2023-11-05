import PRISMA from "@/lib/prisma";
import Preview from "@/src/components/Tag/Preview";
import Main from "@/src/components/Main";
export const dynamic = "force-dynamic";
const page = async () => {
  const tags = await PRISMA.tag
    .findMany({
      take: 30,
    })
    .then((res: any) => {
      return res?.length > 0 ? res : null;
    })
    .catch((err) => console.log(err));
  if (!tags) {
    return (
      <h2 className="text-2xl font-bold">There is an Error on The Server</h2>
    );
  } else {
    return <Main tags={tags} />;
  }
};
export default page;

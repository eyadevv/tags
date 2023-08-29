import Tag from "@/src/components/Tag/Tag";
import PRISMA from "@/lib/prisma";
import { TAGSTYPE } from "@prisma/client";
const page = async ({ params }: { params: { type: string } }) => {
  const type = params.type.toUpperCase();
  const tags = await PRISMA.tag
    .findMany({
      where: {
        type: type as TAGSTYPE,
      },
    })
    .then((res: any) => {
      return res?.length > 0 ? res : null;
    })
    .catch(() => null);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-blue-900">
      {tags
        ? tags?.map((tag: any, id: any) => <Tag key={id} data={tag} />)
        : "No Tags Found"}
    </div>
  );
};
export default page;

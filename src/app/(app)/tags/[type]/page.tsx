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

  if (tags) {
    return (
      <div className="flex min-h-screen w-full items-start justify-center flex-wrap">
        {tags?.map((tag: any, id: any) => (
          <Tag key={id} data={tag} />
        ))}
      </div>
    );
  } else {
    <h1>No Tags Found</h1>;
  }
};
export default page;

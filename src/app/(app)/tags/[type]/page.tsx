import Tag from "@/src/components/Tag/Tag";
import PRISMA from "@/lib/prisma";
import { TAGSTYPE } from "@prisma/client";
import Image from "next/image";
const page = async ({ params }: { params: { type: string } }) => {
  const type = params.type.toUpperCase();
  const tags = await PRISMA.tag
    .findMany({
      where: {
        type: type as TAGSTYPE,
      },
      take: 20,
    })
    .then((res: any) => {
      return res?.length > 0 ? res : null;
    })
    .catch(() => null);

  if (tags) {
    return (
      <div className=" flex min-h-screen w-full items-start justify-center flex-wrap xs:flex-col xs:justify-start xs:items-center gap-2">
        {tags?.map((tag: any, id: any) => (
          // <>
          <a
            className="w-56  h-56 flex-shrink-0"
            href={`/studio/content/${tag.id}`}
          >
            <img
              className="w-full h-full object-cover"
              src={`/${tag.slug}.png`}
              alt={tag.slug}
              key={id}
            />
          </a>
          // <Tag data={tag} key={id} />
          // </>
        ))}
      </div>
    );
  } else {
    <h1>No Tags Found</h1>;
  }
};
export default page;

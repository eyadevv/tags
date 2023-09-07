import Content from "@/src/components/Studio/Content";
import PRISMA from "@/lib/prisma";
const page = async ({ params }) => {
  const { id } = params;
  const content = await PRISMA.tag
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .then((res) => res)
    .catch(() => null);

  return (
    <div>
      <Content />
    </div>
  );
};
export default page;

import Content from "@/src/components/Studio/Content";
import PRISMA from "@/lib/prisma";
const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // const content = await PRISMA.tag
  //   .findUnique({
  //     where: {
  //       id: Number(id),
  //     },
  //   })
  //   .then((res) => res)
  //   .catch(() => null);

  return (
    <div>
      <h1>Share</h1>
    </div>
  );
};
export default page;

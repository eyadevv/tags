import PRISMA from "@/lib/prisma";
import Footer from "@/src/components/Footer/Footer";
import StudioPreview from "@/src/components/Studio/StudioPreview";
const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const tag = await PRISMA.tag
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .then((res) => res)
    .catch(() => null);
  return (
    <div className="w-full h-full flex flex-col justify-center items-start  ">
      <StudioPreview data={tag} />
    </div>
  );
};
export default Page;

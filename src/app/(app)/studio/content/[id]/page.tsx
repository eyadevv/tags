import Content from "@/src/components/Studio/Content";
import PRISMA from "@/lib/prisma";
const page = async ({ params }) => {
  return (
    <div>
      <Content />
    </div>
  );
};
export default page;

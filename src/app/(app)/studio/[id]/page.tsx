// import {
//   useTransition,
//   useEffect,
//   useState,
//   useReducer,
//   useLayoutEffect,
// } from "react";
// import FetchTag from "@/src/app/actions/FetchTag";
// import Tag from "@/src/components/Tag/Tag";
// import Studio from "@/src/components/Studio/Studio";
import PRISMA from "@/lib/prisma";
import StudioPreview from "@/src/components/Studio/StudioPreview";
const Page = async ({ params }: { params: { id: string } }) => {
  // const [isPending, startTransition] = useTransition();
  // const [tagData, settagData] = useState({});
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
    <div className="w-full h-full flex justify-center items-start overflow-clip  ">
      <StudioPreview data={tag} />
    </div>
  );
};
export default Page;

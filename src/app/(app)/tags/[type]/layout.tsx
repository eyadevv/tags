import Pagination from "@/src/components/Pagination/Pagination";
import PRISMA from "@/lib/prisma";
const layout = async ({ children, params }: any) => {
  const TYPE = params.type.toUpperCase();
  const tagsCount: number = await PRISMA.tag
    .count({
      where: {
        type: TYPE,
      },
    })
    .then((res: number) => {
      return Number(res);
    })
    .catch(() => 0);

  const pagesCount: number = Number((tagsCount / 20).toFixed());

  return (
    <main className="w-full h-max overflow-clip flex flex-col justify-start items-center">
      <h1>{tagsCount}</h1>
      {children}
      <Pagination pagesCount={pagesCount} type={TYPE} />
    </main>
  );
};
export default layout;

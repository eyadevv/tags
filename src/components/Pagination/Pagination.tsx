import Link from "next/link";

const Pagination = ({
  pagesCount,
  type,
}: {
  pagesCount: number;
  type: string;
}) => {
  const arr = new Array(pagesCount).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = pagesCount - i;
  }

  return (
    <div className="w-full h-10 flex  justify-center items-center flex-row-reverse gap-2 ">
      {arr.map((page, index) => {
        return (
          <Link
            href={`/tags/${type}/${page}`}
            className="p-4 bg-black bg-opacity-20 rounded-lg"
            key={index}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};
export default Pagination;

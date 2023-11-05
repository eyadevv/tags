"use client";
import Preview from "./Tag/Preview";
const Main = ({ tags }: { tags: any }) => {
  return (
    <div className="w-11/12 h-max flex flex-row flex-wrap justify-center items-center gap-3 xs:w-full">
      {tags?.map((tag: any, id: any) => (
        <Preview data={tag} key={id} />
      ))}
    </div>
  );
};
export default Main;

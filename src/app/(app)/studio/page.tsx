"use client";
import StudioPreview from "@/src/components/Studio/StudioPreview";

const page = () => {
  const data = {
    id: "new",
    phone: "249xxxxxxxxx",
    name: "Your Name",
    account: "247365",
    bank: "bankak",
    bg: "black",
  };
  return (
    <div className="w-full h-full p-0 m-0 flex justify-start items-between overflow-clip  ">
      <StudioPreview data={data} />
    </div>
  );
};
export default page;

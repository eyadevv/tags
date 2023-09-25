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
    <div className="w-full pt-2 h-[80vh] flex justify-center items-start overflow-clip  ">
      <StudioPreview data={data} />
    </div>
  );
};
export default page;

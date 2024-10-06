"use client";
import { useRef, useTransition, ReactNode } from "react";
import PublishTag from "@/src/app/actions/PublishTag";
import { BiShare, BiReset, BiSolidDownload } from "react-icons/bi";
import DownloadTag from "@/src/app/actions/DownloadTag";

const Tag: any = ({ state, dispatch }: any) => {
  const {
    id,
    slug,
    bg,
    bgStyle,
    bank,
    account,
    name,
    phone,
    bankRadius,
    tagRadius,
    color,
    branch,
  } = state;
  const tagRef: any = useRef(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-col justify-between w-11/12 items-center gap-2 sm:flex-row-reverse ">
      <span
        className={`relative flex sm:w-56 sm:h-56 w-64 h-64 flex-col items-center p-4 justify-center gap-2 rounded overflow-clip`}
        ref={tagRef}
        style={{
          background: bg,
          borderRadius: tagRadius + "rem",
          color: color,
        }}
      >
        <img
          alt={bank || "bank"}
          src={`/${bank}.png`}
          width={256}
          height={256}
          style={{
            borderRadius: bankRadius + "rem",
          }}
          className={`h-20 w-20 bg-black bg-opacity-10`}
        />

        <p className="text-lg font-bold">{account}</p>
        <p className="text-base font-bold">{name}</p>
        <p className="text-base font-bold">{branch || "branch"}</p>
        <p className="text-sm">{phone}</p>
      </span>
      <div className="flex flex-row gap-2 justify-center items-center sm:flex-col">
        <Button
          title="Download"
          icon={<BiSolidDownload size={30} />}
          onClick={() => {
            return startTransition(async () => {
              const res = await DownloadTag(id, state);

              // Check if the response is okay
              const link = document.createElement('a');
              // Set the href to the Data URL
              link.href = res;
              // Set the download attribute with a filename
              link.download = `payment-tag-${id}.png`; // Specify the desired file name
              // Append to the document and trigger a click
              document.body.appendChild(link);
              link.click();
              // Clean up and remove the link
              document.body.removeChild(link);
            });
          }}
        />
        <Button
          title="Reset"
          icon={<BiReset size={30} />}
          onClick={() =>
            dispatch({
              type: "reset",
              key: id,
            })
          }
        />
        {/* <Button
          title="Publish"
          icon={<BiShare size={30} />}
          onClick={() => IMG.Publish()}
        /> */}
      </div>
    </div>
  );
};

const Button = ({
  icon,
  title,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  onClick: Function;
}) => {
  return (
    <button
      onClick={() => onClick()}
      className="bg-black bg-opacity-75 p-3 sm:p-1 text-white rounded-full flex flex-row justify-center items-center gap-3"
    >
      {icon}
      <p className="sm:hidden">{title}</p>
    </button>
  );
};

export default Tag;

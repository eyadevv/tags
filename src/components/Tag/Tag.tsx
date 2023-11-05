"use client";
import { useRef, useTransition, ReactNode } from "react";
import PublishTag from "@/src/app/actions/PublishTag";
import { BiShare, BiReset, BiSolidDownload } from "react-icons/bi";
import { toPng } from "html-to-image";
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

  const IMG = {
    PNG: async (current: any) => {
      return await toPng(current, {
        cacheBust: true,
        quality: 1,
        canvasHeight: 500,
        canvasWidth: 500,
        height: 500,
        width: 500,
        style: {
          height: "500px",
          width: "500px",
          maxHeight: "500px",
          maxWidth: "500px",
          scale: "1",
        },
      });
    },
    Download: async () => {
      const dataUrl = await IMG.PNG(tagRef.current);
      const link = document.createElement("a");
      link.download = `${bgStyle}-${bank}-${account}.png`;
      link.href = dataUrl;
      link.click();
    },
    Publish: async () => {
      startTransition(async () => {
        const status = await PublishTag(state);
        alert(status);
      });
    },
  };

  return (
    <div className="flex flex-col justify-between w-11/12 items-center gap-2 sm:flex-row-reverse ">
      <span
        className={` relative flex sm:w-56 sm:h-56 w-64 h-64 flex-col items-center p-4 justify-center gap-2 rounded overflow-clip`}
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
              const status = await DownloadTag(id);
              if (status == 200) {
                IMG.Download();
              } else {
                alert("Download Failed");
              }
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
        <Button
          title="Publish"
          icon={<BiShare size={30} />}
          onClick={() => IMG.Publish()}
        />
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

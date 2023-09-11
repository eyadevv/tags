"use client";
import {
  useRef,
  useState,
  useLayoutEffect,
  useTransition,
  ReactNode,
  useEffect,
} from "react";
import PublishTag from "@/src/app/actions/PublishTag";
import {
  BiSolidCrown,
  BiShare,
  BiReset,
  BiDollar,
  BiDownload,
} from "react-icons/bi";
import { toPng } from "html-to-image";
const Tag = ({ state, dispatch }: any) => {
  const {
    id,
    slug,
    bg,
    type,
    bgStyle,
    bank,
    account,
    name,
    phone,
    bankRadius,
    tagRadius,
  } = state;
  const tagRef = useRef(null);
  const [isPending, startTransition] = useTransition();

  const IMG = {
    PNG: async (current: any) => {
      return await toPng(current, {
        cacheBust: true,
        skipAutoScale: true,
        quality: 1,
        height: 300,
        width: 300,
      });
    },
    Download: async () => {
      const dataUrl = await IMG.PNG(tagRef.current);
      const link = document.createElement("a");
      link.download = `${slug}.png`;
      link.href = dataUrl;
      link.click();
    },
    Publish: async () => {
      const dataUrl = await IMG.PNG(tagRef.current);
      startTransition(async () => {
        const status = await PublishTag(dataUrl);
        alert(status);
      });
    },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 sm:flex-row-reverse ">
      <span
        className={` relative flex h-56 w-56 flex-shrink-0 flex-col items-center p-4 justify-center gap-2 rounded overflow-clip`}
        ref={tagRef}
        style={{
          background: bg,
          borderRadius: tagRadius + "rem",
        }}
      >
        <p className="absolute left-2 top-2">
          {type === "PREMIUM" ? (
            <BiSolidCrown color="gold" size={25} />
          ) : type === "PAID" ? (
            <BiDollar color="gold" size={25} />
          ) : null}
        </p>

        <img
          alt={bank || "bank"}
          src={`/${bank}.png`}
          width={720}
          height={1080}
          style={{
            borderRadius: bankRadius + "rem",
          }}
          className={`h-20 w-20 bg-black bg-opacity-10`}
        />

        <p className="text-lg font-bold">{account}</p>
        <p className="text-base font-bold">{name}</p>
        <p className="text-sm">{phone}</p>
      </span>
      <div className="flex flex-row gap-2 justify-center items-center sm:flex-col">
        <Button
          title="Download"
          icon={<BiDownload className="w-6 h-6" />}
          onClick={() => IMG.Download()}
        />
        <Button
          title="Reset"
          icon={<BiReset className="w-6 h-6" />}
          onClick={() =>
            dispatch({
              type: "reset",
              key: id,
            })
          }
        />
        <Button
          title="Publish"
          icon={<BiShare className="w-6 h-6" />}
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
      className="bg-black p-3 sm:p-1 text-white rounded-full flex flex-row justify-center items-center gap-2"
    >
      {icon}
      <p className="sm:hidden">{title}</p>
    </button>
  );
};
export default Tag;

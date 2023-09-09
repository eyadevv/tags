"use client";
import {
  useRef,
  useState,
  useLayoutEffect,
  useTransition,
  ReactNode,
} from "react";
import { BiSolidCrown, BiDollar, BiDownload } from "react-icons/bi";
import { toPng } from "html-to-image";
const Tag = ({
  slug,
  id,
  type,
  bank,
  account,
  name,
  phone,
  bg,
  bankstyle,
  font,
  text,
  icons,
  barcode,
}: any) => {
  const tagRef = useRef(null);

  const download = async (current: any) => {
    toPng(current, {
      cacheBust: true,
      skipAutoScale: true,
      quality: 1,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${slug}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 sm:flex-row-reverse ">
      <span
        className={` relative flex h-56 w-56 flex-shrink-0 flex-col items-center p-4 justify-center gap-2 rounded overflow-clip`}
        ref={tagRef}
        style={{
          background: bg,
          border: bankstyle,
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
          className={`h-20 w-20 rounded-full bg-black bg-opacity-10`}
        />

        <p className="text-lg font-bold">{account}</p>
        <p className="text-base font-bold">{name}</p>
        <p className="text-sm">{phone}</p>
      </span>
      <button
        onClick={() => download(tagRef.current)}
        className="bg-black p-3 sm:p-1 text-white rounded-full flex flex-row justify-center items-center gap-2"
      >
        <BiDownload className="sm:w-6 sm:h-6 w-10 h-10" />
        <p className="sm:hidden">Download</p>
      </button>
    </div>
  );
};
export default Tag;

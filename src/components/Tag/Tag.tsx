"use client";
import { useRef, useState, useLayoutEffect, useTransition } from "react";
import { BiSolidCrown, BiDollar } from "react-icons/bi";
// import { toPng } from "html-to-image"; // import { useEffect, useLayoutEffect, useState, useTransition } from "react";
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
  console.log(bg, phone, id);

  // const download = async (current) => {
  //   toPng(current, { cacheBust: true, quality: 1 })
  //     .then((dataUrl) => {
  //       const link = document.createElement("a");
  //       link.download = `${slug}.png`;
  //       link.href = dataUrl;
  //       link.click();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    // <div className="flex  flex-shrink-0 h-72 w-72 flex-col items-center justify-center gap-2 rounded-xl py-2">
    <span
      className={`flex h-56 w-56 flex-shrink-0 flex-col items-center p-4 justify-center gap-2 rounded overflow-clip`}
      ref={tagRef}
      style={{
        background: bg,
        border: bankstyle,
      }}
      // onClick={() => download(tagRef.current)}
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
        width={50}
        height={50}
        className={`h-20 w-20 rounded-full bg-black bg-opacity-10`}
      />

      <p className="text-lg font-bold">{account}</p>
      <p className="text-base font-bold">{name}</p>
      <p className="text-sm">{phone}</p>
    </span>
  );
};
export default Tag;

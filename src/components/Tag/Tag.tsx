"use client";
import FetchTag from "@/src/app/(app)/studio/FetchTag";
import { BiSolidCrown, BiDollar } from "react-icons/bi";
import { useEffect, useLayoutEffect, useState, useTransition } from "react";
const Tag = () => {
  let [isPending, startTransition] = useTransition();
  const [data, setdata] = useState("");

  useLayoutEffect(() => {
    startTransition(async () => {
      const data = await FetchTag();
      setdata(data);
    });
  }, []);
  const { id, type, bank, account, name, phone, style }: any = data;
  // const { bg, bank: bankstyle, font, text, icons, barcode } = style;

  return (
    <div className="flex  flex-shrink-0 h-72 w-72 flex-col items-center justify-center gap-2 rounded-xl py-2">
      <span
        className={`relatve bg-gradient-to-bl to-accent from-primary flex h-5/6 w-5/6 flex-col items-center justify-center gap-2 rounded-xl`}
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
    </div>
  );
};
export default Tag;

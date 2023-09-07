"use client";
import Tag from "@/src/components/Tag/Tag";
import FetchTag from "@/src/app/(app)/studio/FetchTag";

import { ReactNode, useEffect, useReducer } from "react";
import { useTransition, useState, useLayoutEffect } from "react";
import { useSelectedLayoutSegments } from "next/navigation";

const Preview = ({ children }: { children: ReactNode }) => {
  let [isPending, startTransition] = useTransition();
  const segment = useSelectedLayoutSegments()[1];
  const [data, setdata] = useState(null);

  useEffect(() => {
    return startTransition(async () => {
      const data: any = await FetchTag(Number(segment));
      console.log(data);
      setdata(data);
      dispatch({
        type: "load",
      });
    });
  }, []);

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "load":
        return {
          ...state,
          slug: data?.slug,
          id: data?.id,
          type: data?.type,
          bank: data?.bank,
          account: data?.account,
          name: data?.name,
          phone: data?.phone,
          bg: data?.style.bg,
          bankstyle: data?.style.bankstyle,
          font: data?.style.font,
          text: data?.style.text,
          icons: data?.style.icons,
          barcode: data?.style.barcode,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    slug: null,
    id: null,
    type: null,
    bank: null,
    account: null,
    name: null,
    phone: null,
    bg: null,
    bankstyle: null,
    font: null,
    text: null,
    icons: null,
    barcode: null,
  });

  return (
    <section className="w-full h-max justify-start items-center">
      {data ? (
        <div className="w-full h-full flex flex-row xs:flex-col justify-around xs:justify-center items-center">
          <div className=" flex justify-center items-center">
            <Tag
              slug={state?.slug}
              id={state?.id}
              type={state?.type}
              bank={state?.bank}
              account={state?.account}
              name={state?.name}
              phone={state?.phone}
              bg={state?.bg}
              bankstyle={state?.bankstyle}
              font={state?.font}
              text={state?.text}
              icons={state?.icons}
              barcode={state?.barcode}
            />
          </div>
          {/* {JSON.stringify(isPending)} */}
          {children}
        </div>
      ) : null}
    </section>
  );
};
export default Preview;

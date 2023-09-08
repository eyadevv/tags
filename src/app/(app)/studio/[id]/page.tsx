"use client";
import { useTransition, useEffect, useState, useReducer } from "react";
import FetchTag from "../FetchTag";
import Tag from "@/src/components/Tag/Tag";
import Studio from "@/src/components/Studio/Studio";
import { BiLoader } from "react-icons/bi";
const Page = ({ params }: { params: { id: string } }) => {
  const [isPending, startTransition] = useTransition();
  const { id } = params;

  useEffect(() => {
    if (!localStorage.getItem(id)) {
      console.log(Math.random());
      return startTransition(async () => {
        const tag: any = await FetchTag(Number(id));
        dispatch({
          type: "load",
          data: tag,
        });
        localStorage.setItem(id, JSON.stringify(tag));
      });
    } else {
      dispatch({
        type: "load",
        data: JSON.parse(localStorage?.getItem(id) as string),
      });
    }
  }, [id]);

  function reducer(state: any, action: any) {
    const data = action.data;
    let target = action.key;
    const value = action.value;
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
      case "update":
        return {
          ...state,
          [target]: value,
        };

      default:
        return { ...state };
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
    <div className=" relative w-full min-h-screen h-max flex flex-col justify-start items-center">
      {state.id ? (
        <div className="w-11/12 h-max flex  flex-row justify-between items-start xs:flex-col xs:items-center">
          <div className="flex justify-center items-center w-[50vw]">
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

          <div className="w-[50vw] xs:w-full flex justify-center  ">
            <Studio
              dispatch={dispatch}
              bg={state.bg}
              name={state.name}
              account={state.account}
              bank={state.bank}
              phone={state.phone}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Page;

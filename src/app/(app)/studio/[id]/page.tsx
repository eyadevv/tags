"use client";
import { useTransition, useEffect, useState, useReducer } from "react";
import FetchTag from "../FetchTag";
import Tag from "@/src/components/Tag/Tag";
import Studio from "@/src/components/Studio/Studio";
const Page = ({ params }: { params: { id: string } }) => {
  const [isPending, startTransition] = useTransition();
  const { id } = params;

  useEffect(() => {
    if (!localStorage.getItem(id)) {
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
    const data = action?.data;
    let key = action?.key;
    const value = action?.value;
    switch (action.type) {
      case "load":
        return {
          ...state,
          ...data,
        };
      case "update":
        localStorage.setItem(
          id,
          JSON.stringify({
            ...state,
            [key]: value,
          })
        );

        return {
          ...state,
          [key]: value,
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
    bankStyle: null,
    font: null,
    text: null,
    icons: null,
    barcode: null,
  });

  return (
    <div className="w-full h-full flex justify-center items-start overflow-clip  ">
      {state.id ? (
        <div className="w-full h-full flex flex-row  justify-between items-start sm:flex-col sm:items-center   ">
          <div className="flex  justify-center overflow-clip flex-shrink  items-center h-full w-1/3 sm:h-[25vh] sm:w-max ">
            <Tag
              slug={state?.slug}
              id={state?.id}
              type={state?.type}
              bank={state?.bank}
              account={state?.account}
              name={state?.name}
              phone={state?.phone}
              bg={state.bg}
              bankStyle={state.bankStyle}
              font={state.font}
              text={state.text}
              icons={state.icons}
              barcode={state.barcode}
            />
          </div>

          <div className="w-2/3 flex justify-center flex-shrink-0 h-full p-4 overflow-auto sm:w-full sm:h-[50vh] overflow-x-clip ">
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

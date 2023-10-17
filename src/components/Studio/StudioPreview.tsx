"use client";
import Tag from "@/src/components/Tag/Tag";
import Studio from "@/src/components/Studio/Studio";
import { useEffect, useState, useReducer, useLayoutEffect } from "react";

const StudioPreview = ({ data }: any) => {
  useLayoutEffect(() => {
    const local = localStorage.getItem(data.id);
    if (local === null) {
      localStorage.setItem(data.id, JSON.stringify(data));
    } else {
      dispatch({
        type: "local",
        local,
      });
    }
  }, [0]);

  function reducer(state: any, action: any) {
    let key = action?.key;
    let local = action?.local;
    const value = action?.value;
    switch (action.type) {
      case "update":
        localStorage.setItem(
          data.id,
          JSON.stringify({
            ...state,
            [key]: value,
          })
        );
        return {
          ...state,
          [key]: value,
        };
        break;
      case "local":
        return JSON.parse(local);
      case "reset":
        localStorage.setItem(data.id, JSON.stringify(data));
        return data;

      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, { ...data });
  return (
    <main className="w-full  h-full flex flex-row  justify-between items-center sm:flex-col sm:justify-start bg-white ">
      <div className="flex  justify-center overflow-clip flex-shrink-0  items-center w-1/3 h-max  sm:w-full">
        <Tag state={state} dispatch={dispatch} />
      </div>

      <div className="w-2/3 flex flex-col justify-center flex-shrink-0 h-full px-4 overflow-auto sm:w-full overflow-x-clip ">
        <Studio dispatch={dispatch} state={state} />
      </div>
    </main>
  );
};
export default StudioPreview;

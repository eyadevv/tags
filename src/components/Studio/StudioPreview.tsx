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
    <main className="w-full h-full pt-2 flex flex-row  justify-between items-start sm:flex-col sm:items-center overflow-clip ">
      <div className="flex  justify-center overflow-clip flex-shrink-0  items-center w-1/3 h-full  sm:w-full sm:h-max">
        <Tag state={state} dispatch={dispatch} />
      </div>
      <Studio dispatch={dispatch} state={state} />
    </main>
  );
};
export default StudioPreview;

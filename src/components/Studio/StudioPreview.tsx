"use client";
import Tag from "@/src/components/Tag/Tag";
import Studio from "@/src/components/Studio/Studio";
import { useEffect, useState, useReducer } from "react";

const StudioPreview = ({ data }: any) => {
  const [local, setlocal] = useState("");
  useEffect(() => {
    setlocal(localStorage.getItem(data.id) || "");
    switch (local) {
      case "":
        localStorage.setItem(data.id, JSON.stringify(data));
        break;
      case local:
        dispatch({
          type: "local",
          local,
        });
      default:
        break;
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
        break;
      case "reset":
        localStorage.setItem(data.id, JSON.stringify(data));
        return data;

      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, { ...data });
  return (
    <div className="w-full  h-full flex flex-row  justify-start items-start sm:flex-col sm:items-center   ">
      <div className="flex  justify-center overflow-clip flex-shrink  items-center w-1/3 h-max  sm:w-full ">
        <Tag state={state} dispatch={dispatch} />
      </div>

      <div className="w-2/3 flex justify-center flex-shrink-0 h-full p-4 overflow-auto sm:w-full sm:h-[50vh] overflow-x-clip ">
        <Studio dispatch={dispatch} state={state} />
      </div>
    </div>
  );
};
export default StudioPreview;

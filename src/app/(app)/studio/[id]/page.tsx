"use client";
import {
  useTransition,
  useEffect,
  useState,
  useReducer,
  useLayoutEffect,
} from "react";
import FetchTag from "@/src/app/actions/FetchTag";
import Tag from "@/src/components/Tag/Tag";
import Studio from "@/src/components/Studio/Studio";
const Page = ({ params }: { params: { id: string } }) => {
  const [isPending, startTransition] = useTransition();
  const [tagData, settagData] = useState({});
  const { id } = params;

  useLayoutEffect(() => {
    if (!localStorage.getItem(id)) {
      return startTransition(async () => {
        const tag: any = await FetchTag(Number(id));
        if (tag !== null) {
          dispatch({
            type: "load",
            data: tag,
          });
          settagData(() => tag);
        }
      });
    } else {
      dispatch({
        type: "local",
      });
    }
  }, [id]);

  function reducer(state: any, action: any) {
    const data = action?.data;
    let key = action?.key;
    const value = action?.value;
    switch (action.type) {
      case "load":
        localStorage.setItem(
          id,
          JSON.stringify({
            ...data,
          })
        );
        return {
          ...state,
          ...data,
        };
      case "local":
        return {
          ...state,
          ...JSON.parse(localStorage.getItem(id) as string),
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
      case "reset":
        console.log(tagData);
        localStorage.setItem(
          id,
          JSON.stringify({
            ...tagData,
          })
        );
        return {
          ...tagData,
        };

      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, { ...tagData });
  return (
    <div className="w-full h-full flex justify-center items-start overflow-clip  ">
      {state.id ? (
        <div className="w-full  h-full flex flex-row  justify-between items-start sm:flex-col sm:items-center   ">
          <div className="flex  justify-center overflow-clip flex-shrink  items-center h-full w-1/3 sm:h-[25vh] sm:w-max ">
            <Tag state={state} dispatch={dispatch} />
          </div>

          <div className="w-2/3 flex justify-center flex-shrink-0 h-full p-4 overflow-auto sm:w-full sm:h-[50vh] overflow-x-clip ">
            <Studio dispatch={dispatch} state={state} />
          </div>
        </div>
      ) : (
        "No Tag"
      )}
    </div>
  );
};
export default Page;

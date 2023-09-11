import { useState } from "react";
import ReactGPicker from "react-gcolor-picker";
const Bgpicker = ({
  dispatch,
  bgStyle,
  bg,
}: {
  dispatch: Function;
  bgStyle: string;
  bg: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-3 sm:w-full w-max h-max">
      <p className="">الخفلية</p>
      <div className="flex flex-row gap-2 w-full h-full overflow-scroll ">
        <div className="flex flex-row gap-2">
          <div className="w-max h-max flex flex-col gap-2">
            <p className="label-text text-sm">Simple</p>
            <div
              onClick={() =>
                dispatch({
                  type: "update",
                  key: "bgStyle",
                  value: "simple",
                })
              }
              className={`
                w-32 
            ${bgStyle === "simple" ? "border-2" : "border-0"}
            h-20 bg-black rounded-lg flex justify-center items-center`}
            ></div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-max h-max flex flex-col gap-2">
            <p className="label-text text-sm">Gradient</p>
            <div
              onClick={() =>
                dispatch({
                  type: "update",
                  key: "bgStyle",
                  value: "gradient",
                })
              }
              style={{}}
              className={`w-32 ${
                bgStyle === "gradient" ? "border-2" : "border-0"
              } bg-gradient-to-br from-primary to-secondary h-20 rounded-lg `}
            ></div>
          </div>
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="w-max h-max flex flex-col gap-2">
            <p className="label-text text-sm ">Skin</p>
            <div
              onClick={() => dispatch("skin")}
              className={`${
                bgStyle === "skin" ? "border-2" : "border-0"
              } flex relative w-32 h-20 overflow-clip rounded-lg`}
            >
              <img
                src="/fancycake.png"
                width="100%"
                height="100%"
                className="absolute rounded-lg"
                alt="skin"
              />
            </div>
          </div>
        </div>
      </div>
      {bgStyle === "gradient" ? (
        <ReactGPicker
          value="red"
          gradient={true}
          solid={false}
          colorBoardHeight={200}
          popupWidth={""}
          onChange={(e: string) => {
            dispatch({
              type: "update",
              key: "bg",
              value: e,
            });
          }}
        />
      ) : bgStyle === "simple" ? (
        <ReactGPicker
          value="red"
          solid={true}
          colorBoardHeight={200}
          popupWidth={""}
          gradient={false}
          onChange={(e: string) => {
            dispatch({
              type: "update",
              key: "bg",
              value: e,
            });
          }}
        />
      ) : (
        123
      )}
    </div>
  );
};
export default Bgpicker;

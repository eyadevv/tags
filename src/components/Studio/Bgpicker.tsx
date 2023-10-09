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
            <p className="label-text text-sm">Solid</p>
            <div
              onClick={() =>
                dispatch({
                  type: "update",
                  key: "bgStyle",
                  value: "SOLID",
                })
              }
              className={`
                w-32 
            ${bgStyle === "SOLID" ? "border-2" : "border-0"}
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
                  value: "GRADIENT",
                })
              }
              style={{}}
              className={`w-32 ${
                bgStyle === "GRADIENT" ? "border-2" : "border-0"
              } bg-gradient-to-br from-primary to-secondary h-20 rounded-lg `}
            ></div>
          </div>
        </div>
        {/* <div className="flex flex-row gap-2 ">
          <div className="w-max h-max flex flex-col gap-2">
            <p className="label-text text-sm ">Skin</p>
            <div
              onClick={() => dispatch("SKIN")}
              className={`${
                bgStyle === "SKIN" ? "border-2" : "border-0"
              } flex relative w-32 h-20 overflow-clip rounded-lg`}
            >
              <img
                src="/fancycake.png"
                width="100%"
                height="100%"
                className="absolute rounded-lg"
                alt="SKIN"
              />
            </div>
          </div>
        </div> */}
      </div>
      {bgStyle === "GRADIENT" ? (
        <ReactGPicker
          value={bg}
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
      ) : bgStyle === "SOLID" ? (
        <ReactGPicker
          value={bg}
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
      ) : null}
    </div>
  );
};
export default Bgpicker;

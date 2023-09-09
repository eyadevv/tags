const Bgpicker = ({
  setbgStyle,
  bgStyle,
  onChange,
}: {
  setbgStyle: Function;
  bgStyle: string;
  onChange: Function;
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-3 sm:w-full w-max h-max">
      <p className="">الخفلية</p>
      <div className="flex flex-row gap-2 w-full h-full overflow-scroll ">
        <div className="flex flex-row gap-2">
          <div className="w-max h-max flex flex-col gap-2">
            <p className="label-text text-sm">Simple</p>
            <div
              className={`
                w-32 
            ${bgStyle === "simple" ? "border-2" : "border-0"}
            h-20 relative overflow-clip rounded-lg flex justify-center items-center`}
            >
              <input
                className=" w-36 absolute h-24 rounded-lg "
                type="color"
                name="color"
                onClick={() => setbgStyle("simple")}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-max h-max flex flex-col gap-2">
            <p className="label-text text-sm">Gradient</p>
            <div
              onClick={() => setbgStyle("gradient")}
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
              onClick={() => setbgStyle("skin")}
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
    </div>
  );
};
export default Bgpicker;

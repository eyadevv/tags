const Radius = ({
  tagRadius,
  bankRadius,
  dispatch,
}: {
  bankRadius: string;
  tagRadius: string;
  dispatch: Function;
}) => {
  return (
    <div className="sm:w-full  w-w-sm  gap-2 flex flex-col justify-center items-start">
      <div className="flex flex-col gap-2 ">
        <p>Bank Radius</p>
        <input
          type="range"
          name="bank Radius"
          size={1}
          max={4}
          id=""
          value={bankRadius}
          onChange={(e: any) => {
            dispatch({
              type: "update",
              key: "bankRadius",
              value: e.target?.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <p>Tag Radius</p>
        <input
          value={tagRadius}
          type="range"
          name="tag Radius"
          max={7}
          id=""
          onChange={(e: any) => {
            dispatch({
              type: "update",
              key: "tagRadius",
              value: e.target?.value,
            });
          }}
        />
      </div>
    </div>
  );
};
export default Radius;

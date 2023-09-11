const Radius = ({ dispatch }: { dispatch: Function }) => {
  return (
    <div className="sm:w-full  w-w-sm  gap-2 flex flex-col justify-center items-start">
      <input
        type="range"
        name="bank Radius"
        size={1}
        max={4}
        id=""
        onChange={(e: any) => {
          dispatch({
            type: "update",
            key: "bankRadius",
            value: e.target?.value,
          });
        }}
      />
      <input
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
  );
};
export default Radius;

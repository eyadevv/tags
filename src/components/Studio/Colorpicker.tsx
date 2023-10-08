import ReactGPicker from "react-gcolor-picker";
const Colorpicker = ({ dispatch }: { dispatch: Function }) => {
  return (
    <div>
      <p>النص</p>
      <ReactGPicker
        value="red"
        gradient={false}
        solid={true}
        colorBoardHeight={0}
        popupWidth={""}
        onChange={(e: string) => {
          dispatch({
            type: "update",
            key: "color",
            value: e,
          });
        }}
      />
    </div>
  );
};
export default Colorpicker;

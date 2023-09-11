const Input = ({
  lable,
  placeholder,
  onChange,
  value,
  hint,
}: {
  lable: string;
  placeholder: string;
  onChange: Function;
  value: string;
  hint?: string;
}) => {
  return (
    <div className="form-control sm:w-full  w-1/2 text-lg ">
      <label className="label">
        <span className="">{lable}</span>
        <span className="label-text-alt text-red-200">{hint}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`input ${
          hint ? "border-error" : null
        } input-bordered w-full h-14`}
        onChange={(e) => onChange(e)}
        value={value}
      />
      {/* <label className="label">
          <span className="label-text-alt">Bottom Left label</span>
          <span className="label-text-alt">Bottom Right label</span>
        </label> */}
    </div>
  );
};

export default Input;

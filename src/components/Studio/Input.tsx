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
    <div className="form-control w-11/12 max-w-sm text-lg ">
      <label className="label">
        <span className="">{lable}</span>
        <span className="label-text-alt text-red-200">{hint}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`input ${
          hint ? "border-error" : null
        } input-bordered w-full max-w-sm h-14`}
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

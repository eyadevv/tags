const Select = ({
  options,
  header,
  placeholder,
  onChange,
  value,
}: {
  options: string[];
  header: React.ReactNode;
  placeholder: string;
  onChange: Function;
  value: string;
}) => {
  return (
    <div className="form-control w-11/12 max-w-sm text-lg ">
      <label className="label">
        <span className="">{header}</span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e)}
        className="select select-bordered h-14"
      >
        <option disabled selected>
          {placeholder}
        </option>
        {options.map((option, id) => {
          return <option key={id}>{option}</option>;
        })}
      </select>
      {/* <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label> */}
    </div>
  );
};

export default Select;

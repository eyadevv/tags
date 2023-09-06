const Content = () => {
  return (
    <div>
      <Select />
      <Input lable="رقم الحساب" placeholder="مكون من 6 أرقام" />
      <Input lable="إسم صاحب الحساب" placeholder="تأكد من مطابقة البيانات " />
      {/* <Input lable=""placeholder="مكون من 6 أرقام" /> */}
    </div>
  );
};
export default Content;

const Input = ({
  lable,
  placeholder,
}: {
  lable: string;
  placeholder: string;
}) => {
  return (
    <div className="form-control w-full max-w-xs " dir="rtl">
      <label className="label">
        <span className="label-text">{lable}</span>
        {/* <span className="label-text-alt text-xs">مطلوب</span> */}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
      {/* <label className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </label> */}
    </div>
  );
};

const Select = () => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best fantasy franchise</span>
        <span className="label-text-alt">Alt label</span>
      </label>
      <select className="select select-bordered">
        <option disabled selected>
          Pick one
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
      <label className="label">
        <span className="label-text-alt">Alt label</span>
        <span className="label-text-alt">Alt label</span>
      </label>
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";

const Studio = ({
  dispatch,
  bg,
  bank,
  account,
  name,
  phone,
}: {
  dispatch: Function;
  bg: string;
  bank: string;
  account: string;
  name: string;
  phone: string;
}) => {
  const [accountHint, setaccountHint]: any[] = useState(null);
  const [phoneHint, setphoneHint]: any[] = useState(null);
  const [bgStyle, setbgStyle] = useState("simple");
  return (
    <div dir="rtl" className="flex flex-col gap-2">
      <Select
        header="إختر البنك"
        options={["bankak", "ocash", "fawry"]}
        value={bank}
        placeholder="البنك"
        onChange={(e: any) =>
          dispatch({
            type: "update",
            key: "bank",
            value: e.target.value,
          })
        }
      />
      <Input
        value={account}
        hint={accountHint}
        onChange={(e: any) => {
          const acc = Number(e.target.value);
          if (String(acc) !== "NaN") {
            setaccountHint(null);

            dispatch({
              type: "update",
              key: "account",
              value: e.target.value,
            });
          } else {
            setaccountHint("الحروف غير مسموح بها");
          }
        }}
        lable="رقم الحساب"
        placeholder=" 6 أرقام"
      />
      <Input
        value={name}
        onChange={(e: any) => {
          dispatch({
            type: "update",
            key: "name",
            value: e.target.value,
          });
        }}
        lable="إسم صاحب الحساب"
        placeholder="تأكد من مطابقة البيانات "
      />
      <Input
        value={phone}
        hint={phoneHint}
        onChange={(e: any) => {
          let num = Number(e.target.value);
          if (String(num) !== "NaN") {
            setphoneHint(null);
            dispatch({
              type: "update",
              key: "phone",
              value: e.target.value,
            });
          } else {
            setphoneHint("الحروف غير مسموح بها");
          }
        }}
        lable="رقم الهاتف"
        placeholder="+249"
      />
      {
        //////////////// BackGround
      }

      <div className="flex flex-col justify-center items-start gap-3">
        <p className="label-text">الخفلية</p>
        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row gap-2">
            <div className="w-max h-max flex flex-col gap-2">
              <p className="label-text-alt">Simple</p>
              <input
                className="w-20 h-10 rounded-lg"
                type="color"
                name="color"
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    key: "bg",
                    value: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="w-max h-max flex flex-col gap-2">
              <p className="label-text-alt">Gradient</p>
              <div
                className={`w-20  bg-gradient-to-br from-primary to-secondary h-10 rounded-lg`}
              ></div>
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            <div className="w-max h-max flex flex-col gap-2">
              <p className="label-text-alt">Skin</p>
              <div className="flex relative w-20 h-10 overflow-clip">
                <img
                  src="/fancycake.png"
                  width="80px"
                  height="40px"
                  className="absolute"
                  alt="skin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      {bgStyle === "simple" ? (
        <input
          type="color"
          name="color"
          onChange={(e) => {
            dispatch({
              type: "update",
              key: "bg",
              value: e.target.value,
            });
          }}
        />
      ) : null} */}
    </div>
  );
};
export default Studio;

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
    <div className="form-control w-full max-w-xs  ">
      <label className="label">
        <span className="label-text">{lable}</span>
        <span className="label-text-alt text-red-200">{hint}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`input ${
          hint ? "border-error" : null
        } input-bordered w-full max-w-xs`}
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
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{header}</span>
        {/* <span className="label-text-alt">Alt label</span> */}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e)}
        className="select select-bordered"
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

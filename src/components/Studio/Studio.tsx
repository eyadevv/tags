"use client";
import Input from "./Input";
import Select from "./Select";
import Bgpicker from "./Bgpicker";
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
    <div dir="rtl" className="flex flex-col gap-2 w-full items-center">
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
      <Bgpicker
        setbgStyle={setbgStyle}
        bgStyle={bgStyle}
        onChange={(e) =>
          dispatch({
            type: "update",
            taget: "style",
            key: "bg",
            value: e.target.value,
          })
        }
      />
    </div>
  );
};
export default Studio;
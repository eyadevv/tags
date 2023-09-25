import { BiSolidCrown, BiDollar } from "react-icons/bi";
const Preview = ({ data }: any) => {
  const {
    id,
    slug,
    bg,
    type,
    bgStyle,
    bank,
    account,
    name,
    phone,
    bankRadius,
    tagRadius,
  } = data;
  return (
    <div className="w-60 overflow-clip h-max gap-2 p-2 flex flex-col  justify-around rounded-xl bg-slate-200  ">
      <a
        href={`/studio/${id}`}
        className="flex flex-col justify-center items-center gap-2 sm:flex-row-reverse"
      >
        <span
          className={`flex h-56 w-56 flex-shrink-0 flex-col items-center p-4 justify-center gap-2 rounded overflow-clip`}
          style={{
            background: bg,
            borderRadius: tagRadius + "rem",
          }}
        >
          <img
            alt={bank || "bank"}
            src={`/${bank}.png`}
            width={720}
            height={1080}
            style={{
              borderRadius: bankRadius + "rem",
            }}
            className={`h-20 w-20 bg-black bg-opacity-10`}
          />

          <p className="text-lg font-bold">{account}</p>
          <p className="text-base font-bold">{name}</p>
          <p className="text-sm">{phone}</p>
        </span>
      </a>
      <div className="w-full text-black h-16 flex flex-row justify-between items-center">
        <p className=" ">
          {type === "PREMIUM" ? (
            <BiSolidCrown color="gold" size={25} />
          ) : type === "PAID" ? (
            <BiDollar color="gold" size={25} />
          ) : (
            "FREE"
          )}
        </p>
        <div className="w-10 h-10 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Preview;

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
    <a
      href={`/studio/${id}`}
      className="flex flex-col justify-center items-center gap-2 sm:flex-row-reverse "
    >
      <span
        className={` relative flex h-56 w-56 flex-shrink-0 flex-col items-center p-4 justify-center gap-2 rounded overflow-clip`}
        style={{
          background: bg,
          borderRadius: tagRadius + "rem",
        }}
      >
        <p className="absolute left-2 top-2">
          {type === "PREMIUM" ? (
            <BiSolidCrown color="gold" size={25} />
          ) : type === "PAID" ? (
            <BiDollar color="gold" size={25} />
          ) : null}
        </p>

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
  );
};

export default Preview;

import { BsFire } from "react-icons/bs";
const Preview = ({ data }: any) => {
  const {
    id,
    bg,
    type,
    downloads,
    bank,
    account,
    name,
    phone,
    bankRadius,
    tagRadius,
    branch,
  } = data;
  return (
    <div className="overflow-clip p-2 w-max h-max gap-2 flex flex-col  justify-around rounded-xl bg-slate-200 ">
      <a
        href={`/studio/${id}`}
        className="flex h-full w-full   flex-shrink flex-col justify-center items-center gap-2 sm:flex-row-reverse"
      >
        <span
          className={`flex h-64 w-64 flex-shrink-0 flex-col items-center py-4 justify-center gap-2 rounded overflow-clip`}
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
          <p className="text-base font-bold">{branch || "branch"}</p>
          <p className="text-sm">{phone}</p>
        </span>
      </a>
      <div className="w-full text-black h-16 flex flex-row justify-between items-center">
        {type === "COMMUNITY" ? (
          <p className="text-xs p-4 bg-black bg-opacity-75 text-white rounded-full">
            {type}
          </p>
        ) : (
          <p className="text-xs p-4 bg-orange-600 text-white rounded-full">
            {type}
          </p>
        )}
        <div className="text-xl font-bold flex gap-1 justify-center items-center">
          <p>{downloads}</p>
          <BsFire color="red" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Preview;

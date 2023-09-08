"use client"

const Tag = ({ data }: any) => {
  const { id, type, bankName, accountNumber, name, phoneNumber, style } = data
  return (
    <a href={`/studio/${id}`} className="flex h-72 w-72 flex-col items-center justify-center gap-2 rounded-xl py-2">
      <span className="relative flex h-5/6 w-5/6 flex-col items-center justify-center gap-2 rounded bg-primary">
        <p className="absolute left-2 top-2">{type}</p>

        <img
          alt="bank"
          src={`/${bankName}.png`}
          width={720}
          height={1080}
          className="h-20 w-20 rounded-full bg-white bg-opacity-10"
        />

        <p className="text-lg font-bold">{accountNumber}</p>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-lg font-bold">{phoneNumber}</p>
      </span>
    </a>
  )
}
export default Tag

"use client"
import Image from "next/image"
import { useRef } from "react"
import html2canvas from "html2canvas"
// const handleDownloadImage = async (element: any) => {
//   let canvas = await html2canvas(element)
//   let data = canvas.toDataURL("image/jpg")
//   let link = document.createElement("a")

//   link.href = data
//   link.download = "downloaded-image.jpg"

//   document.body.appendChild(link)
//   link.click()
//   document.body.removeChild(link)
// }

const Tag = ({ bank, account, name, number, type }: any) => {
  const TagRef = useRef(null)
  return (
    <div className="flex h-72 w-72 flex-col items-center justify-center gap-2 rounded-xl py-2">
      <span
        className="relative flex h-5/6 w-5/6 flex-col items-center justify-center gap-2 rounded bg-primary"
        ref={TagRef}
        // onClick={() => handleDownloadImage(TagRef.current)}
      >
        <p className="absolute left-2 top-2">{type}</p>

        <img
          alt="bank"
          src={`/${bank}.png`}
          width={50}
          height={50}
          className="h-20 w-20 rounded-full bg-white bg-opacity-10"
        />

        <p className="text-lg font-bold">{account}</p>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-lg font-bold">{number}</p>
      </span>
    </div>
  )
}
export default Tag

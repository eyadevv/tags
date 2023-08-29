import Tag from "@/components/Tag/Tag"
import PRISMA from "@/lib/prisma"
import { TAGSTYPE } from "@prisma/client"
const page = async ({ params }: { params: { type: string } }) => {
  const type = params.type.toUpperCase()
  const tags = await PRISMA.tag
    .findMany({
      where: {
        type: type as TAGSTYPE,
      },
    })
    .then((res) => {
      return res?.length > 0 ? res : null
    })
    .catch((err) => null)

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-blue-900">
      {tags
        ? tags.map((tag) => <Tag bank="bankak" account="123435" name="eyad faisal nimir" number="0967098861" />)
        : "No Tags Found"}
    </div>
  )
}
export default page

import Tag from "@/components/Tag/Tag"

const page = ({ params }: any) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-blue-900">
      {params.type}
      <Tag bank="bankak" account="123435" name="eyad faisal nimir" number="0967098861" />
    </div>
  )
}
export default page

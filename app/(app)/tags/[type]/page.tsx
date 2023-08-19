const page = ({params}:any) => {
  return (
    <div className="w-full bg-blue-900 min-h-screen flex justify-center items-center" >
      {params.type}

    </div>

  )
}
export default page
import { Button } from "../Button/Button"
const Tag = ({bank , account , name , number ,type }:any) => {
  return (
    <div className="w-72 h-72 gap-2 py-2 flex justify-center items-center rounded-xl flex-col" >
        <div className="w-5/6 relative h-5/6 bg-primary gap-2 rounded flex flex-col justify-center items-center" >
      <p className="absolute top-2 left-2" >{type}</p>

        <p className="bg-white w-20 h-20 rounded-full" ></p>
        <p className="font-bold text-lg" >{account}</p>
        <p className="font-bold text-lg" >{name}</p>
        <p className="font-bold text-lg" >{number}</p>
    </div>
    <div className="w-5/6 flex justify-around items-center" >
        <Button href="/studio" intent='primary'>أستخدم</Button>
    </div>
    </div>

  )
}
export default Tag
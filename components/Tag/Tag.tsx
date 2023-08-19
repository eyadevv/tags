import { Button } from "../Button/Button"
const Tag = () => {
  return (
    <div className="w-72 h-72 gap-2 py-2 flex justify-center items-center rounded-xl flex-col" >
        <div className="w-5/6 h-5/6 bg-primary gap-2 rounded flex flex-col justify-center items-center" >
        <p className="bg-white w-20 h-20 rounded-full" ></p>
        <p className="font-bold text-lg" >224776</p>
        <p className="font-bold text-lg" >Eyad Faisal Nimir Hassan</p>
        <p className="font-bold text-lg" >0967098861</p>
        {/* <p className=" text-opacity-0" >tags.sd</p> */}
    </div>
    <div className="w-5/6 flex justify-around items-center" >
        <Button href="/tag" intent='primary'>Use</Button>
        <Button href="/studio" intent='secondary' >Edit</Button>

        
    </div>
    </div>

  )
}
export default Tag
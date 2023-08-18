import { Button } from "components/Button/Button"
 

 
export default function Page() {
  return (
      <main className="bg-primary text-white w-screen flex flex-col justify-center items-center h-screen" >
        <h1>Landing Page</h1>
        <Button className="w-max h-max py-2 px-2 bg-white text-black" href="/home" size='sm' underline={false} >
            Go to APP !
          </Button>
         


      </main>
      
  )
}

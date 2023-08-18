import "@/styles/tailwind.css"
import { Metadata } from "next"
import Nav from "@/components/Nav/Nav"
export const metadata: Metadata = {
  title: 'TAGS',
  description:"Payment Tags Made Easy"
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-screen h-max min-h-screen bg-primary text-white flex flex-col justify-start items-center" >
        <Nav />
        <section className="w-11/12 h-max flex flex-col justify-start items-center bg-white rounded bg-opacity-10" > 
        {children}

        </section>
        </body>
    </html>
  )
}

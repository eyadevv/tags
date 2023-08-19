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
      <body className="w-screen relative h-screen bg-primary text-white flex flex-col justify-start items-center overflow-hidden" >
        <Nav />
        <section className="w-11/12 h-[85vh] flex flex-col justify-start items-center bg-white rounded bg-opacity-10" > 
        {children}
        </section>
        </body>
    </html>
  )
}

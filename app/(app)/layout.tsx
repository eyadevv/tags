import "@/styles/tailwind.css"
import { Metadata } from "next"
import Nav from "@/components/Nav/Nav"
import Footer from "@/components/Footer/Footer"
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
      <body className="w-screen relative h-max bg-primary text-white flex flex-col justify-start items-center overflow-auto overflow-x-clip" >
        <Nav />
        <section className="w-11/12 h-max min-h-screen flex flex-col justify-start items-center bg-white rounded bg-opacity-10 " > 
        {children}
        </section>
        <Footer />
        </body>
    </html>
  )
}

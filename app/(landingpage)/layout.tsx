import "@/styles/tailwind.css"
import { Metadata } from "next"

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
      <body>{children}</body>
    </html>
  )
}

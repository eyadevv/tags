import Head from "next/head"
import { Button } from "components/Button/Button"
import Link from "next/link"
export default function Web() {
  return (
    <>
      <Head>
        <meta property="og:url" content="waseet.org/tags" />
        <meta
          property="og:image"
          content="waseet.org/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>TAGS - Payment Tags Made Easy</title>
      </Head>
      <main className="bg-primaryDark text-white w-screen flex flex-col justify-center items-center h-screen" >
        <h1>Landing Page</h1>
        <Button className="w-max h-max py-2 px-2 bg-BRAND" href="/app" size='sm' underline={false} >
            Go to APP !
          </Button>
         


      </main>
      
    </>
  )
}

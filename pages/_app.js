import '../styles/globals.css'
import Head from 'next/head'
import { IconContext } from "react-icons";
import Loader from '@/components/caveats/loader'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>RCK•ROCK Token - Providing unchartered opportunities with the adoption and utilization of blockchain technologies.</title>
        <meta name="description" content="Providing unchartered opportunities with the adoption and utilization of blockchain technologies."/>
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Providing unchartered opportunities with the adoption and utilization of blockchain technologies." />
        <meta property="og:description"        content="Developing a compelling ventures for RCK Token users that harness blockchain technology that touches gaming, NFT, marketing and DeFi and other social applications." />
        <meta property="og:image"              content='./Thumbnail/thumbnail.jpg' />
        <link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/Favicon/site.webmanifest"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
      </Head>
      <IconContext.Provider value={{ color: "#fff", className: "global-class-name" }}>
        <Loader/>
        
        <Component {...pageProps} />
      </IconContext.Provider>
    </>
  
  )
}

export default MyApp

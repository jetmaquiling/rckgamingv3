import '../styles/globals.css'
import Head from 'next/head'
import { IconContext } from "react-icons";
import Loader from '@/components/caveats/loader'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
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

/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import NavigationV2 from '@/components/navigation/navigationv2';
import LinksButton from '@/components/caveats/links';

export default function Disclaimer() {
  

  return (
    <div className={style.main}>
      <Head>
        <title>RCK - Our Vision to Ventures</title>
        <meta name="description" content="RCK TOKEN" />
        
      </Head>
      <HeadV2 title={"Documentation"} root={"/v1"}/>
      <div className={style.titleContainer}>
        <h2 className={style.titleText} >Working In Progress.</h2>
      </div>
      <div className={style.container}>
        <NavigationV2/>

        

        <div className={style.contentBox}>
          <h2 className={style.boldText}>
            We're creating something great. Please comeback later.
          </h2>
          <h2 className={style.normalText}>
            This documentation can be found in the whitepaper.
          </h2>


          <div className={style.previewContainer}>
            
            <Link href="/">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>{"< Homepage"}</h4> 
              </div>
            </Link>
              
            <Link href="/Files/RCK Whitepaper.pdf">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>{"Get Started >"}</h4> 
              </div>
            </Link>

          </div>
          <LinksButton/>
        </div>

      </div>

      <FootV1/>
    </div>
  )
}

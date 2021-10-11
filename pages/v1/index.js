/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1'
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import NavigationV2 from '@/components/navigation/navigationv2'
import LinksButton from '@/components/caveats/links'
import ScrollButton from '@/components/buttons/scroll'


export default function Disclaimer() {


  return (
    <div className={style.main}>
      <ScrollButton/>
      <Head>
        <title>RCK•ROCK Token - Get Started</title>
        <meta name="description" content="Developing a compelling ventures for RCK Token users that harness blockchain technology that touches gaming, NFT, marketing and DeFi and other social applications."/>
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="RCK•ROCK Token - Get Started:What is RCK Token?" />
        <meta property="og:description"        content="Developing a compelling ventures for RCK Token users that harness blockchain technology that touches gaming, NFT, marketing and DeFi and other social applications." />
        <meta property="og:image"              content='./Thumbnail/thumbnail.jpg' />
      </Head>
      <HeadV2 title={"Documentation"} root={"/v1"} />


      <div className={style.titleContainer}>
        <h1 className={style.titleText}  >Get Started</h1>
      </div>

      <div className={style.container}>
        <NavigationV2/>

        

        <div className={style.contentBox}>
          <h2 className={style.title1Text}>
            What is RCK TOKEN?
          </h2>
          <p className={style.normalText}>
            A Rock is connotes formidability and stability that is the bedrock of mountains or temple.
            This is the spirit behind the Rock Token.
          </p>

          <p className={style.normalText}>
            Rock refer to the overall eco-system with initiatives called “ventures” exclusively using
            ROCK Token or RCK Token. 
          </p>
          <div className={style.imageBox1}>
            <img src="/Thumbnail/thumbnail.jpg" className={style.image1}/>
          </div>
          <h3 className={style.subText}>
            Our ROCK-Solid MISSION
          </h3>
          <p className={style.normalText}>
            To develop compelling ventures for RCK Token users that harness blockchain technology
            that touches gaming, NFT, marketing and DeFi and other social applications.
          </p>

          <h3 className={style.subText}>
            Our ROCK-Solid Vision
          </h3>
          <p className={style.normalText}>
            We envision to improve lives (especially the economically disadvantaged) by providing
            unchartered opportunities with the adoption and utilization of blockchain tehcnologies.
            Thereby enriching lives for those participating in the community as creators, developers,
            or simply users.
          </p>
          <div className={style.imageBox1}>
            <img src="/Thumbnail/RCKPreLaunch.jpg" className={style.image1}/>
          </div>

          <div className={style.previewContainer}>
            
            <Link href="/v1">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>{"< Homepage"}</h4> 
              </div>
            </Link>
              
            <Link href="/v1">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>{"Our Ventures >"}</h4> 
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

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
        <title>RCK - Target Initial Funds and Use</title>
        <meta name="description" content="Target Initial Funds and Use" />
      </Head>

      
      <HeadV2 title={"Documentation"} root={"/v1"}/>
      <div className={style.titleContainer}>
        <h2 className={style.titleText} >TARGET USE OF INITIAL FUNDS</h2>
      </div>
      <div className={style.container}>
        <NavigationV2/>

        

        <div className={style.contentBox}>
          <h2 className={style.title1Text}>
           Target Use of Funds
          </h2>
          <div className={style.imageBox1}>
            <img src="/Images/initialfunds/Slide1.JPG" className={style.image1}/>
          </div>
         
            <h3 className={style.subText} >
              Reserve - 5%
            </h3>
            <p className={style.normalText}>
              To be deployed against unwarranted
              downward price movement
            </p>
            <div className={style.dash}/>

            <h3 className={style.subText} >
              Marketing and Partnerships - 5%
            </h3>
            <p className={style.normalText}>
              Resources for marketing, advertising and strategic partnerships
              to advance the ventures or communities
            </p>
            <div className={style.dash}/>

            <h3 className={style.subText} >
              Management and Operations - 10%
            </h3>
            <p className={style.normalText}>
              Funds allocated for management and peoplerelated operating cost
            </p>
            <div className={style.dash}/>

            <h3 className={style.subText} >
             IT, Systems Maintenance - 10%
            </h3>
            <p className={style.normalText}>
              Allocated for hosting, maintenance, repair and
              other IT related costs
            </p>
            <div className={style.dash}/>

            <h3 className={style.subText} >
              Listing Tokens - 20%
            </h3>
            <p className={style.normalText}>
            Resources used for Liquidity Pool as a Liquidity Provider in
            the DEX listing. Subsequent funds to be deployed for followon listings
            </p>
            <div className={style.dash}/>


            <h3 className={style.subText} >
             Development of Ventures - 50%
            </h3>
            <p className={style.normalText}>
              Allocated to incubate and develop current and future ventures
            </p>
            <div className={style.dash}/>

            <div className={style.imageBox1}>
            <img src="/Images/initialfunds/Slide2.JPG" className={style.image1}/>
          </div>

          <div className={style.previewContainer}>
            
            <Link href="/v1/tokenomiks">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Tokenomiks</h4> 
              </div>
            </Link>
            
            <Link href="/v1/roadmap">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Looking Forward</h4> 
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

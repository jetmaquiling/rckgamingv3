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
        <title>RCK - ROADMAP</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <HeadV2 title={"Documentation"} root={"/v1"}/>
      <div className={style.titleContainer}>
        <h2 className={style.titleText} >Forward Looking</h2>
      </div>
      <div className={style.container}>
        <NavigationV2/>

        

        <div className={style.contentBox}>
          <p className={style.headlineText}>
            Venture with us!
          </p>
          <p className={style.subText}>
            STAGE 1
          </p>
          <p className={style.labelText}>
            Q2 - 2021
          </p>
          <p className={style.tabText}>
            • Brainstorming concept and identity development <br/>
            • Research and incubation of Venture 1 <br/>
            • Testing of V1 RPS NFT Game <br/>
            • White Paper development <br/>
            • Website development <br/>
            • Team formation <br/>
            • Idea dissemination to interested
            people for future Roadshows and 
            Initial Public Distribution
          </p>

          <div className={style.dash}/>

          <p className={style.subText}>
            STAGE 2
          </p>
          <p className={style.labelText}>
            Q4 - 2021
          </p>
          <p className={style.tabText}>
            • Whitepaper Release<br/>
            • Website Launch –<br/>
            • Launch for Venture 1: RPS NFT Game <br/>
            • Roadshows For Initial Private Distribution
            (IPD) of RCK Tokens<br/>
            • Initial Distribution of Axesscards NFT<br/>
            • Public Launching of RCK Tokens<br/>
            • Early Adopter Allocation - tentative<br/>
            • Listing on Decentralised Exchange (DEX)<br/>
          </p>

          <div className={style.dash}/>


          <p className={style.subText}>
            STAGE 3
          </p>
          <p className={style.labelText}>
            Q2 - 2022
          </p>
          <p className={style.tabText}>
            • 1 st Enhancement V1 RPS NFT Game<br/>
            <p className={style.tab2Text}>
            - Launch RPS Marketplace<br/>
            - Beta Testing RPS to Android<br/>
            </p>
            • Series A Allocation – RCK Token<br/>
            • Series B Allocation RCK Token<br/>
            • Additional Listing on DEX - tentative<br/>
           </p>


           <div className={style.dash}/>
           <p className={style.subText2}>
          </p>

           <p className={style.subText2}>
            STAGE 4
          </p>
          <p className={style.labelText}>
            Q1 - 2023
          </p>
          <p className={style.tabText}>
            • 2nd Enhancement V1 RPS NFT Game<br/>
              <p className={style.tab2Text}>
              - Beta Testing RPS to IOS<br/>
              - Launch of RPS to Android<br/>
              </p>
            • Marketing and Partnerships for RPS<br/>
            • Incubation of Venture 2 (v2)<br/>
           </p>

          
           <div className={style.dash}/>


          <p className={style.subText2}>
            STAGE 4
          </p>
          <p className={style.labelText}>
            Q4 - 2022
          </p>
          <p className={style.tabText}>
            • 3rd Enhancement V1 RPS NFT Game<br/>
            <p className={style.tab2Text}>
            - Development to native platform<br/>
            </p>
            • Development and launching of V2<br/>
            • Incubation of Venture 3 (V3)<br/>
            • Additional Listing<br/>

          </p>

        <div className={style.dash}/>

          <p className={style.subText2}>
            STAGE 4
          </p>
          <p className={style.labelText}>
            Q3 - 2022
          </p>
          <p className={style.tabText}>
            • Soft Launching of V3<br/>
            • Expansion of ventures with additional applications<br/>
            • Additional Listing on other DEX (Coinmarketcap and Coingecko)<br/>
          </p>




          
          <div className={style.previewContainer}>
            
            <Link href="/v1/initialfundsanduse">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Target Funds and Uses</h4> 
              </div>
            </Link>
              
            <Link href="/">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Homepage</h4> 
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
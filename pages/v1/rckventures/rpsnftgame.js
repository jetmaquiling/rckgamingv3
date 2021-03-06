/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import NavigationV2 from '@/components/navigation/navigationv2'
import LinksButton from '@/components/caveats/links'

export default function AbstractAndBackdrop() {
  

  return (
    <div className={style.main}>
      <Head>
        <title>RCK – RPS NFT GAME</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <HeadV2  title={"Documentation"} root={"/v1"}/>
      <div className={style.titleContainer}>
        <h2 className={style.titleText} >VENTURE 1 - RPS GAME</h2>
      </div>
      <div className={style.container}>
        

        <NavigationV2/>

        <div className={style.contentBox}>
          <p className={style.headlineText}>
            NFT Game : AXIE INFINITY
          </p>
          <p className={style.normalText}>
            So, you’ve heard of Axie Infinity. It led
            the way as the NFT-based online video
            game in countries such as the
            Philippines, Indonesia and Valenzuela.
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/rpsgame/Slide1.JPG" className={style.image1}/>
          </div>
    
          <p className={style.normalText}>
            It was cool, plus the “play-to-earn” (PtoE) model quickly
            gave reasons to join the bandwagon especially during
            challenging times where entertainment and “makingmoney” resonated among youth and early adopters. In
            April 2021, Axie players were already 30k strong but that
            further exploded to 1 million globally August 2021 had a
            daily average of Ether transfers of around USD30 million
            (Php1.50 billion) in value. Axie is built on Ethereum
            blockchain.
          </p>

          

          <p className={style.title2Text}>
            So what’s the PROBLEMO?
          </p>

          <div className={style.imageBox1}>
            <img src="/Images/rpsgame/Slide2.JPG" className={style.image1}/>
          </div>
          <p className={style.normalText}>
            Well, not at all cheap these days to
            start playing. Cost to play has
            skyrocketed with popularity, where
            barrier-to-play has increased
            significantly especially for low income
            countries.
          </p>

          <p className={style.normalText}>
          It may not just be the cost as well. The
            configuration and complexity of the
            game can potentially intimidate other
            participants who may want to explore
            the NFT-gaming and crypto space. So
            in our humble opinion, it may be too
            complex for others.
          </p>

          

          <p className={style.boldText}>
            We believe the power of the game to unlock the revolutionary
            technology of blockchain for everyone. We want to do
            this by imbedding the game with NFT / crypto. 
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/rpsgame/Slide3.JPG" className={style.image1}/>
          </div>
          <p className={style.subText}>
            The challenge is how do we encourage others?<br/>
            SO, WE’RE LAUNCHING...
          </p>


          <p className={style.normalText}>
            Our 1st Venture is the RPS NFT
            Game. RPS or “Rock-Paper-Scissors”.
            See, you already know it!
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/rpsgame/Slide4.JPG" className={style.image1}/>
          </div>
          <p className={style.normalText}>
            It’s the most universal, simplest
            and easiest game known to
            everyone dating back as far as 206
            BC. We believe that a recognizable,
            easy, low cost and addictive game
            would be strategic and digestible
            intro to the blockchain world.

          </p>
          <div className={style.imageBox1}>
            <img src="/Images/rpsgame/Slide5.JPG" className={style.image1}/>
          </div>
          <div className={style.previewContainer}>
            
          <Link href="/Images/rpsgame/Slide6.JPG">
            <div className={style.previewBox}>
              <h4 className={style.buttonText}>Our Vision to Venture</h4> 
            </div>
          </Link>

            
          <Link href="/Images/rpsgame/Slide7.JPG">
            <div className={style.previewBox}>
              <h4 className={style.buttonText}>RPS Game Mechanics</h4> 
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

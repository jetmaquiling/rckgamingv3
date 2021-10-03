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
        <h2 className={style.titleText} >RPS NFT GAME</h2>
      </div>
      <div className={style.container}>
        

        <NavigationV2/>

        <div className={style.contentBox}>
          <p className={style.normalText}>
            So, you’ve heard of Axie Infinity. It led
            the way as the NFT-based online video
            game in countries such as the
            Philippines, Indonesia and Valenzuela.
          </p>
          <p className={style.normalText}>
            The blockchain’s immediate popular application - Bitcoin, opened up the massive downpour of money and waves of cryptocurrencies. In
            2013, the total market value of the entire cryptocurrency was USD 1.64 billion. Even then, the greater majority was not really paying attention.
            After 8 years, that value reached USD 2.455 trillion in May 2021. That’s a 150,153% jump (1,502x) equivalent as the as 8th largest economy in
            the world. There were only 66 cryptocurrencies globally in 2013 and has since exponentially exploded to over 6k cryptos in 2020 showing a 91x
            jump (Source: Statista 2021). While the top 10% crypto makes up about 88% of the total market value of USD2 trillion (Source: Block Social), the
            sheer number of cryptocurrencies is a convincing sign that adoption and demand from the wider population is has accelerated.
          </p>

          <p className={style.boldText}>
            NFT Game
          </p>

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

          <p className={style.boldText}>
            So what’s the Problemo?
          </p>
          <p className={style.normalText}>
            Well, not at all cheap these days. Cost to play
            has skyrocketed that you would need around
            USD1,200 (Php60,000) for 3 sets of Axie (current
            estimates on August 2021). With popularity,
            barrier-to-play has increased significantly
            especially for low income countries like the
            Philippines where the minimum wage (Metro
            Manila) is Php537/daily (USD10.74). So meaning it
            would take up half-year’s salary of the minimum
            wage earner. Not everyone
          </p>

          <p className={style.normalText}>
            It may not just be the cost as well. The
            configuration and complexity of the game can
            potentially intimidate older-generation
            participants who may want to explore the NFTgaming and crypto space. So in our humble
            opinion, it may be too complex for others
          </p>


          <p className={style.boldText}>
            WE BELIEVE the power of the game to unlock the revolutionary
            technology of blockchain for everyone. We want to do
            this by imbedding the game with NFT / crypto. 
          </p>
          <p className={style.boldText}>
            The challenge is how do we encourage many everyone?
          </p>

          <p className={style.boldText}>
            SO, WE LAUNCH RPS NFT GAME
          </p>


          <p className={style.normalText}>
            Our 1st Venture is the RPS NFT
            Game. RPS or “Rock-Paper-Scissors”.
            See, you already know it!
          </p>

          <p className={style.normalText}>
            It’s the most universal, simplest
            and easiest game known to
            everyone dating back as far as 206
            BC. We believe that a recognizable,
            easy, low cost and addictive game
            would be strategic and digestible
            intro to the blockchain world.

          </p>

          <div className={style.previewContainer}>
            
          <Link href="/v1/ourvisiontoventure">
            <div className={style.previewBox}>
              <h4 className={style.buttonText}>Our Vision to Venture</h4> 
            </div>
          </Link>

            
          <Link href="/v1/gamemechanics">
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

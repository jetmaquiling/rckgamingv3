/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import NavigationV2 from '@/components/navigation/navigationv2'
import LinksButton from '@/components/caveats/links'

export default function Tokenomiks() {
  

  return (
    <div className={style.main}>
      <Head>
        <title>RCK – RPS NFT Game Mechanics</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <HeadV2 title={"Documentation"} root={"/v1"}/>
      <div className={style.titleContainer}>
        <h1 className={style.titleText} >RPS NFT Game Mechanics</h1>
      </div>
      <div className={style.container}>
        

        <NavigationV2/>

        <div className={style.contentBox}>
          <h2 className={style.headlineText}>
            How to get playing, earning rewards and trading…
          </h2>

          <p className={style.title2Text}>
            01 Get Axesscard
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/Abstract/bitcoin.jpg" className={style.image1}/>
          </div>

          <p className={style.normalText}>
              1. You need to get your hands
              on the Axess Card (That’s
              an NFT by the way!). You
              can only get an Axess Card
              from the Initial Launch or
              the RPS marketplace. In
              both places, you would
              need to buy using our RCK
              Token.

          </p>
          <p className={style.normalText}>
              2. Activate the Axesscard
          </p>
          <p className={style.normalText}>
              3. Each Axess Card will
                generate a random Play
                Count - certain allowable
                number of plays that
                refreshes every [4] hours.
          </p>

          <p className={style.normalText}>
              Note: At the Initial Launch, only LIMITED no. of Axess Cards will be distributed!
          </p>
          <p className={style.normalText}>
              Note: Axess Cards will be distributed at a limited time and quantity.
              Thereafter, players would need to buy Axess Cards in the RPS
              marketplace, at perhaps a higher price.
          </p>

          <div className={style.dash}/>


          <p className={style.title2Text}>
            02 Start Playing – Earn Points
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/Abstract/bitcoin.jpg" className={style.image1}/>
          </div>
          <p className={style.normalText}>
             1. Each play round or battle
              consist of three (3) trays
              where you will choose the
              element for each tray: rock,
              paper or scissors,
          </p>
          <p className={style.normalText}>
             2. The opponent’s elements
              shows whether you win or
              lose each tray

          </p>
          <p className={style.normalText}>
              3. Each tray that is won will
              have a corresponding Point
              should you win (Example: 2
              wins and 1 loss = 2 Points).

          </p>
          <p className={style.normalText}>
              4. Each battle regardless of
              the outcome will have a
              corresponding Point.
          </p>

          <div className={style.dash}/>


          <p className={style.title2Text}>
            03 Earn Points
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/Abstract/bitcoin.jpg" className={style.image1}/>
          </div>
          <p className={style.normalText}>
              When you have
              enough Points, you can
              choose to:
              Convert Points to
              RCK or
              Replicate your Axess
              Card

          </p>
          <p className={style.normalText}>
              Now with RCK you
              have access to RCK
              Ventures or trade in
              the DEX
          </p>

          <div className={style.dash}/>

          <p className={style.title2Text}>
            04 EUse Points
              to Replicate
              or buy
              Special
              Axess Card 
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/Abstract/bitcoin.jpg" className={style.image1}/>
          </div>
          <p className={style.normalText}>
            1. You can choose to replicate
            your Axess Card to produce
            another Axess Card once
            you have the required
            Points.

          </p>
          <p className={style.normalText}>
            2. An Axess Card must be 1st
            activated to use. The
            replicated Axess Card
            characteristics is generated
            at random once activated.
          </p>
          <p className={style.normalText}>
            3. Seasonal Special Axess
            Card Release: Since an
            Axess is an NFT, there will
            be limited edition Axess
            Cards with unique graphic
            designs as collectible NFTs
            to be released for player
            with enough Points. These
            special Axess Cards will be
            released in limited time and
            supply ONLY to those
            qualified players.
          </p>


          <div className={style.dash}/>

          <p className={style.title2Text}>
            05 Trade Axess Cards (NFT)
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/Abstract/bitcoin.jpg" className={style.image1}/>
          </div>
          <p className={style.normalText}>
            1. Axess Cards are NFTs. You can
            trade them in the
            marketplace.
          </p>
          <p className={style.normalText}>
            2. The value of the Axess Card
            may depend whether it is
            activated

          </p>
          <p className={style.normalText}>
            3. Naturally, activated Axess Card
            with more characteristics (play
            count and replication count)
            may demand higher price
            than inactivated Axess Card or
            activated Axess Card with less
            characteristics.
                </p>
          <p className={style.normalText}>
            4. Players can buy and sell Axess Cards using RCK.
          </p>

          <p className={style.normalText}>
            Note: The RPS Game mechanics are based on the current setup but are subject to change. 
          </p>

         

          <div className={style.previewContainer}>
            
            <Link href="/v1/rpsnftgame">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>RPS NFT GAME</h4> 
              </div>
            </Link>
              
            <Link href="/v1/setupcryptowallet">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Setup Crypto Wallet</h4> 
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

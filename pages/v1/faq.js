/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import NavigationV2 from '@/components/navigation/navigationv2';
import LinksButton from '@/components/caveats/links';


export default function FAQ() {
  

  return (
    <div className={style.main}>
      <Head>
        <title>RCK•ROCK Token - FAQ</title>
        <meta name="description" content="Providing unchartered opportunities with the adoption and utilization of blockchain technologies."/>
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Providing unchartered opportunities with the adoption and utilization of blockchain technologies." />
        <meta property="og:description"        content="Developing a compelling ventures for RCK Token users that harness blockchain technology that touches gaming, NFT, marketing and DeFi and other social applications." />
        <meta property="og:image"              content='./Thumbnail/thumbnail.jpg' />
      </Head>
      <HeadV2  title={"Documentation"} root={"/v1"}/>

      <div className={style.titleContainer}>
        <h2 className={style.titleText}  >Frequently Asked Questions </h2>
      </div>
      
      <div className={style.container}>
        <NavigationV2/>

        

        <div className={style.contentBox}>
          
          <p className={style.boldText}>
            Where to send the smart contract of RCK?
          </p>
          <p className={style.normalText}>
            Technically, whatever wallet address you use to transact smart contract, is where you send the RCK Token.
            If you want to transfer RCK Tokens to other wallet application or wallet address, you can just make sure the network is Binance Smart Chain.
          </p>
          <LinksButton/>
        </div>
        
      </div>

      <FootV1/>
    </div>
  )
}

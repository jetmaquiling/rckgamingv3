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
        <title>RCK – Tokenomics</title>
        <meta name="description" content="Allocated and distributed to the community’s
            cofounders – who shares the vision for the
            ventures. Target Initial Funds to be
            raised based on the soft cap
            of 10% of Total Token Supply" />
      </Head>
      <HeadV2 title={"Documentation"} root={"/v1"}/>

      
      <div className={style.titleContainer}>
        <h2 className={style.titleText}  >Tokenomics</h2>
      </div>
      
      <div className={style.container}>
        <NavigationV2/>
        
        <div className={style.contentBox}>
          
    

          <p className={style.normalText}>
            Token - RCK Token <br/>
            Blockchain network - Binance Smartchain (BSC) <br/>
            Conversion from  - BNB <br/>
            Total Token Supply - 1,000,000,000 <br/>
          </p>

         
          <p className={style.boldText} style={{color:"#0E86D4"}}>
            Initial Private Distribution – 100,000,000 RKC (10%)
          </p>
          <p className={style.normalText}>
            Allocated and distributed to the community’s
            cofounders – who shares the vision for the
            ventures. Target Initial Funds to be
            raised based on the soft cap
            of 10% of Total Token Supply
          </p>

          <p className={style.boldText} style={{color:"#D0B49F"}}>
             Founding Team Vesting – 150,000,000 RKC (15%)
          </p>
          <p className={style.normalText}>
            Tokens vested (locked) by founders and
            proponent teams
          </p>

          <p className={style.boldText} style={{color:"#AB6B51"}}>
            Burn Token – 150,000,000 RKC (15%)
          </p>
          <p className={style.normalText}>
            To be deployed against unwarranted
            downward price movement
          </p>

          <p className={style.boldText} style={{color:"#39918C"}}>
             Early Adopters Distribution – 100,000,000 RKC (10%)
          </p>
          <p className={style.normalText}>
            Future token distribution to other adopters split
            according to various programs / tranches (Early
            Adopters, Series A, Series B)
          </p>

          <p className={style.boldText} style={{color:"#FF0833"}} id="listing">
             Listing Tokens – 200,000,000 RKC (20%)
          </p>
          <p className={style.normalText}>
            Tokens to be listed in the DEX (decentralized
            exchange) such as Pancakeswap and others.
            Listing will be scheduled in tranches – initial c.10%
          </p>

          <p className={style.boldText} style={{color:"#CB8AFF"}}>
            Treasury Reserve – 300,000,000 RCK (30%) 
          </p>
            <p className={style.normalText}>
            For future token drawdowns and reserve
          </p>

          


          <div className={style.previewContainer}>
            
            <Link href="/v1/setupcryptowallet">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Setup Crypto Wallet</h4> 
              </div>
            </Link>
              
            <Link href="/v1/initialfundsanduse">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Target Funds and Uses</h4> 
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

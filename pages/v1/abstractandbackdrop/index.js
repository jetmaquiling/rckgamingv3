/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import  NavigationV2  from '@/components/navigation/navigationv2';
import LinksButton from '@/components/caveats/links'
import ScrollButton from '@/components/buttons/scroll';

export default function AbstractAndBackdrop() {
  

  return (
    <div className={style.main}>
      <ScrollButton/>

      <Head>
        <title>RCK - Abstract And Backdrop</title>
        <meta name="description" content="Blockchain has been revolutionizing our world. The enigmatic rollout of Bitcoin in early 2009 captivated the attention of
            technologist and visionaries amidst the Global Financial Crisis."/>
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="RCK•ROCK Token - Abstract And Backdrop" />
        <meta property="og:description"        content="Blockchain has been revolutionizing our world." />
        <meta property="og:image"              content='./Images/abstract/Slide1.JPG' />
      </Head>

      <HeadV2  title={"Documentation"} root={"/v1"}/>
      <div className={style.titleContainer}>
        <h2 className={style.titleText} >Abstract and Backdrop</h2>
      </div>
      <div className={style.container}>
        
        <NavigationV2/>

        <div className={style.contentBox}>
          <p className={style.headlineText}>
            "Enter The World of Blockchain"
          </p>
          <div className={style.videoContainer}>
            <iframe className={style.video} src="https://www.youtube.com/embed/yubzJw0uiE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          <p className={style.normalText}>
            Blockchain has been revolutionizing our world. The enigmatic rollout of Bitcoin in early 2009 captivated the attention of
            technologist and visionaries amidst the Global Financial Crisis. This new and exciting technology has challenged the status quo
            and gave birth to new and “noble” ways of how we think about money (finance), knowledge (information), equality (access) and
            community (accountability & connectivity).
          </p>

          <div className={style.markerBox}>
            <div id="cryptocurrency" className={style.marker}/>
          </div>
          <p className={style.title2Text}>
            The Cryptocurrency Revolution
          </p>

          <div className={style.videoContainer}>
          <iframe className={style.video} src="https://www.youtube.com/embed/6Gu2QMTAkEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <p className={style.normalText}>
            The blockchain’s immediate popular cryptocurrency - Bitcoin, opened up the massive downpour of interest and waves of cryptocurrencies.
            In 2013, the total market value of the entire cryptocurrency was USD 1.64 billion. Even then, the greater majority was not really paying
            attention. After 8 years, that value reached USD 2.455 trillion in May 2021. That’s a 149,000% jump (1,494x) and can be equivalent as the 8th
            largest economy in the world (Source: CoinGecko). There were only 66 cryptos globally in 2013 and has since exponentially exploded to over
            6k cryptos in 2020 showing a 91x jump (Source: Statista 2021). While the top 10% crypto makes up about 88% of the total market value of
            USD2 trillion (Source: Block Social), the sheer number of cryptos is a convincing sign that adoption and demand from the wider population
            has and continue to accelerate.
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/abstract/Slide2.JPG" className={style.image1}/>
          </div>

         

          <div className={style.markerBox}>
            <div id="nft" className={style.marker}/>
          </div>
          <p className={style.title2Text}>
            NFT Adoption
          </p>

          <div className={style.imageBox1}>
            <img src="/Images/abstract/Slide3.JPG" className={style.image1}/>
          </div>

          <p className={style.normalText}>
            The NFT (Non-Fungible Token) was
            brought about by Axie Infinity in
            countries like Philippines, Venezuela,
            Thailand, Brazil even the US. Axie
            Infinity has led the NFT-based online
            game. The attractive model of “play-toearn” (PtoE) quickly gained traction
            among the youth where playing while
            earning provides income and
            entertainment especially during the
            pandemic <br/>
            Source: playercounter.com/axie-infinity/, accessed
            October 4, 2021
          </p>

          <div className={style.videoContainer}>
          <iframe className={style.video} src="https://www.youtube.com/embed/FkUn86bH34M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <p className={style.title2Text}>
            Informal Adoption.
          </p>

          <p className={style.normalText}>
            The NFT (Non-Fungible Token) craze was embraced in the Philippines via a game. Axie Infinity is now the leading NFT-based online video game in countries such as the Philippines, Indonesia and Valenzuela. The attractive model of “play-to-earn” (PtoE) quickly gained traction among the youth where the promise of playing while earning provides both necessary needs especially during the pandemic
          </p>

          <p className={style.title2Text}>
            Where are the crypto adopters?
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/abstract/Slide4.JPG" className={style.image1}/>
          </div>

          <p className={style.normalText}>
            According to Statista Global Consumer Survey (2021), out of 74 countries.
           
          </p>

          <div className={style.imageBox1}>
            <img src="/Images/abstract/Slide5.JPG" className={style.image1}/>
          </div>

          <p className={style.normalText}>
            According to Triple A, these are the number of crypto owners around the world.
          </p>



          <div className={style.previewContainer}>
            
            <Link href="/v1/disclaimer">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>{"< Disclaimer"}</h4> 
              </div>
            </Link>
              
            <Link href="/v1/ourvisiontoventure">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>{"WHAT IS THE ROCK? >"}</h4> 
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

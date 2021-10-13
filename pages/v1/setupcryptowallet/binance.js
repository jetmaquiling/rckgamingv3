/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/document.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import NavigationV2 from '@/components/navigation/navigationv2';
import LinksButton from '@/components/caveats/links';

export default function BinanceWallet() {
  

  return (
    <div className={style.main}>
      <Head>
        <title>RCK - How to setup MetaMask Wallet?</title>
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="How to setup Binance Wallet?" />
        <meta property="og:description"        content="Binance Wallet allows users to store and wallet accounts, make transactions, send and receive cryptocurrencies, NFT's and tokens, and securely connect to blockchain applications. It is compatible with web browser or the mobile app's built-in browser." />
        <meta property="og:image"              content='/Images/Binance/Slide1.JPG' />
      </Head>
      <HeadV2 title={"Documentation"} root={"/v1"}/>
      <div className={style.titleContainer}>
        <h1 className={style.titleText} > How to setup Binance Wallet?</h1>
      </div>
      <div className={style.container}>
        <NavigationV2/>

        

        <div className={style.contentBox}>
          
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide1.JPG" className={style.image1}/>
          </div>
          <h2 className={style.headlineText}>
            What is Binance Wallet?
          </h2>
          <p className={style.normalText}>
            Binance Wallet allows users to store and wallet accounts, make transactions, send and receive cryptocurrencies, NFT's and tokens, and securely connect to blockchain applications. It is compatible with web browser or the mobile app's built-in browser. <a href="https://www.binance.org/en">Click this Link to learn more binance.org</a>
          </p>

          <div className={style.videoContainer}>
          <iframe className={style.video} src="https://www.youtube.com/embed/skjyudsjSHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          
          <p className={style.title1Text}>
            Step 1 - Download Binance Wallet
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide2.JPG" className={style.image1}/>
          </div>
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide3.JPG" className={style.image1}/>
          </div>
          <p className={style.normalText}>
            First, let’s setup Binance Wallet in the Chrome browser. Open up a new Chrome browser window and navigate to <a href="https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp">https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp</a> and then click on ‘ADD TO CHROME’ to install Binance Wallet extension.
          </p>

          <p className={style.title1Text}>
            Step 2 - Setup Wallet
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide4.JPG" className={style.image1}/>
          </div>
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide5.JPG" className={style.image1}/>
          </div>
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide6.JPG" className={style.image1}/>
          </div>
          <p className={style.normalText}>
            After installing, click on the Binance Wallet icon on the top right corner of the chrome browser. It will open up Binance Wallet UI, click Create Wallet, Then click "Generate seed phrase".
          </p>

          <p className={style.title1Text}>
            Step 3 - Fill Up Password
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide7.JPG" className={style.image1}/>
          </div>
          <p className={style.normalText}>
            Then enter a password, confirm the password, and then click continue to proceed. Advisory! Please don't forget your password!
          </p>

          <p className={style.title1Text}>
            Step 4 - Memorize and Confirm Recovery Key
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide8.JPG" className={style.image1}/>
          </div>
          <p className={style.normalText}>
              VERY IMPORTANT! These 12 words are the only way to restore Binance Wallet accounts in case you forget your password. The 12 Secret Words should be stored in a safe location, such as in a notebook or USB key kept in a safe. 
          </p>

          <p className={style.title1Text}>
            Step 5 - Congratulations!
          </p>
          <div className={style.imageBox1}>
            <img src="/Images/binance/Slide9.JPG" className={style.image1}/>
          </div>
          <p className={style.normalText}>
            That’s it you’ve just created a new Blockchain wallet address using Binance Wallet! You’re address can be found by clicking on the account number,and clicking “Copy Address to clipboard”.
          </p>

          <div className={style.previewContainer}>
            
            <Link href="/v1/gamemechanics">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>RPS Game Mechanics</h4> 
              </div>
            </Link>
              
            <Link href="/v1/tokenomiks">
              <div className={style.previewBox}>
                <h4 className={style.buttonText}>Tokenomics</h4> 
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

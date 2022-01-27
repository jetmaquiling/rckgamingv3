/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/beta.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import {MdPersonPin,  MdVideogameAsset} from "react-icons/md";


export default function Beta() {
  const addNet = async () =>{
    try {
      const network = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
        chainId: '0x97',
        chainName: 'Smart Chain - Testnet',
        nativeCurrency: {
            name: 'Test Binance Coin',
            symbol: 'tBNB',
            decimals: 18
        },
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        blockExplorerUrls: ['https://testnet.bscscan.com']
        }]
        }) 

      if (network) {
        confirm("Okay");
      } else {
        console.log('Error!');
        confirm("It's already in Binance Smart Chain Network");
      }
    } catch (error) {
      console.log(error)
      confirm("Something Went Wrong");
    }
      
  }


  return (
    <div className={style.main}>
      <Head>
        <title>RPS BETA TESTING</title>
      </Head>
      <HeadV2/>
      <div className={style.section}>
        
            <h3 >Step 1:</h3>
            <p>You need a metamask wallet or binance wallet.</p>
            <div className={style.choiceBox}>
                <Link href="/v1/setupcryptowallet/binance">
                    <div className={style.buttonBox}>
                        <h4  className={style.h4animate} >Create Binance</h4>
                    </div>
                </Link>

                <Link  href="/v1/setupcryptowallet/metamask">
                    <div className={style.buttonBox}>
                        <h4  className={style.h4animate} >Create MetaMask</h4>
                    </div>
                </Link>
                
            </div >
      </div>

      <div className={style.section}>
        
        <h3 >Step 2:</h3>
        <p>What is your wallet?</p>
        <div className={style.choiceBox}>
            <Link href="/v1/setupcryptowallet/binance">
                <div className={style.buttonBox}>
                    <h4  className={style.h4animate} >Binance</h4>
                </div>
            </Link>

            <Link  href="/v1/setupcryptowallet/metamask">
                <div className={style.buttonBox}>
                    <h4  className={style.h4animate} >MetaMask</h4>
                </div>
            </Link>
            
        </div >
    </div>


      <div className={style.section}>
        <h3 >Metamask Wallet - Step 3:</h3>
        <p>Change your network into Binance Smart Chain Test Network, click the button below to automatically change network.</p>
        <div className={style.choiceBox} onClick={addNet}>
            <div className={style.buttonBox}>
                <h4  className={style.h4animate} >Change Network</h4>
            </div>
        </div >
     </div>


      <div className={style.section}>
        <h3 >Binance Wallet - Step 3</h3>
        <p>Change your network into Binance Smart Chain Test Network, click the button below to automatically change network.</p>
        <div className={style.choiceBox}>
            <div className={style.buttonBox}>
                <h4  className={style.h4animate} >Change Network</h4>
            </div>
        </div >
     </div>

     <div className={style.section}>
        <h3 >Step 3:</h3>
        <p>Congratulations! You can now Login and Buy Axess Card</p>
        <Link href="https://beta.rpsaxess.io/">
            <div className={style.choiceBox}>
                <div className={style.buttonBox}>
                    <h4  className={style.h4animate} >Login Now</h4>
                </div>
            </div>
        </Link>
        
     </div>

     
      <FootV1/>
    </div>
  )
}

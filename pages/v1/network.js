/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '../home.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'

export default function Home() {
  const addNet = () =>{
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
      chainId: '0x38',
      chainName: 'Binance Smart Chain',
      nativeCurrency: {
          name: 'Binance Coin',
          symbol: 'BNB',
          decimals: 18
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com']
      }]
      })
      .catch((error) => {
      console.log(error)
      }) 
  }

  const addRCK = async () =>{
    const tokenAddress = '0xF305B7eD52c5C45068e7E697c28cDECd13e8115b';
    const tokenSymbol = 'RCK';
    const tokenDecimals = 18;
    const tokenImage = 'https://hub.rpsaxess.io/Content/graphix/rck_dark_sm.png';

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('Error!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.main}>
      <Head>
        <title>RCK Rock Ventures</title>
      </Head>
      <div className={style.section}>
        <HeadV2/>
        <div className={style.sectionError} >
            <h3 style={{color: '#fff'}}>Add Binance Smart Chain Mainet </h3>
            <div className={style.buttonBox} style={{ margin: '20px 0px'}}>
                <h4 onClick={addNet} className={style.h4animate} style={{padding: "10px"}} >CONNECT TO BNB SMART CHAIN</h4>
            </div>
            <div className={style.buttonBox} style={{ margin: '20px 0px'}}>
                <h4 onClick={addRCK} className={style.h4animate} style={{padding: "10px"}} >ADD RCK TOKEN TO WALLET</h4>
            </div>
            
        </div>
       
      </div>

      <FootV1/>
    </div>
  )
}

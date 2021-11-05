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
                <h4 onClick={addNet} className={style.h4animate} style={{padding: "10px"}} >ADD NOW</h4>
            </div>
            
        </div>
       
      </div>

      <FootV1/>
    </div>
  )
}

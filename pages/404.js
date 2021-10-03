/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from './home.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'

export default function Home() {
  

  return (
    <div className={style.main}>
      <Head>
        <title>RCK Rock Ventures</title>
      </Head>
      <div className={style.section}>
        <HeadV2/>
        <div className={style.sectionError} >
            <h3 style={{color: '#fff'}}>Sorry, Page Not Found</h3>
            <div className={style.buttonBox} style={{ margin: '20px 0px'}}>
                <Link href="/"><h4 className={style.h4animate} style={{padding: "10px"}} >Go Back To HomePage</h4></Link>
            </div>
            
        </div>
       
      </div>

      <FootV1/>
    </div>
  )
}

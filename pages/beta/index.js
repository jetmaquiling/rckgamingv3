/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/beta.module.css'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'
import HeadV2 from '@/components/header/headv2'
import {MdPersonPin,  MdVideogameAsset} from "react-icons/md";


export default function Beta() {
 

  return (
    <div className={style.main}>
      <Head>
        <title>RPS BETA TESTING</title>
      </Head>
      <HeadV2/>
      <div className={style.section}>
        
            <h3 >Congratulations!</h3>
            <p>You are Invited to the Beta Testing of RPS Gaming. Please give us a feedback and tell us your concern. Disclaimer: The Earned Points is not valid and just a simulation. </p>
            <h3 >Choose your role:</h3>
            
            <div className={style.choiceBox}>

                <Link href="/beta/setup">
                    <div className={style.buttonBox}>
                        <MdPersonPin />
                        <h4  className={style.h4animate} >MANAGER</h4>
                    </div>
                </Link>


                <Link href="https://beta.rpsaxess.io/player">
                    <div  className={style.buttonBox} >
                        <MdVideogameAsset/>
                        <h4 className={style.h4animate} >PLAYER</h4>
                    </div>
                </Link>
                

            </div >
           
        
       
      </div>

      <FootV1/>
    </div>
  )
}

import * as React from "react"
import * as style from "../../styles/navigationv1.module.css"
import {IoClose} from "react-icons/io5";

import Link from 'next/link'
const NavigationV1 = ({pos,open, setOpen}) => {

  return (
    <div className={open  ? style.off : style.main}>

      <div className={style.navbar}>
          <div className={style.navbar1}>
              <div className={style.tinylogoToken}>
                <img src={'/Logo/LOGOwhite.png'} alt="Logo"  className={style.logoToken}/>
              </div>
              
              <h3 className={style.logoTitle1}>RCK</h3>
              <h3 className={style.logoTitle2}>•</h3>
              <h3 className={style.logoTitle3}>ROCK Token</h3>
          </div>

          <div className={style.navbar3} onClick={()=>{setOpen(!open)}}>      
                <IoClose className={style.icon} />
          </div>
          
          
        </div>

        <div className={style.navbar2}>
              <div  className={style.buttonBox}>
                <Link href="/v1"><h4 className={style.h4animate}>Get Started</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/disclaimer"><h4 className={style.h4animate}>Disclaimer</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/abstractandbackdrop"><h4 className={style.h4animate}>Abstract and Backdrop</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/ourvisiontoventure"><h4 className={style.h4animate}>Our Vision</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/rpsnftgame"><h4 className={style.h4animate}>RPS NFT GAME</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/gamemechanics"><h4 className={style.h4animate}>Game Mechanics</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/setupcryptowallet"><h4 className={style.h4animate}>Setting up</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/tokenomiks"><h4 className={style.h4animate}>Tokenomiks</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/initialfundsanduse"><h4 className={style.h4animate}>Funds and Uses</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/roadmap"><h4 className={style.h4animate}>Roadmap</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/faq"><h4 className={style.h4animate}>FAQ</h4></Link>
              </div>
              <div  className={style.buttonBox}>
                <Link href="/v1/disclaimer"><h4 className={style.h4animate}>Privacy Policy</h4></Link>
              </div>
              
        </div>
        <div className={style.rightsBox}>
                    <p className={style.rightsText}>2021 © RCKgaming.io | All rights reserved</p>
        </div>

        
    </div>
    
  )
}

export default NavigationV1

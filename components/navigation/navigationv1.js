import * as React from "react"
import * as style from "../../styles/navigationv1.module.css"
import {MdClose,MdKeyboardArrowDown} from "react-icons/md";

import Link from 'next/link'
import Drawer1 from "../drawer/drawer1";


const DrawerContent1 = [
  {url: '/v1' , label: 'What is the Rock?'},
  {url: '/v1/disclaimer' , label: 'Disclaimer'},
  {url: '/v1/faq' , label: 'FAQ'},
]



const DrawerContent2 = [
  {url: '/v1/abstractandbackdrop' , label: 'Blockchain'},
  {url: '/v1/abstractandbackdrop' , label: 'Cyptocurrency'},
  {url: '/v1/abstractandbackdrop' , label: 'NFT'},
]



const DrawerContent3 = [
  {url: '/v1/rckventures' , label: 'Overview'},
  {url: '/v1/rckventures/rpsnftgame' , label: 'RPS NFT Game'},
  {url: '/v1/rckventures/gamemechanics' , label: 'RPS Game Mechanics'},
]


const DrawerContent4 = [
  {url: '/v1/setupcryptowallet' , label: 'What is Crypto Wallet?'},
  {url: '/v1/setupcryptowallet/metamask' , label: 'Set up Metamask?'},
  {url: '/v1/setupcryptowallet/binance' , label: 'Set up Binance?'},
]


const NavigationV1 = ({pos,open, setOpen}) => {
  
  const [closeAll, setCloseAll] = React.useState(false)

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

          <div className={style.navbar3} onClick={()=>{setOpen(!open); setCloseAll(true)}}>      
                <MdClose className={style.icon} />
          </div>
          
          
        </div>

        <div className={style.navbar2}>

              <div  className={style.buttonBox}>
                <Link href="/"><h4 className={style.h4animate}>Homepage</h4></Link>
              </div>
              <Drawer1 title="Get Started" contents={DrawerContent1} closeAll={closeAll} />

              <Drawer1 title="Abstract & Backdrop" contents={DrawerContent2} closeAll={closeAll} />

              <Drawer1 title="RCK Ventures" contents={DrawerContent3} closeAll={closeAll} />

              <div  className={style.buttonBox}>
                <Link href="/v1/tokenomiks"><h4 className={style.h4animate}>Tokenomiks</h4></Link>
              </div>

              <div  className={style.buttonBox}>
                <Link href="/v1/initialfundsanduse"><h4 className={style.h4animate}>Initial Funds</h4></Link>
              </div>

              <div  className={style.buttonBox}>
                <Link href="/v1/roadmap"><h4 className={style.h4animate}>Roadmap</h4></Link>
              </div>


              <Drawer1 title="Setup CryptoWallet" contents={DrawerContent4} closeAll={closeAll} />

        </div>
        <div className={style.rightsBox}>
                    <p className={style.rightsText}>2021 © RCKgaming.io | All rights reserved</p>
        </div>

        
    </div>
    
  )
}

export default NavigationV1

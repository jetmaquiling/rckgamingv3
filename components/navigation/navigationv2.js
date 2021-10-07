import * as React from "react"
import * as style from "@/styles/navigationv2.module.css"
import Link from 'next/link'
import {MdKeyboardArrowDown} from "react-icons/md";
import Drawer2 from "../drawer/drawer2";


const DrawerContent1 = [
  {url: '/v1/rpsnftgame' , label: 'RPS NFT Game'},
  {url: '/v1' , label: 'Get Started'},
  {url: '/v1/roadmap' , label: 'Road Map'},
]

const DrawerContent2 = [
  {url: '/v1/rpsnftgame' , label: 'What is Crypto Wallet?'},
  {url: '/v1/setupcryptowallet/binance' , label: 'Binance Chain Wallet'},
  {url: '/v1/setupcryptowallet/metamask' , label: 'MetaMask Wallet'},
]



const NavigationV2 = () => {

  const [closeAll, setCloseAll] = React.useState(false)

  return (
      <div className={style.sideBar}>


                <Drawer2 contents={DrawerContent1} title={"What is RCK?"} closeAll={closeAll}/>
                <Drawer2 contents={DrawerContent2} title={"Setup Crypto Wallet"} closeAll={closeAll}/>

                <div className={style.buttonBox}>
                  <Link href="/v1/disclaimer"><h4 className={style.buttonText}>Disclaimer</h4></Link>
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/abstractandbackdrop"><h4 className={style.buttonText}>Abstract and Backdrop</h4></Link>
                
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/ourvisiontoventure"><h4 className={style.buttonText}>Vision To Venture</h4></Link>
                  
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/rpsnftgame"><h4 className={style.buttonText}>RPS NFT Game</h4></Link>
                  
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/gamemechanics"><h4 className={style.buttonText}>Game Mechanics</h4></Link>
                  
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/setupcryptowallet"><h4 className={style.buttonText}>Setup Crypto Wallet</h4></Link>
                  
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/tokenomiks"><h4 className={style.buttonText}>Tokenomiks</h4></Link>   
                </div>
                
                <div className={style.buttonBox}>
                  <Link href="/v1/initialfundsanduse"><h4 className={style.buttonText}>Target Funds and Uses</h4></Link>
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/roadmap"><h4 className={style.buttonText}>Forward Looking</h4></Link>
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/faq"><h4 className={style.buttonText}>FAQ</h4></Link>
                </div>
                <div className={style.buttonBox}>
                  <Link href="/v1/privacypolicy"><h4 className={style.buttonText}>Privacy Policy</h4></Link>
                </div>
          </div>
  )
}

export default NavigationV2

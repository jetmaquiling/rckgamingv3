import * as React from "react"
import * as style from "@/styles/navigationv2.module.css"
import Link from 'next/link'
import {MdKeyboardArrowDown} from "react-icons/md";
import Drawer2 from "../drawer/drawer2";

const DrawerContent1 = [
  {url: '/v1/' , label: 'What is the Rock?'},
  {url: '/v1/disclaimer' , label: 'Disclaimer'},
  {url: '/v1/faq' , label: 'FAQ'},
]



const DrawerContent2 = [
  {url: '/v1/abstractandbackdrop' , label: 'Blockchain'},
  {url: '/v1/abstractandbackdrop#cyptocurrency' , label: 'Cyptocurrency'},
  {url: '/v1/abstractandbackdrop#nft' , label: 'NFT'},
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



const NavigationV2 = () => {


  const [drawer, setDrawer] = React.useState(null)

  return (
      <div className={style.sideBar}>


                <div className={style.buttonBox}>
                  <Link href="/"><h4 className={style.buttonText}>Back to Homepage</h4></Link>
                </div>
                <div className={style.buttonBox}>
                  <Link href="/Files/RCK Whitepaper.pdf"><h4 className={style.buttonText}>Download Whitepaper</h4></Link>
                </div>
                <Drawer2 title="Get Started" contents={DrawerContent1} drawer={drawer} setDrawer={setDrawer}  />

                <Drawer2 title="Abstract & Backdrop" contents={DrawerContent2} drawer={drawer} setDrawer={setDrawer}  />

                <Drawer2 title="RCK Ventures" contents={DrawerContent3} drawer={drawer} setDrawer={setDrawer}  />

                <div className={style.buttonBox}>
                  <Link href="/v1/tokenomiks"><h4 className={style.buttonText}>Tokenomiks</h4></Link>
                </div>

                <div className={style.buttonBox}>
                  <Link href="/v1/initialfundsanduse"><h4 className={style.buttonText}>Initial Funds</h4></Link>
                </div>

                <div className={style.buttonBox}>
                  <Link href="/v1/roadmap"><h4 className={style.buttonText}>Roadmap</h4></Link>
                </div>

                <div className={style.buttonBox}>
                  <Link href="/v1/progress"><h4 className={style.buttonText}>Privacy Policy</h4></Link>
                </div>

                <Drawer2 title="Setup CryptoWallet" contents={DrawerContent4} drawer={drawer} setDrawer={setDrawer}  />
          </div>
  )
}

export default NavigationV2

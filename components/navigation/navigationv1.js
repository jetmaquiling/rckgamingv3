import * as React from "react"
import * as style from "../../styles/navigationv1.module.css"
import {MdClose,MdKeyboardArrowDown} from "react-icons/md";

import Link from 'next/link'
import Drawer1 from "../drawer/drawer1";


const DrawerContent1 = [
  {url: '/v1/rpsnftgame' , label: 'RPS NFT Game'},
  {url: '/v1' , label: 'Get Started'},
  {url: '/v1/roadmap' , label: 'Road Map'},
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

              <Drawer1 contents={DrawerContent1} title={"Get Started"} closeAll={closeAll}/>

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

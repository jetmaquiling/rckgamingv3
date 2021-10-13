import * as React from "react"
import * as style from "../../styles/footv1.module.css"
import Link from 'next/link'

const FootV1 = () => {

  return (
    <div className={style.main}>
            {/* <div className={style.subscriptionBox}>
              <div className={style.tinylogoToken}>
                <img  src='/Logo/RCoin.png' alt="Token" className={style.tinylogoToken}/>
              </div>
              <h5 className={style.subscriptionText}>
                Stay up to date with all RCK Updates & News
              </h5>
              <div className={style.emailInputBox}>
                <input className={style.emailInput} placeholder="Email Address" />
                <button className={style.subscribeButton}>Subscribe</button>
              </div>
              
            </div> */}
            <div className={style.navlinks} style={{justifyContent: 'space-evenly'}}>
                <Link href="/v1"><h4 className={style.linkText}>Documents</h4></Link>
                <Link href="/v1/disclaimer"><h4 className={style.linkText}>Disclaimer</h4></Link>
                <Link href="/v1/roadmap"><h4 className={style.linkText}>Roadmap</h4></Link>
                <Link href="/Files/RCK Whitepaper.pdf"><h4 className={style.linkText}>White Paper</h4></Link>
                <Link href="/v1/progress"><h4 className={style.linkText}>Privacy Policy</h4></Link>
            </div>
           
            <div className={style.rightsBox}>
                    <p className={style.rightsText}>2021 © RCKgaming.io | All rights reserved</p>
            </div>
    </div>
    
  )
}

export default FootV1

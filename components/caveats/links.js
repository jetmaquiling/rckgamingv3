import * as React from "react"
import * as style from "@/styles/document.module.css"
import Link from "next/link"
const LinksButton = () => {


  return (
    <div className={style.containerLink}>
              <Link href="/v1/disclaimer">
                <div className={style.linkBox}>
                  <p className={style.linkText}>
                    {"> Disclaimer"}
                  </p>
                </div>
              </Link>
              <Link href="v1/setupcryptowallet/metamask"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> How to install Metamask Wallet?"}
              </p>
            </div></Link>
            <Link href="v1/setupcryptowallet/binance"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> How to install Binance Wallet?"}
              </p>
            </div></Link>

              <Link href="/v1/progress"><div className={style.linkBox}>
              <p className={style.linkText}>
                {"> Abstract and Backdrop"}
              </p>
            </div></Link>
              <Link href="/v1/progress"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> Our Vision To Venture"}
              </p>
            </div></Link>
              <Link href="/v1/progress"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> RPS NFT Game"}
              </p>
            </div></Link>
              <Link href="/v1/progress"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> Game Mechanics"}
              </p>
            </div></Link>
              <Link href="/v1/progress"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> Setup Crypto Wallet"}
              </p>
            </div>
            </Link>
             <Link href="/v1/progress">
                <div className={style.linkBox}>
                  <p className={style.linkText}>
                  {"> Tokenomiks"}
                  </p>
                </div>
             </Link>
              <Link href="/v1/progress">
                <div className={style.linkBox}>
                  <p className={style.linkText}>
                  {"> Target Funds and Uses"}
                  </p>
                </div>
            </Link>
              <Link href="/v1/progress"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> Forward Looking"}
              </p>
            </div></Link>
            <Link href="/v1/progress"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> FAQ"}
              </p>
            </div></Link>


          </div>
    
  )
}

export default LinksButton

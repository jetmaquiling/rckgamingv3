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

              <Link href="/v1/abstractandbackdrop"><div className={style.linkBox}>
              <p className={style.linkText}>
                {"> Abstract and Backdrop"}
              </p>
            </div></Link>
            <Link href="/v1/abstractandbackdrop#nft"><div className={style.linkBox}>
              <p className={style.linkText}>
                {"> NFT"}
              </p>
            </div></Link>
            <Link href="/v1/abstractandbackdrop#cryptocurrency"><div className={style.linkBox}>
              <p className={style.linkText}>
                {"> Cryptocurrency"}
              </p>
            </div></Link>
            <Link href="/v1/abstractandbackdrop"><div className={style.linkBox}>
              <p className={style.linkText}>
                {"> Blockchain"}
              </p>
            </div></Link>
              <Link href="/v1/rckventures"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> Our Vision To Venture"}
              </p>
            </div></Link>
              <Link href="/v1/rckventures/rpsnftgame"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> RPS NFT Game"}
              </p>
            </div></Link>
              <Link href="/v1/rckventures/gamemechanics"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> Game Mechanics"}
              </p>
            </div></Link>
          
             <Link href="/v1/tokenomiks">
                <div className={style.linkBox}>
                  <p className={style.linkText}>
                  {"> Tokenomiks"}
                  </p>
                </div>
             </Link>
              <Link href="/v1/initialfundsanduse">
                <div className={style.linkBox}>
                  <p className={style.linkText}>
                  {"> Target Funds and Uses"}
                  </p>
                </div>
            </Link>
              <Link href="/v1/roadmap"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> Roadmap"}
              </p>
            </div></Link>
            <Link href="/v1/faq"><div className={style.linkBox}>
              <p className={style.linkText}>
              {"> FAQ"}
              </p>
            </div></Link>


          </div>
    
  )
}

export default LinksButton

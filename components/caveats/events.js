import * as React from "react"
import * as style from "@/styles/events.module.css"
import Link from "next/link"
const Events = () => {


  return (
    <div className={style.main}>
            <h2 className={style.mainTitle}>Latest News and Events</h2>
            <div className={style.container}>
                <div className={style.previewitemCard}>
                    <div className={style.imageBox}>
                        <img src={'/Thumbnail/RCKPreLaunch.jpg'} className={style.image} />
                    </div>
                    <div  className={style.contentBox}>
                        <h3  className={style.titleText}>Pre-Launch RCK TOKEN</h3>
                        <p  className={style.dateText}>October 10 2021 - October 13, 2021</p>
                        <p  className={style.normalText}>Pre-selling is a practice performed by some crypto projects ahead of an initial coin offering, in which tokens are sold to interested parties at a certain price. This could be considered beneficial for both investors and the development team, if all was to go well and the digital currency was to be a success. </p>
                        <div className={style.buttonBox}>
                            <Link href="/v1"><h4 className={style.buttonText}>Learn More</h4></Link>
                        </div>

                    </div>
                    
                </div>
                {/* <div className={style.itemCard}>
                    <div className={style.imageBox}>
                        <img src={'/Thumbnail/thumbnail.jpg'} className={style.image} />
                    </div>
                    <div  className={style.contentBox}>
                        <h3  className={style.titleText}>Introduction Of RCK Token In The Market</h3>
                        <p  className={style.dateText}>Coming Soon</p>
                        
                        <div className={style.buttonBox}>
                            <Link href="/"><h4 className={style.buttonText}>Learn More</h4></Link>
                        </div>

                    </div>
                    
                </div>
                <div className={style.itemCard}>
                    <div className={style.imageBox}>
                        <img src={'/Thumbnail/thumbnail.jpg'} className={style.image} alt="Event" />
                    </div>
                    <div  className={style.contentBox}>
                        <h3  className={style.titleText}>RCK TOKEN integrated In Pancake Swap</h3>
                        <p  className={style.dateText}>Coming Soon</p>
                        
                        <div className={style.buttonBox}>
                            <Link href="/"><h4 className={style.buttonText}>Learn More</h4></Link>
                        </div>

                    </div>
                    
                </div> */}
            </div>
            <Link href="/v1/roadmap"><h4 className={style.seemoreText}>See More</h4></Link>
            
    </div>
    
  )
}

export default Events

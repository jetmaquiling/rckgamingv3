import * as React from "react"
import * as style from "@/styles/events.module.css"
import Link from "next/link"
const Events = () => {


  return (
    <div className={style.main}>
            <h2>Events</h2>
            <div className={style.container}>
                <div className={style.previewitemCard}>
                    <div className={style.imageBox}>
                        <img src={'/Thumbnail/RCKPreLaunch.jpg'} className={style.imageBox} />
                    </div>
                    <div  className={style.contentBox}>
                        <h3  className={style.titleText}>Pre-Launch RCK TOKEN</h3>
                        <p  className={style.dateText}>Coming Soon</p>
                        <p  className={style.normalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className={style.buttonBox}>
                            <Link href="/"><h4 className={style.buttonText}>Learn More</h4></Link>
                        </div>

                    </div>
                    
                </div>
                <div className={style.itemCard}>
                    <div className={style.imageBox}>
                        <img src={'/Thumbnail/thumbnail.jpg'} className={style.imageBox} />
                    </div>
                    <div  className={style.contentBox}>
                        <h3  className={style.titleText}>Introduction Of RCK Token In The Market</h3>
                        <p  className={style.dateText}>Coming Soon</p>
                        <p  className={style.normalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                        <div className={style.buttonBox}>
                            <Link href="/"><h4 className={style.buttonText}>Learn More</h4></Link>
                        </div>

                    </div>
                    
                </div>
                <div className={style.itemCard}>
                    <div className={style.imageBox}>
                        <img src={'/Thumbnail/thumbnail.jpg'} className={style.imageBox} alt="Event" />
                    </div>
                    <div  className={style.contentBox}>
                        <h3  className={style.titleText}>RCK TOKEN integrated In Pancake Swap</h3>
                        <p  className={style.dateText}>Coming Soon</p>
                        <p  className={style.normalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className={style.buttonBox}>
                            <Link href="/"><h4 className={style.buttonText}>Learn More</h4></Link>
                        </div>

                    </div>
                    
                </div>
            </div>
            <Link href="/v1/roadmap"><h4 className={style.seemoreText}>See More ></h4></Link>
            
    </div>
    
  )
}

export default Events

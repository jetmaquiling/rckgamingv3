import * as React from "react"
import * as style from "../../styles/headv3.module.css"
import NavigationV1 from "../navigation/navigationv1"

const HeadV3 = () => {
    const [pos, setPos] = React.useState("top")
    const [open, setOpen] = React.useState("top")
  
  
    React.useEffect (()=>{
      document.addEventListener("scroll", e => {
          let scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 10){
             setPos("moved")
          } else {
             setPos("top")
          }
      })
  },[])
  return (
    <div className={style.main}>
        <NavigationV1 pos={pos} open={open} setOpen={setOpen}/>
       <div className={style.navbar}>
          <div className={style.navbar1}>
              <a href="/" className={style.tinylogoToken}>
              <img src="/Logo/LOGOwhite.png"  alt="logo"  className={style.logoToken}/>
              </a>
              <a href="/">
              <h3 className={style.logoTitle1}>RCK</h3>
              </a>
              <a href="/">
              <h3 className={style.logoTitle2}>•</h3>
              </a>
              <a href="/">
              <h3 className={style.logoTitle3}>Docs</h3>
              </a>
          </div>
          <div className={style.navbar2}>
              <div  className={style.buttonBox}>
                <h4 className={style.h4animate}>Network</h4>
              </div>
              <div  className={style.buttonBox}>
              <h4 className={style.h4animate}>WhitePaper</h4>
              </div>
              <div  className={style.buttonBox}>
                <h4 className={style.h4animate}>Buy/Trade</h4>
              </div>
              <div  className={style.buttonBox}>
                <h4 className={style.h4animate}>Play 2 Earn</h4>
              </div>
              
          </div>
          <div className={style.navbar3} onClick={()=> {setOpen(!open)}}>      
               <p>PRESS</p>
          </div>
          
          
        </div>
    </div>
    
  )
}

export default HeadV3

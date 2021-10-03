import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/headv1.module.css'
import Link from 'next/link'
import {IoChevronDown, IoChevronForwardCircle, IoMenu} from "react-icons/io5";


const HeadV1 = ({pos, open, setOpen, title , root}) => {
  const [option1, setOption1] = React.useState(false);
  const [option2, setOption2] = React.useState(false);
  const [option3, setOption3] = React.useState(false);
  const [option4, setOption4] = React.useState(false);


  const closeAllOptions = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
  }
  return (
    <div  className={pos === "top" ? style.main : style.off} >
        <div className={pos === "top" ? style.navbar : style.navbarFixed}>
          <div className={style.navbar1}>
              
              
              <div className={style.tinylogoToken}>
                <a href="/">
                <img  src="/Logo/LOGOwhite.png"  alt="logo" className={style.logo}/>
                </a>
              </div>
              
              <a href="/">
              <h3 className={style.logoTitle1}>RCK</h3>
              </a>
              <a href="/">
              <h3 className={style.logoTitle2}>•</h3>
              </a>
              <a href={root}>
              <h3 className={style.logoTitle3}>{title}</h3>
              </a>
              
          </div>
          
            <div className={style.navbar2 }>
      
                <div  className={style.buttonBox}  onClick={()=> {setOption1(!option1); setOption3(false); setOption2(false); setOption4(false)}} >
                  <h4 className={style.h4animate}>Roadmap</h4>
                  <IoChevronDown style={{color: '#fff'}}/>
                  <div className={option1 ? style.optionOpen : style.optionClose} >
                    <h5 className={style.h5animate}>• Envisioned Ventures</h5>
                    <h5 className={style.h5animate}>• Venture 1</h5>
                    <h5 className={style.h5animate}>• Venture 2</h5>
                    <h5 className={style.h5animate}>• Venture 3 </h5>
                  </div>
                </div>
                
                <div  className={style.buttonBox}  onClick={()=> {setOption2(!option2); setOption1(false); setOption3(false); setOption4(false)}} >
                  <h4 className={style.h4animate}>WhitePaper</h4>
                  <IoChevronDown style={{color: '#fff'}}/>
                  <div className={option2 ? style.optionOpen : style.optionClose} >
                    <h5 className={style.h5animate}>• Download</h5>
                    <h5 className={style.h5animate}>• Documentation</h5>
                </div>
                </div>
                
                <div  className={style.buttonBox}  onClick={()=> {setOption3(!option3); setOption1(false); setOption2(false); setOption4(false)}} >
                  <h4 className={style.h4animate}>Buy/Trade</h4>
                  <IoChevronDown style={{color: '#fff'}} />
                  <div className={option3 ? style.optionOpen : style.optionClose} >
                    <h5 className={style.h5animate}>• How to Buy?</h5>
                    <h5 className={style.h5animate}>• How to Trade?</h5>
                    <h5 className={style.h5animate}>• Download MetaMask</h5>
                    <h5 className={style.h5animate}>• Download BSC Wallet</h5>
                    
                </div>
                </div>
                
                <div  className={style.buttonBox}  onClick={()=> {setOption4(!option4); setOption1(false); setOption2(false); setOption3(false)}}>
                  <h4 className={style.h4animate}>Play 2 Earn</h4>
                  <IoChevronDown style={{color: '#fff'}}/>
                  <div className={option4 ? style.optionOpen : style.optionClose} >
                    <h5 className={style.h5animate}>• RPSAXESS.IO</h5>
                    <h5 className={style.h5animate}>• The RPS NFT GAME</h5>
                    <h5 className={style.h5animate}>• Mechanics</h5>
                    <h5 className={style.h5animate}>• RPS AXESS Card</h5>
                    
                </div>
                </div>
                
                
            </div>
         
          
          <div className={style.navbar3} onClick={()=>{setOpen(!open)}} >   
              <IoMenu className={style.menuIcon}/>
          </div>
          
          
        </div>

    </div>
    
  )
}

export default HeadV1

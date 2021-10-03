/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Head from 'next/head'
import * as style from '@/styles/headv2.module.css'
import NavigationV1 from '@/components/navigation/navigationv1'
import HeadV1 from '@/components/header/headv1'
import FootV1 from '@/components/footer/footv1';
import Link from 'next/link'

export default function HeadV2({title="ROCK Token", root="/"}) {
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
    <div  className={style.main}>
      <HeadV1 pos={pos} open={open} setOpen={setOpen} title={title} root={root}/> 
      <NavigationV1 pos={pos} open={open} setOpen={setOpen}/>
    </div>
  )
}

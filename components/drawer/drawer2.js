import * as React from "react"
import * as style from "@/styles/drawer2.module.css"
import {MdKeyboardArrowDown} from "react-icons/md"
import Link from 'next/link'

const Drawer2 = ({contents , title, closeAll}) => {
  
    const [open, setOpen] = React.useState(false)
    const [height, setHeight] = React.useState("80px")


    const computeLength = () => {
        switch (contents.length) {
            case 1:
                setHeight("40px");break;
            case 2:
                setHeight("80px");break;
            case 3:
                setHeight("120px");break;
            case 4:
                setHeight("160px");break;
            case 5:
                setHeight("200px");break;
        }
    }
    React.useEffect(() => {
        computeLength()
    }, [])

    React.useEffect(() => {
        if(closeAll){
            setOpen(false)
        }
    }, [closeAll])

  return (
    <div className={style.main}>

        {/* ************************************************ */}

        <div  className={style.drawerButton} onClick={()=>{setOpen(!open)}}>
        <h4 className={style.buttonText}>{title}</h4>
        <MdKeyboardArrowDown className={open? style.svgUp : style.svgDown} />
        </div>

        <div className={open ? style.drawerOpen : style.drawerClose} style={{height: height}}>
            {contents.map((content)=>{
                return(
                    <div  className={style.buttonBox}>
                        <Link href={content.url}><h4 className={style.buttonText}>{content.label}</h4></Link>
                     </div>
                )
               
            })}
        </div>

        {/* ************************************************ */}

    </div>
    
  )
}

export default Drawer2;

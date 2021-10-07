import * as React from "react"
import * as style from "@/styles/scroll.module.css"

import {MdKeyboardArrowUp} from "react-icons/md";

const ScrollButton = () => {

  const [isVisible, setIsVisible] = React.useState(false);

 
  React.useEffect(() => {

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    document.addEventListener("scroll", function(e) {
      toggleVisibility();
    });


  }, )


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className={isVisible ? style.scrollOpen : style.scrollClose} onClick={scrollToTop}>
        <MdKeyboardArrowUp className={style.scrollIcon}/>
    </div>
  )
}

export default ScrollButton

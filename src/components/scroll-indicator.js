import React from "react"
import ArrowDown from "../assets/images/arrow-down.inline.svg"

const ScrollIndicator = () => {
  const onScroll = () => {
    window.scrollTo({
      left: 0,
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

  return (
    <button onClick={onScroll} className='bg-white backdrop-filter backdrop-blur-sm w-24 h-24 bg-opacity-12 rounded-half flex flex-col items-center justify-center border-none'>
      <span className='text-base text-white font-plex-hebrew mb-1 w-11'>
        Scroll down
      </span>
      <ArrowDown/>
    </button>
  )
}

export default ScrollIndicator
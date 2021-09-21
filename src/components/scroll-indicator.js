import React from "react"
import ArrowDown from "../assets/images/arrow-down.inline.svg"

const ScrollIndicator = () => {
  return (
    <div className='bg-white backdrop-filter backdrop-blur-sm w-24 h-24 bg-opacity-12 rounded-half flex flex-col items-center justify-center'>
      <span className='text-base text-white font-plex-hebrew mb-1 w-11'>
        Scroll down
      </span>
      <ArrowDown/>
    </div>
  )
}

export default ScrollIndicator
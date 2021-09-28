import React from "react"
import ArrowDown from "../assets/images/arrow-down.inline.svg"
import Link from "gatsby-link"

const ScrollIndicator = () => {
  return (
    <Link
      to='/#features'
      className={`
        bg-white backdrop-filter backdrop-blur-sm w-24 h-24 bg-opacity-12 rounded-half flex flex-col items-center justify-center border-none
        md-max:w-20 md-max:h-20 no-underline
      `}
    >
      <span className='text-base text-white font-plex-hebrew mb-1 w-11 md-max:text-sm text-center'>
        Scroll down
      </span>
      <ArrowDown className='md-max:w-3'/>
    </Link>
  )
}

export default ScrollIndicator
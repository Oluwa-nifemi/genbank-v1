import React, { useEffect, useRef, useState } from "react"
import ArrowDown from "../assets/images/arrow-down.inline.svg"
import { classNames } from "../util/functions"

const ScrollIndicator = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollListener = useRef();

  useEffect(() => {
    scrollListener.current = () => {
      const scrolledDistance = window.innerHeight + window.scrollY

      setIsAtBottom(Math.abs(scrolledDistance - document.body.offsetHeight) < 100)
    };

    window.addEventListener('scroll', scrollListener.current)

    return () => {
      window.removeEventListener('scroll' , scrollListener.current)
    }
   }, [])

  const onScroll = () => {
    if(isAtBottom){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }else{
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
  return (
    <button
      onClick={onScroll}
      className={`
        bg-white backdrop-filter backdrop-blur-sm w-24 h-24 bg-opacity-12 rounded-half flex flex-col items-center justify-center border-none
        md-max:w-20 md-max:h-20 no-underline fixed bottom-4 right-30 z-50 md-max:right-6
      `}
    >
      <span className='text-base text-white font-plex-hebrew mb-1 w-11 md-max:text-sm text-center'>
        {isAtBottom ? 'Back to top' : 'Scroll down'}
      </span>
      <ArrowDown className={classNames('md-max:w-3', isAtBottom && 'transform  rotate-180')}/>
    </button>
  )
}

export default ScrollIndicator
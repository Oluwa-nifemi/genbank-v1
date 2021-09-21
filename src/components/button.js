import React from "react"
import ArrowRight from '../assets/images/arrow-right.inline.svg'
import { classNames } from "../util/functions"

const Button = ({ children, className, elevated }) => {
  return (
    <button className={classNames('px-4 relative py-3 text-blue-100 text-base font-plex-hebrew bg-blue-400 flex items-center justify-between', className)}>
      {children}
      <ArrowRight/>
      {
        elevated && (
          <span className='absolute w-100% h-100% left-0 top-0 transform translate-x-1 translate-y-1 border border-blue-400'/>
        )
      }
    </button>
  )
}

export default Button
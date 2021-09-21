import React from "react"
import ArrowRight from '../assets/images/arrow-right.inline.svg'
import { classNames } from "../util/functions"

const Button = ({ children, className }) => {
  return (
    <button className={classNames('px-4 py-3 text-blue-100 text-base font-plex-hebrew bg-blue-400 flex items-center justify-between', className)}>
      {children}
      <ArrowRight/>
    </button>
  )
}

export default Button
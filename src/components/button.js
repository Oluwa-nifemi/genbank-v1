import React from "react"
import ArrowRight from "../assets/images/arrow-right.inline.svg"
import { classNames } from "../util/functions"

const Button = ({ children, className, elevated, hasWhiteBackground, onClick }) => {
  const colorsClasses = {
    button: hasWhiteBackground ? "text-blue-400 bg-white" : "text-blue-100 bg-blue-400",
    arrow: hasWhiteBackground ? "text-blue-400" : "text-white",
    elevation: hasWhiteBackground ? "border-white" : "border-blue-400"
  }

  return (
    <div className="relative">
      <button
        className={
          classNames(
            "px-4 cursor-pointer py-3 text-base font-plex-hebrew flex items-center justify-between md-max:text-sm max-w-100%",
            elevated && "focus:transform focus:translate-x-1 focus:translate-y-1 z-10 relative duration-150",
            colorsClasses.button,
            className
          )
        }
        onClick={onClick}
      >
        {children}
        <ArrowRight className={classNames("md-max:w-4 md-max:h-4", colorsClasses.arrow)} />
      </button>
      {
        elevated && (
          <span
            className={classNames("absolute w-100% h-100% left-0 top-0 transform translate-x-1 translate-y-1 border", colorsClasses.elevation)} />
        )
      }
    </div>
  )
}

export default Button
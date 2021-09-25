import React from "react"
import ArrowRight from "../../assets/images/arrow-right.inline.svg"
import { classNames } from "../../util/functions"
import './button.scss'

const Button = ({ children, className, elevated, hasWhiteBackground, onClick, largeButton = true }) => {
  const colorsClasses = {
    button: hasWhiteBackground ? "text-blue-400 bg-white white-button" : "text-blue-100 bg-blue-400",
    arrow: hasWhiteBackground ? "text-blue-400" : "text-white",
    elevation: hasWhiteBackground ? "border-white group-hover:border-blue-400" : "border-blue-400 group-hover:border-white"
  }

  return (
    <div className="relative group">
      <button
        className={
          classNames(
            "px-4 cursor-pointer font-plex-hebrew flex items-center md-max:text-sm max-w-100% action-button",
            elevated && "focus:transform focus:translate-x-1 focus:translate-y-1 z-10 relative duration-150",
            largeButton ? "py-4.75" : "py-3.5 md-max:py-3",
            colorsClasses.button,
            className
          )
        }
        onClick={onClick}
      >
        <span className='text-wrapper'>
          <span className={
            classNames(
              largeButton ? "text-description" : "text-base md-max:text-sm leading-5 h-5",
              'text'
            )
          }>
            {children}
            <ArrowRight className={classNames("md-max:w-4 md-max:h-4 icon", colorsClasses.arrow)} />
          </span>
        </span>
      </button>
      {
        elevated && (
          <span
            className={classNames("absolute w-100% h-100% duration-300 left-0 top-0 transform translate-x-1 translate-y-1 border", colorsClasses.elevation)} />
        )
      }
    </div>
  )
}

export default Button
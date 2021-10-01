import React from "react"
import ArrowRight from "../../assets/images/arrow-right.inline.svg"
import { classNames } from "../../util/functions"
import './button.scss'
import { PulseLoader } from "react-spinners"
import Link from "gatsby-link"

const getElevationClass = ({hasWhiteBackground, isDisabled}) => {
  if(isDisabled) {
    return 'border-blue-800 '
  }

  if(hasWhiteBackground){
    return "border-white"
  }

  return "border-blue-400 group-hover:border-white"
}

const Button = ({ children, className, elevated, hasWhiteBackground, onClick, largeButton = true, loading, disabled, isLink, to, type }) => {
  const colorsClasses = {
    button: hasWhiteBackground ? "text-blue-400 bg-white white-button" : "text-blue-100 bg-blue-400",
    arrow: hasWhiteBackground ? "text-blue-400" : "text-white",
    elevation: getElevationClass({hasWhiteBackground, isDisabled: disabled})
  }

  const renderContent = () => {
    if(loading){
      return (
        <PulseLoader size={10} color='#02BBDC'/>
      )
    }

    return (
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
    )
  }

  const derivedClassName = classNames(
    "px-4 cursor-pointer font-plex-hebrew flex items-center justify-center md-max:text-sm max-w-100% action-button no-underline relative",
    "disabled:bg-blue-800 disabled:cursor-not-allowed",
    elevated && "focus:transform focus:translate-x-1 focus:translate-y-1 z-10 relative duration-150",
    loading && "transform translate-x-1 translate-y-1 z-10 relative duration-150",
    largeButton ? "py-4.75" : "py-3.5 md-max:py-3",
    colorsClasses.button,
    className
  )

  if(isLink){
    return (
      <div className="relative group">
      <Link
        to={to}
        className={derivedClassName}
      >
        {renderContent()}
      </Link>
      {
        elevated && (
          <span
            className={classNames("absolute w-100% h-100% duration-300 left-0 top-0 transform translate-x-1 translate-y-1 border", colorsClasses.elevation)} />
        )
      }
      </div>
    )
  }

  return (
    <div className="relative group">
      <button
        className={
          classNames(
            "px-4 cursor-pointer font-plex-hebrew flex items-center justify-center md-max:text-sm max-w-100% action-button",
            "disabled:bg-blue-800 disabled:cursor-not-allowed",
            elevated && "focus:transform focus:translate-x-1 focus:translate-y-1 z-10 relative duration-150",
            loading && "transform translate-x-1 translate-y-1 z-10 relative duration-150",
            largeButton ? "py-4.75" : "py-3.5 md-max:py-3",
            colorsClasses.button,
            className
          )
        }
        disabled={loading || disabled}
        onClick={onClick}
        type="button"
      >
        {renderContent()}
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
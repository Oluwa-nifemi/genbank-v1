import React from "react"
import logoIcon from "../assets/images/logo.png"
import Button from "./button/button"
import { Link, navigate } from "gatsby"
import CloseIcon from '../assets/images/close.inline.svg'
import {  StaticImage } from "gatsby-plugin-image"
const Header = ({ hasBackButton }) => {
  return (
    <header className='container h-20 flex justify-between items-center bg-blue-1000 bg-opacity-48 fixed z-50 backdrop-filter backdrop-blur-md'>
      <Link to='/'>
      <StaticImage
            placeholder="none"
            loading="eager"
            src="../assets/images/logo-1.png"
            alt="Genbank Logo"
            className="w-28"
          />
      </Link>
      {
        hasBackButton ? (
          <Link to='/' className='p-1 bg-blue-close-button cursor-pointer bg-opacity-15'>
            <CloseIcon/>
          </Link>
        ) : (
          <Button isLink to='/register' className='w-41.25 md-max:w-36' largeButton={false}>
            Pre-qualify
          </Button>
        )
      }
    </header>
  )
}

export default Header
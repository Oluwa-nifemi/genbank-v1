import React from "react"
import LogoIcon from "../assets/images/logo.inline.svg"
import Button from "./button"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className='px-8% h-20 flex justify-between items-center bg-blue-1000 bg-opacity-481'>
      <Link to='./'>
        <LogoIcon/>
      </Link>
      <Button className='w-41.25'>
        Pre-qualify
      </Button>
    </header>
  )
}

export default Header
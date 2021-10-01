import React from "react"
import logoIcon from "../assets/images/logo.png"
import Button from "./button/button"
import { Link, navigate } from "gatsby"
import CloseIcon from '../assets/images/close.inline.svg'

const Header = ({ hasBackButton }) => {
  const onClickBack = () => {
    return navigate('/')
  }

  const onClickQualify = () => {
    return navigate('/register')
  }

  return (
    <header className='container h-20 flex justify-between items-center bg-blue-1000 bg-opacity-48 fixed z-50 backdrop-filter backdrop-blur-md'>
      <Link to='/'>
        <img src={logoIcon} alt="Logo" />
      </Link>
      {
        hasBackButton ? (
          <button onClick={onClickBack} className='p-1 bg-blue-close-button cursor-pointer bg-opacity-15'>
            <CloseIcon/>
          </button>
        ) : (
          <Button onClick={onClickQualify} className='w-41.25 md-max:w-36' largeButton={false}>
            Pre-qualify
          </Button>
        )
      }
    </header>
  )
}

export default Header
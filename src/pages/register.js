import React, { useState } from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import PhoneInput from "../components/phone-input"
import Checkbox from "../components/checkbox"
import Button from "../components/button/button"
import PhoneNoInput from "../components"
import countriesWithISO from "../util/phoneInputData"
import "./register.css"
import Lottie from "react-lottie"
import successAnimation from "../assets/animations/success-form.json"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { postData } from "../api/api"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: successAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const formStates = Object.freeze({
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS'
});

const initialFormValues = {
  firstName: "",
  lastName: "",
  number: {
    country: countriesWithISO[0],
    number: ""
  },
  email: ""
}

const extractPhoneNumber = ({ country, number }) => {
  let phoneNumber = ''
  phoneNumber += country.ISO.slice(1) //To remove the plus sign
  const numberWithoutSpace = number.split(' ').join('')
  phoneNumber += numberWithoutSpace.replace(country.ISO, '') //In case the user types in their ISO with the normal number

  return phoneNumber
}

const Register = () => {
  const [agree, setAgree] = useState(false)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formState, setFormState] = useState(formStates.IDLE);

  const isLoading = formState === formStates.LOADING;
  const isSuccess = formState === formStates.SUCCESS;

  const setPhoneNumber = (newPhoneNumber) => {
    setFormValues(prevState => ({
      ...prevState,
      number: {
        ...prevState.number,
        ...newPhoneNumber
      }
    }))
  }

  const onInputChange = ({ target }) => {
    setFormValues(prevState => ({
      ...prevState,
      [target.id]: target.value
    }))
  }

  const toggleAgree = () => {
    setAgree(prevState => !prevState)
  }

  const onSubmit = async () => {
    setFormState(formStates.LOADING)
    try{
      const formData = {...formValues};
      formData.number = extractPhoneNumber(formValues.number)

      await postData(formData)
      setFormState(formStates.IDLE)

      window.scrollTo({
        top: 0,
        left: 0
      })
    }catch (e) {
      setFormState(formStates.IDLE)
    }
  }

  const renderSuccess = () => {
    return (
      <div className="flex items-center flex-col">
        <Lottie
          options={defaultOptions}
          height={378}
          width={378}
        />
        <h3 className="formHeader font-plex-hebrew text-white mb-4">
          You are pre-qualified!
        </h3>
        <p className="text-xl md:text-base font-plex-hebrew text-white">
          Thank you for signing up.
        </p>
      </div>
    )
  }

  const renderForm = () => {
    return (
      <>
        <h1 className="formHeader text-white font-plex-serif mb-8">
          Pre-qualification form
        </h1>
        <div
          className="grid grid-cols-2 gap-x-8 gap-y-10 mb-10 w-55% lg-max:w-80% md-max:w-100% md-max:px-6 md-max:grid-cols-1 md-max:gap-x-6">
          <PhoneInput
            label="First Name"
            name="first name"
            id="firstName"
            onChange={onInputChange}
            value={formValues.firstName}
          />
          <PhoneInput
            label="Last name"
            name="last-name"
            id="lastName"
            onChange={onInputChange}
            value={formValues.lastName}
          />
          <PhoneNoInput
            label="Phone Number"
            value={formValues.number}
            onChange={setPhoneNumber}
            id="number"
          />
          <PhoneInput
            label="Email address"
            name="email"
            id="email"
            onChange={onInputChange}
            value={formValues.email}
          />
        </div>
        <div className="w-55% lg-max:w-80% md-max:w-100% md-max:px-6">
          <Checkbox
            id="agree"
            onChange={toggleAgree}
            checked={agree}
            name="Agree"
            label={
              <>
                By signing up, I agree to Genbank Financial, LLC’s <Link to='/register#disclaimer' className='font-bold'>Terms and Conditions.</Link>
              </>
            }
          />
        </div>
        <div className="mt-20 md-max:mt-12">
          <Button
            loading={isLoading}
            elevated
            className="w-68.75"
            onClick={onSubmit}
          >
            Pre-qualify
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
      <Seo title='Pre-qualify'/>
      <Header hasBackButton />
      <main className="relative overflow-hidden pb-56 md-max:pb-40 pt-20">
        <div className="absolute w-full top-20 left-0 pointer-events-none md-max:hidden">
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../assets/images/home-bg.png"
            alt="Background pattern"
          />
        </div>
        <section className="pt-28 flex flex-col items-center md-max:pt-12">
          {isSuccess ? renderSuccess() : renderForm()}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Register
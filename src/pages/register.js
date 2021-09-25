import React, { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import Input from "../components/input"
import Checkbox from "../components/checkbox"
import Button from "../components/button"
import PhoneNoInput from "../components/PhoneInput"
import countriesWithISO from "../util/phoneInputData"
import "./register.css"
import Lottie from "react-lottie"
import successAnimation from "../assets/animations/success-form.json"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: successAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const Register = () => {
  const [agree, setAgree] = useState(false)
  const [formValues, setFormValues] = useState({
    "First Name": "",
    "Last Name": "",
    "Phone Number": {
      country: countriesWithISO[2],
      number: ""
    },
    "Email": ""
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const setPhoneNumber = (newPhoneNumber) => {
    setFormValues(prevState => ({
      ...prevState,
      "Phone Number": {
        ...prevState["Phone Number"],
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

  const onSubmit = () => {
    console.log(formValues)
    setShowSuccess(true)
    window.scrollTo({
      top: 0,
      left: 0
    })
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
          <Input
            label="First Name"
            name="first-name"
            id="First Name"
            onChange={onInputChange}
            value={formValues["First Name"]}
          />
          <Input
            label="Last name"
            name="last-name"
            id="Last Name"
            onChange={onInputChange}
            value={formValues["Last Name"]}
          />
          <PhoneNoInput
            label="Phone number"
            value={formValues["Phone Number"]}
            onChange={setPhoneNumber}
            id="phoneNumber"
          />
          <Input
            label="Email address"
            name="email"
            id="Email"
            onChange={onInputChange}
            value={formValues["Email"]}
          />
        </div>
        <div className="w-55% lg-max:w-80% md-max:w-100% md-max:px-6">
          <Checkbox
            id="agree"
            onChange={toggleAgree}
            checked={agree}
            name="Agree"
            label="By signing up, I agree to Genbank Financial, LLC’s Terms and Condition."
          />
        </div>
        <div className="mt-20 md-max:mt-12">
          <Button elevated className="w-68.75" onClick={onSubmit}>
            Pre-qualify
          </Button>
        </div>
      </>
    )
  }

  return (
    <>
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
          {showSuccess ? renderSuccess() : renderForm()}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Register
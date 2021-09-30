import React, { useState } from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import Input from "../components/input"
import Checkbox from "../components/checkbox"
import Button from "../components/button/button"
import PhoneInput from "../components/phone-input"
import countriesWithISO from "../util/phoneInputData"
import "./register.css"
import Lottie from "react-lottie"
import successAnimation from "../assets/animations/success-form.json"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { postData } from "../api/api"
import emailjs from "emailjs-com"
import { Formik } from "formik"
import * as Yup from "yup"
import { isValidPhoneNumber } from "libphonenumber-js"
import { toast } from "react-toastify"
import { classNames } from "../util/functions"

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

const formValidationSchema = Yup.object(
  {
    firstName: Yup.string().required("Kindly input your first name"),
    lastName: Yup.string().required("Kindly input your last name"),
    email: Yup.string().email("Kindly input a valid email address").required("Kindly input your email"),
    number: Yup.object({
      number: Yup.string()
        .required("Kindly input a phone number")
        .test(
          "check valid number",
          "Kindly input a valid phone number",
          function (value) {
            if(!this.parent.country) return true

            if(!value) return false
            const countryCode = this.parent.country.countryCode;

            return isValidPhoneNumber(value, countryCode)
        })
    })
  }
)

const extractPhoneNumber = ({ country, number }) => {
  let phoneNumber = ''
  phoneNumber += country.ISO.slice(1) //To remove the plus sign
  const numberWithoutSpace = number.split(' ').join('')
  phoneNumber += numberWithoutSpace.replace(country.ISO, '') //In case the user types in their ISO with the normal number

  return phoneNumber
}

const Register = () => {
  const [agree, setAgree] = useState(false)
  const [formState, setFormState] = useState(formStates.SUCCESS);

  const isLoading = formState === formStates.LOADING;
  const isSuccess = formState === formStates.SUCCESS;

  const toggleAgree = () => {
    setAgree(prevState => !prevState)
  }

  const onSubmit = async (formValues) => {
    if(!agree) return //In case they toy with dev tools

    setFormState(formStates.LOADING)
    try{
      const formData = {...formValues};
      formData.number = extractPhoneNumber(formValues.number)

      await postData(formData)

      emailjs.init(process.env.GATSBY_EMAILJS_USERID)

      await emailjs.send(
        process.env.GATSBY_EMAILJS_SERVICEID,
        process.env.GATSBY_EMAILJS_TEMPLATEID,
        {
          to_email: formData.email,
          name: formData.firstName,
          full_name: `${formData.firstName} ${formData.lastName}`,
        }
      )

      setFormState(formStates.SUCCESS)

      window.scrollTo({
        top: 0,
        left: 0
      })
    }catch (e) {
      setFormState(formStates.IDLE)
      toast.error(
        "Something went wrong while submitting the form. Kindly check your internet connection and try again"
      )
    }
  }

  const renderSuccess = () => {
    return (
      <div className="flex items-center flex-col">
        <div className='w-94.5 md-max:max-w-67.5 md-max:w-100%'>
          <Lottie
            options={defaultOptions}
            height={'100%'}
            width={'100%'}
          />
        </div>
        <h3 className="formHeader font-plex-hebrew text-white mb-4 relative md-max:-top-6">
          Congratulations!
        </h3>
        <p className="text-xl md:text-base font-plex-hebrew text-white text-center relative md-max:-top-6">
          You are prequalified and have been signed up for early access.
        </p>
      </div>
    )
  }

  const renderForm = () => {
    return (
      <Formik
        initialValues={initialFormValues}
        onSubmit={onSubmit}
        validationSchema={formValidationSchema}
      >
        {
          formik => (
            <>
              <h1 className="formHeader text-white font-plex-serif mb-4">
                Sign up to be prequalified
              </h1>
              <p className='mb-12 text-xl font-plex-hebrew text-white md-max:text-base'>
                Get early access
              </p>
              <div
                className="grid grid-cols-2 gap-x-8 gap-y-10 mb-10 w-55% lg-max:w-80% md-max:w-100% md-max:px-6 md-max:grid-cols-1 md-max:gap-x-6">
                <Input
                  label="First Name"
                  name="first name"
                  id="firstName"
                />
                <Input
                  label="Last name"
                  name="last-name"
                  id="lastName"
                />
                <PhoneInput
                  label="Phone Number"
                  id="number"
                />
                <Input
                  label="Email address"
                  name="email"
                  id="email"
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
                      By signing up, I agree to Genbank Financial, LLC’s <Link to='/register#disclaimer' className='hover:text-blue-300 duration-300 font-bold'>Terms and Conditions.</Link>
                    </>
                  }
                />
              </div>
              <div className="mt-20 md-max:mt-12">
                <Button
                  loading={isLoading}
                  elevated
                  className="w-68.75"
                  onClick={formik.handleSubmit}
                  disabled={!agree}
                >
                  Submit
                </Button>
              </div>
            </>
          )
        }
      </Formik>
    )
  }

  return (
    <>
      <Seo title='Register'/>
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
        <section className={classNames("flex flex-col items-center", formState !== formStates.SUCCESS && 'pt-28 md-max:pt-12')}>
          {isSuccess ? renderSuccess() : renderForm()}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Register
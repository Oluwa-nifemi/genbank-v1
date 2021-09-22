import React, { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import Input from "../components/input"
import Checkbox from "../components/checkbox"
import Button from "../components/button"
import PhoneNoInput from "../components/PhoneInput"
import countriesWithISO from "../util/phoneInputData"

const Register = () => {
  const [agree, setAgree] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState({
    country: countriesWithISO[0] //TODO: Default to +1
  })

  const toggleAgree = () => {
    setAgree(prevState => !prevState)
  }

  return (
    <>
      <Header hasBackButton />
      <main className="relative overflow-hidden pb-56">
        <div className="absolute w-full top-0 left-0 pointer-events-none md-max:hidden">
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../assets/images/home-bg.png"
            alt="Background pattern"
          />
        </div>
        <section className="pt-28 flex flex-col items-center">
          <h1 className="text-form-header text-white font-plex-serif mb-8">
            Pre-qualification form
          </h1>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-10 w-55%">
            <Input
              label="First Name"
              name="first-name"
            />
            <Input
              label="Last name"
              name="last-name"
            />
            <PhoneNoInput
              label="Phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              id='phoneNumber'
            />
            <Input
              label="Email address"
              name="email"
            />
          </div>
          <div className="w-55%">
            <Checkbox
              id="agree"
              onChange={toggleAgree}
              checked={agree}
              name="Agree"
              label="By signing up, I agree to Genbank Financial, LLC’s Terms and Condition."
            />
          </div>
          <div className="mt-20">
            <Button elevated className="w-68.75">
              Pre-qualify
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Register
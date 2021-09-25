import * as React from "react"
import Header from "../components/header"
import Typewriter from "../components/typewriter/typewriter"
import Button from "../components/button/button"
import ScrollIndicator from "../components/scroll-indicator"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer/footer"
import { navigate } from "gatsby"

const features = [
  {
    index: 1,
    title: "For Africans — Personal & Business",
    text: "Own bank accounts in US dollars, provided by a US bank, FDIC member."
  },
  {
    index: 2,
    title: (
      <span>
        Checking <br /> Accounts
      </span>
    ),
    text: "Easy receipts and withdrawals for daily transactions."
  },
  null,
  null,
  {
    index: 3,
    title: (
      <span>
        Savings <br /> Account
      </span>
    ),
    text: "Interest-bearing accounts with no monthly fees."
  },
  {
    index: 4,
    title: (
      <span>
        Prepaid Debit <br /> card
      </span>
    ),
    text: "Use online, in-store, POS, and ATM. Anywhere."
  },
  {
    index: 5,
    title: (
      <span>
        Cash <br /> Access
      </span>
    ),
    text: "Deposit or withdraw your cash from ATMs anywhere in the world."
  },
  {
    index: 6,
    title: (
      <span>
        ACH and Domestic <br /> Wires
      </span>
    ),
    text: "Same day ACH transactions and wires to US-based accounts."
  },
  null,
  null,
  {
    index: 7,
    title: (
      <span>
        Global <br /> transfers
      </span>
    ),
    text: "Send next-day transfers to non-US accounts to pay friends, family, or vendors. "
  },
  {
    index: 8,
    title: (
      <span>
        Bill <br /> pay
      </span>
    ),
    text: "Pay millions of merchants through a Genbank account."
  },
  {
    index: 9,
    title: (
      <span>
        Security and <br />safety
      </span>
    ),
    text: "Security is topmost priority. Deposits are FDIC-insured up to $750,000."
  }
]

const IndexPage = () => {
  const onClickQualify = () => {
    return navigate('/register')
  }

  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-20">
        <div className="absolute w-full top-20 left-0 pointer-events-none md-max:hidden">
          <StaticImage
            placeholder="none"
            loading="eager"
            src="../assets/images/home-bg.png"
            alt="Background pattern"
          />
        </div>
        <section className="pt-28 container flex flex-col items-center first-section md-max:pt-12 relative">
          <h1
            className="font-plex-serif text-hero font-medium mb-8 w-70% text-white text-center md-max:text-hero-mobile md-max:w-100% md-max:mb-10">
            Open a US Bank account <br/> from <Typewriter />
          </h1>
          <h3 className={`
          px-28 py-5 bg-blue-700 rounded-10 text-description text-white mb-20 bg-opacity-40 font-plex-hebrew backdrop-filter backdrop-blur-sm text-center
          md-max:text-base md-max:px-9 md-max:py-4 md-max:mb-10
        `}>
            Enjoy unlimited banking from anywhere.
          </h3>
          <Button className="w-68.75" elevated onClick={onClickQualify}>
            Pre-qualify
          </Button>
          <div className="absolute right-30 bottom-4 md-max:hidden">
            <ScrollIndicator />
          </div>
        </section>
        <section className="pt-12 container mb-30">
          <div className="relative font-plex-serif lg-max:mb-10">
            <h2 className="text-blue-900 mix-blend-screen opacity-25 features">
              Features
            </h2>
            <h4 className="text-blue-300 text-8xl absolute top-24 left-36% whatYouGet">
              What you get
            </h4>
            <div className="md:hidden absolute right-0 bottom-0">
              <ScrollIndicator />
            </div>
          </div>
          <div
            className="grid grid-rows-6 grid-cols-3 gap-x-24 gap-y-28 lg-max:grid-cols-2 lg-max:gap-y-18 lg-max:gap-x-16 lg-max:grid-rows-5 sm-max:flex sm-max:flex-col sm-max:gap-y-10">
            {
              features.map(feature => (
                feature ? (
                  <div className="text-white font-plex-hebrew">
                    <h4 className="text-2xl mb-6">
                      0{feature.index}/
                    </h4>
                    <h5 className="text-feature-title mb-12">
                      {feature.title}
                    </h5>
                    <p className="text-xl">
                      {feature.text}
                    </p>
                  </div>
                ) : <div className="lg-max:hidden" />
              ))
            }
            <StaticImage
              src={"../assets/images/feature-image.png"}
              alt="Features" //TODO: Maybe modify this when the designer changes the image
              className="row-span-2 col-span-2 lg-max:hidden"
              placeholder="none"
            />
          </div>
        </section>
        <section className="py-30 container md-max:py-20">
          <div
            className="px-30 py-22.5 flex justify-between items-center bg-blue-500 rounded-2xl relative overflow-hidden md-max:flex-col md-max:py-10 md-max:px-6 md-max:items-start">
            <h1 className="stayAhead text-white font-plex-hebrew z-10 md-max:mb-20">
              Stay <br /> ahead!
            </h1>
            <Button
              hasWhiteBackground
              className="w-68.75 z-10"
              elevated
              onClick={onClickQualify}
            >
              Pre-qualify
            </Button>
            <div className="absolute bottom-0 left-0 transform md-max:hidden">
              <StaticImage
                src={"../assets/images/stay-ahead.png"}
                alt="Stay ahead background"
                placeholder="none"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 transform md:hidden"
            >
              <StaticImage
                src={"../assets/images/stay-ahead-mobile.png"}
                alt="Stay ahead background mobile"
                placeholder="none"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

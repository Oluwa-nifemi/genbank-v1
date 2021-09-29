import * as React from "react"
import Header from "../components/header"
import Typewriter from "../components/typewriter/typewriter"
import Button from "../components/button/button"
import ScrollIndicator from "../components/scroll-indicator"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer/footer"
import { navigate } from "gatsby"
import Seo from "../components/seo"
import Link from "gatsby-link"

const features = [
  {
    index: 1,
    title: "For Africans — Personal & Business",
    text: [
      <span>
        Open a <span className='text-blue-300'>Checking Account</span> for day to day transactions or high-yield interest bearing <span className='text-blue-300'>Savings Account</span>.
      </span>,
      "Send and receive payments from friends, family, clients, and others.",
      "Spend, save, and invest safely and easily."
    ]
  },
  {
    index: 2,
    title: (
      <span>
        Checking <br /> Accounts
      </span>
    ),
    text: [
      <span>
        Powerful <span className="text-blue-300">US Business Checking</span> accounts for African businesses.
      </span>,
      "Transaction banking for payments and commercial trades settlements.",
      "Treasury and liquidity management for short term benefits."
    ]
  },
  null,
  null,
  {
    index: 3,
    title: (
      <span>
        Compliance and <br/> Fraud Risk <br/>Management
      </span>
    ),
    text: "Genbank upholds the highest standards of compliance and risk management. Our KYC/CIP and fraud risk management procedures are in line with global best practices."
  },
  {
    index: 4,
    title: (
      <span>
        Security
      </span>
    ),
    text: "Security of our customers and their money is topmost priority to Genbank. We invest in technology and other resources that help us protect our customers. Genbank accounts are covered up to $750,000 by FDIC."
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
        Wires and <br/> Transfers
      </span>
    ),
    text: [
      "Same day ACH transactions and wires to US-based accounts.",
      "Send next-day transfers to non-US accounts to pay friends, family, or vendors."
    ]
  },
  null,
  null,
  {
    index: 7,
    title: (
      <span>
        Cards
      </span>
    ),
    text: "Prepaid Debit Card. Virtual + physical for online, in-store, POS, and ATMs."
  },
  {
    index: 8,
    title: (
      <span>
        Bills
      </span>
    ),
    text: "Bill payment to millions of merchants and vendors worldwide through Genbank."
  }
]

const getFeaturesRow = (row) => features.slice(row*3, 3 + row*3)

const renderFeatureDescription = (text) => {
  return (
    <p className="text-xl md-max:text-base">
      {[].concat(text).map(text => text)}
    </p>
  )
}

const IndexPage = () => {
  const onClickQualify = () => {
    return navigate('/register')
  }

  return (
    <>
      <Seo title='Home'/>
      <Header />
      <ScrollIndicator />
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
            className="font-plex-serif text-hero font-medium mb-6 w-246 text-white text-center md-max:text-hero-mobile md-max:w-100% md-max:mb-10">
            OPEN AMERICAN BANK ACCOUNTS FROM <Typewriter />
          </h1>
          <h3 className='font-plex-hebrew text-description mb-12 text-white w-146 text-center md-max:w-100% md-max:text-base'>
            Genbank offers best-in-class American Personal and Business Banking to Africans.
          </h3>
          <div className='mb-5'>
            <Button className="w-68.75" elevated onClick={onClickQualify}>
              Pre-qualify
            </Button>
          </div>
          <div className=''>
            <Link to='/#disclaimer' className='no-underline font-plex-hebrew text-xs text-white flex'>
              *See disclaimer below
            </Link>
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
          </div>
          {/*Feature rows*/}
          <div className='grid gap-y-28 lg-max:gap-y-18 sm-max:gap-y-10' id='features'>
            {
              Array.from({length: 4}).map((_, index) => {
                return (
                  <div className="grid grid-cols-3 gap-x-24 lg-max:grid-cols-2 lg-max:gap-x-16 sm-max:flex sm-max:flex-col sm-max:gap-y-10">
                    {
                      getFeaturesRow(index).map(feature => (
                        feature ? (
                          <div className="text-white font-plex-hebrew">
                            <h4 className="text-2xl mb-6 md-max:text-description md-max:mb-4">
                              0{feature.index}/
                            </h4>
                            <h5 className="text-feature-title mb-12 md-max:text-feature-title-m md-max:mb-6">
                              {feature.title}
                            </h5>
                            <div className='grid gap-y-4'>
                              {[].concat(feature.text).map(renderFeatureDescription)}
                            </div>
                          </div>
                        ) : <div className="lg-max:hidden" />))
                    }
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className="py-30 container md-max:py-20">
          <div
            className="px-30 py-22.5 flex justify-between items-center bg-blue-500 rounded-2xl relative overflow-hidden lg-max:flex-col lg-max:py-10 lg-max:px-6 lg-max:items-start">
            <div className='z-10 md-max:mb-20'>
              <h3 className="stayAhead text-white font-plex-hebrew lg-max:mb-10 mb-4">
                Embrace the power of <br/> borderless banking.
              </h3>
              <p className='text-description font-plex-hebrew text-white lg-max:text-base lg-max:mb-2.5'>
                Sign up for early access.
              </p>
            </div>
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

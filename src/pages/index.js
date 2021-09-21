import * as React from "react"
import Header from "../components/header"
import Typewriter from "../components/typewriter"
import backgroundPattern from '../assets/images/home-bg.png'
import Button from "../components/button"
import ScrollIndicator from "../components/scroll-indicator"

const IndexPage = () => (
  <>
    <Header/>
    <main className='relative'>
      <img src={backgroundPattern} className="absolute w-full top-0 left-0 pointer-events-none" alt="Background pattern" />
      <section className='pt-28 container flex flex-col items-center h-fill-with-header md-max:pt-12'>
        <h1 className='font-plex-serif text-hero font-medium mb-8 w-62% text-white text-center md-max:text-hero-mobile md-max:w-100% md-max:mb-10'>
          Open a US Bank account from <Typewriter/>
        </h1>
        <h3 className={`
          px-28 py-5 bg-blue-700 rounded-10 text-description text-white mb-20 bg-opacity-40 font-plex-hebrew backdrop-filter backdrop-blur-sm text-center
          md-max:text-base md-max:px-9 md-max:py-4 md-max:mb-10
        `}>
          Enjoy unlimited banking from anywhere.
        </h3>
        <Button className='w-68.75' elevated>
          Pre-qualify
        </Button>
        <div className='absolute right-30 bottom-4 md-max:hidden'>
          <ScrollIndicator/>
        </div>
      </section>
    </main>
  </>
)

export default IndexPage

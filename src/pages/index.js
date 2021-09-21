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
      <section className='pt-28 container flex flex-col items-center h-fill-with-header'>
        <h1 className='font-plex-serif text-hero-text font-medium mb-8 w-62% text-white text-center'>
          Open a US Bank account from <Typewriter/>
        </h1>
        <h3 className='px-28 py-5 bg-blue-700 rounded-10 text-description text-white mb-10 bg-opacity-40 font-plex-hebrew mb-10 backdrop-filter backdrop-blur-sm'>
          Enjoy unlimited banking from anywhere.
        </h3>
        <Button className='w-68.75' elevated>
          Pre-qualify
        </Button>
        <div className='absolute right-30 bottom-4'>
          <ScrollIndicator/>
        </div>
      </section>
    </main>
  </>
)

export default IndexPage

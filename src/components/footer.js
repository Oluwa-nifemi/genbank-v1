import React from "react"
import LogoIcon from "../assets/images/logo.inline.svg"
import PlayStoreIcon from "../assets/images/play-store.inline.svg"
import AppleStoreIcon from "../assets/images/apple.inline.svg"
import ArrowRightAngled from '../assets/images/arrow-angled-right.inline.svg'
import './footer.css'

const DownloadCard = ({ icon: Icon, topText, destination }) => {
  return (
    <div className='py-3 px-4 bg-blue-600 rounded-8 flex items-center w-40 cursor-not-allowed'>
      <Icon className='filter grayscale opacity-70'/>
      <div className='text-gray font-plex-hebrew ml-3'>
        <p className='text-download-from'>
          {topText}
        </p>
        <p className='text-base'>
          {destination}
        </p>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='container py-10 bg-footer-background'>
      <div className='flex items-start mb-20 flex-wrap lg-max:flex-col lg-max:gap-y-10'>
        <div>
          <LogoIcon className='mb-4'/>
          <p className='text-white font-plex-hebrew text-base mb-10'>
            Bank in US
          </p>
          <div className='flex items-center gap-x-8 lg-max:hidden'>
            <DownloadCard
              icon={PlayStoreIcon}
              topText='GET IT ON'
              destination='Google Play'
            />
            <DownloadCard
              icon={AppleStoreIcon}
              topText='DOWNLOAD ON'
              destination='App Store'
            />
          </div>
        </div>
        <div className='ml-16% mr-auto lg-max:mr-0 lg-max:ml-0'>
          <h5 className='text-xl font-light text-white font-plex-hebrew mb-6'>
            Resources
          </h5>
          <a href="https://www.google.com" target='_blank' rel='noreferrer' className='text-xl text-white font-plex-hebrew mb-4 block'>
            News
          </a>
          <a href="https://www.google.com" target='_blank' rel='noreferrer' className='text-xl text-white font-plex-hebrew block'>
            Career
          </a>
        </div>
        <div className='mr-10% lg-max:mr-0'>
          <h5 className='text-xl font-light text-white font-plex-hebrew mb-6'>
            Connect with us:
          </h5>
          <a href="https://www.google.com" target='_blank' rel='noreferrer' className='text-xl text-white font-plex-hebrew mb-4 block'>
            Linkedin
            <ArrowRightAngled className='inline-flex ml-6'/>
          </a>
          <a href="https://www.google.com" target='_blank' rel='noreferrer' className='text-xl text-white font-plex-hebrew block'>
            Twitter
            <ArrowRightAngled className='inline-flex ml-6'/>
          </a>
        </div>
        <div className='flex items-center gap-x-4 lg:hidden'>
          <DownloadCard
            icon={PlayStoreIcon}
            topText='GET IT ON'
            destination='Google Play'
          />
          <DownloadCard
            icon={AppleStoreIcon}
            topText='DOWNLOAD ON'
            destination='App Store'
          />
        </div>
      </div>
      <div className='text-base text-disclaimer font-plex-hebrew pb-10 border-disclaimer-border border-b mb-10' id='disclaimer'>
        <p className='flex items-center mb-4'>
          <span className='w-14 h-0.5 bg-disclaimer inline-flex mr-4'/>
          <span>
            Disclaimer
          </span>
        </p>
        <p className='mb-4'>
          Genbank Financial, LLC is a financial technology company. All banking, deposit, and card services are provided by Genbank US’s partner banks, FDIC Member. All credit services are provided by Genbank partner, US State Lender. All crypto services are provided by Genbank partner, US Money Business.
        </p>
        <p className='mb-4'>
          By completing the prequalification form, you agree to be considered to open and manage a Genbank account in the future. You also agree that your information can be used by Genbank Financial, LLC for establishing a banking relationship with you. You can opt out of our marketing communications list. We will not share your information with any 3rd parties and you can opt out anytime through any of our communications.
        </p>
        <p className='mb-4'>
          Non-US persons refer to Person who is not (i) a citizen or resident of the United States who is a natural person, (ii) a corporation or partnership (or an entity treated as a corporation or partnership) created or organized in or under the laws of the United States or any state thereof, including the District of Columbia (unless, in the case of a partnership, Treasury Regulations are adopted that provide otherwise), (iii) an estate, the income of which is subject to United States Federal income taxation, regardless of its source, (iv) a trust, if a court within the United States is able to exercise primary supervision over the administration of the trust and one or more United States persons (as defined in the Code and Treasury Regulations) have the authority to control all substantial decisions of the trust; or (v) a trust that was in existence prior to August 20, 1996 and that, under Treasury Regulations, is eligible to elect, and does validly elect, to be treated as a United States person (as defined in the Code and Treasury Regulations) despite not meeting the requirements of clause (iv).
        </p>
      </div>
      <p className='text-xs font-plex-hebrew text-white text-center'>
        Copyright © Genbank Financial, LLC, 2021. All rights reserved
      </p>
    </footer>
  )
}

export default Footer
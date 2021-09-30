import React from "react"
import LogoIcon from "../../assets/images/logo.inline.svg"
import PlayStoreIcon from "../../assets/images/play-store.inline.svg"
import AppleStoreIcon from "../../assets/images/apple.inline.svg"
import ArrowRightAngled from '../../assets/images/arrow-angled-right.inline.svg'
import './footer.css'

const DownloadCard = ({ icon: Icon, topText, destination }) => {
  return (
    <div className='py-3 px-4 bg-gray-disabled rounded-8 flex items-center w-40 cursor-not-allowed backdrop-filter backdrop-blur-xl'>
      <Icon/>
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
          <h5 className='text-xl font-light text-white font-plex-hebrew mb-6 md-max:text-base'>
            Resources
          </h5>
          <a href="https://genbank.medium.com/" target='_blank' rel='noreferrer' className='text-xl text-white font-plex-hebrew mb-4 block md-max:text-base duration-300 hover:text-blue-300'>
            Read
          </a>
          <a href="https://www.google.com" target='_blank' rel='noreferrer' className='text-xl text-white font-plex-hebrew block md-max:text-base duration-300 hover:text-blue-300'>
            Career
          </a>
        </div>
        <div className='mr-10% lg-max:mr-0'>
          <h5 className='text-xl font-light text-white font-plex-hebrew mb-6 md-max:text-base'>
            Connect with us:
          </h5>
          <a href="https://www.linkedin.com/company/genbankus/" target='_blank' rel='noreferrer' className='text-xl text-white flex items-center font-plex-hebrew mb-4 block md-max:text-base duration-300 hover:text-blue-300'>
            Linkedin
            <ArrowRightAngled className='inline-flex ml-6'/>
          </a>
          <a href="https://twitter.com/GenbankUS" target='_blank' rel='noreferrer' className='text-xl text-white flex items-center font-plex-hebrew mb-4 block md-max:text-base duration-300 hover:text-blue-300'>
            Twitter
            <ArrowRightAngled className='inline-flex ml-6'/>
          </a>
          <a href="https://www.instagram.com/genbankus/" target='_blank' rel='noreferrer' className='text-xl text-white flex items-center font-plex-hebrew block md-max:text-base duration-300 hover:text-blue-300'>
            Instagram
            <ArrowRightAngled className='inline-flex ml-6'/>
          </a>
        </div>
        <div className='flex items-center flex-wrap gap-4 lg:hidden'>
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
          Genbank is a financial technology company, not a bank. All banking services will be provided by partner bank, FDIC members. Genbank is currently not available for use. Genbank Financial, LLC is duly incorporated in the United States of America and is in compliance with all regulatory requirements. Genbank will be available for use from January 2022.
        </p>
        <p className='mb-4'>
          By completing the prequalification form, you agree to be considered to open and manage a Genbank account in the future. You also agree that your information can be used by Genbank Financial, LLC for establishing a banking relationship with you. You can opt out of our marketing communications list. We will not share your information with any 3rd parties and you can opt out anytime through any of our communications.
        </p>
      </div>
      <p className='text-xs font-plex-hebrew text-white text-center'>
        Copyright © Genbank Financial, LLC, {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
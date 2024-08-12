import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">

        <div className='flex flex-col items-center'>
        <h1 className="heading lg:max-w-[45vw]">
  Let&apos;s <span className="text-purple">connect!</span>
</h1>

           <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me and let&apos;s collaborate to create something big!</p>
           <a href="mailto:nidhi.singh1858@gmail.com">
           <MagicButton
           title="Let's get in touch"
           icon={<FaLocationArrow/>}
           position="right"
           />
           </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
  <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Nidhi Singh</p>
  <div className='flex items-center md:gap-3 gap-6'>
    {socialMedia.map((profile) => (
      <a
        key={profile.id}
        href={profile.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
      >
        <Image src={profile.img} alt={profile.id.toString()} width="20" height="20" />
      </a>
    ))}
  </div>
</div>
    </footer>
  )
}

export default Footer
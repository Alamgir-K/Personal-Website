import React from 'react'
import ExperienceData from './ExperienceData'
import ExperienceItem from '../ExperienceItem/ExperienceItem'


export default function Experience() {
  return (
    <div className='h-fit' id='landing-link-1'>
      <div className='h-fit experience-description-block rounded-[60px] mx-2
            md:h-[500px]
            lg:h-[610px] lg:rounded-[70px]'>
        <div className='pl-12 pt-12 sm:pl-16 sm:pt-16'>
          <p className={`text-xl font-semibold`}>WHERE I'VE WORKED</p>
        </div>

        <div className='px-12 py-12 sm:px-16 sm:py-16'>
          <p className={`tracking-wide text-4xl 
              sm:text-5xl 
              md:text-7xl 
              lg:text-8xl lg:leading-none
              xl:leading-tight`}>I have experience across the FinTech, Cybersecurity and Big Tech space.</p>
        </div>
      </div>

      <div className='grid grid-rows-3 mx-2 gap-2 mt-2'>
          <div className='h-52 md:h-72 lg:h-96 xl:h-72 w-full'>
              <ExperienceItem item={ExperienceData[0]}></ExperienceItem>
          </div>
          <div className='h-52 md:h-72 lg:h-96 xl:h-72 w-full'>
              <ExperienceItem item={ExperienceData[1]}></ExperienceItem>
          </div>
          <div className='h-52 md:h-72 lg:h-96 xl:h-72 w-full'>
              <ExperienceItem item={ExperienceData[2]}></ExperienceItem>
          </div>
      </div>
    </div>
  )
}

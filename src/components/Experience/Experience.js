import React from 'react'
import ExperienceData from './ExperienceData'
import ExperienceItem from '../ExperienceItem/ExperienceItem'


export default function Experience() {
  return (
    <div>
    {/* // <div className='grid grid-rows-2 gap-2 justify-center'> */}
        <div className='h-96 xl:h-72 w-full'>
            <ExperienceItem item={ExperienceData[0]}></ExperienceItem>
        </div>
        <div className='h-96 xl:h-72 w-full m-2'>
            <ExperienceItem item={ExperienceData[1]}></ExperienceItem>
        </div>
    {/* </div> */}
    </div>
  )
}

import React from 'react'

export default function ExperienceItem(props) {
  return (
    <div className='flex w-full justify-center relative gap-2'>
        
        <div className='flex absolute inset-x-1/4 items-center justify-center h-72 w-1/2 z-10 rounded-[70px] experience-title-block scroll-reveal reveal-right'>
            <p className={`text-center text-xl text-black`}>{props.item.role}</p>
            <p className={`text-center text-4xl font-semibold text-black m-4`}>{props.item.company}</p>
        </div>
        <div className='flex absolute inset-x-1/4 items-center justify-center h-72 w-1/2 z-1 rounded-[70px] experience-description-block scroll-reveal reveal-left'>
            <p className={`block text-center text-xl`}>{props.item.role}</p>
            <p className={`text-center text-4xl font-semibold m-4`}>{props.item.company}</p>
        </div>

        <div className='flex absolute right-auto h-72 w-24 lg:w-32 z-2 experience-description-block'>
        </div>
        
    </div>
  )
}

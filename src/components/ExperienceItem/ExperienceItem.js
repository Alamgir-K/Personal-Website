import React from 'react'

export default function ExperienceItem(props) {

  const points = props.item.description.map((point, index) => <p className='mr-20' key={index}>
    {point}
  </p>)

  return (
    <div className='flex w-full justify-center content-center relative gap-2'>
        
        <div className='flex flex-wrap absolute inset-x-1/8 lg:inset-x-1/4 items-center justify-center content-center h-52 md:h-72 lg:h-96 xl:h-72 w-3/4 lg:w-1/2 z-20 rounded-[70px] experience-title-block scroll-reveal reveal-right'>
              <div className='flex flex-row basis-full justify-center'>
              <p className={`text-center tx-base lg:text-lg font-normal text-black`}>{props.item.role}</p>
              </div>
              <div className='flex flex-row basis-full justify-center'>
              <p className={`text-center text-3xl lg:text-5xl font-semibold text-black m-4`}>{props.item.company}</p>
              </div>
        </div>

        <div className='flex absolute inset-x-32 lg:inset-x-1/4 justify-center h-52 md:h-72 lg:h-96 xl:h-72 w-1/4 lg:w-1/2 z-10 rounded-[70px] experience-description-block scroll-reveal reveal-left'>
            <div className='grid grid-cols-4 w-full'>
              <div className='flex justify-center items-center content-center col-span-4 lg:col-span-1 row-span-4'>
                <img src={`images/${props.item.logo}`} className='max-w-[100px] max-h-[100px]'></img>
              </div>
              <div className='hidden lg:flex flex-wrap place-self-start mt-8 basis-full col-span-3'>
                <p className='font-semibold'>{props.item.startDate} - {props.item.endDate}</p>
              </div>
              <div className='hidden lg:flex flex-wrap items-center col-span-3'>
                {points}
              </div>
            </div>
        </div>

        <div className='flex absolute inset-x-1/8 h-52 md:h-72 lg:h-96 xl:h-72 w-3/4 lg:w-1/2 rounded-[70px] z-1 experience-description-block'>
        </div>
        
    </div>
  )
}

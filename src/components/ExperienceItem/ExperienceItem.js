import React from 'react'

export default function ExperienceItem(props) {

  const points = props.item.description.map((point, index) => <p className='mr-20' key={index}>
    {point}
  </p>)

  return (
    <div className='flex w-full justify-center relative gap-2'>
        
        <div className='md:hidden lg:flex flex flex-wrap lg:absolute lg:inset-x-1/4 items-center justify-center content-center h-52 lg:h-96 xl:h-72 w-full lg:w-1/2 z-20 rounded-[70px] experience-title-block scroll-reveal reveal-right'>
              <div className='flex flex-row basis-full justify-center'>
              <p className={`text-center tx-base lg:text-lg font-normal text-black`}>{props.item.role}</p>
              </div>
              {/* <div className='md:hidden flex flex-row basis-full justify-center'>
                <img src={`images/${props.item.logo}`} className='max-w-[100px] max-h-[100px]'></img>
              </div> */}
              <div className='flex flex-row basis-full justify-center'>
              <p className={`text-center text-3xl lg:text-5xl font-semibold text-black m-4`}>{props.item.company}</p>
              </div>
            
        </div>
        <div className='hidden md:flex lg:absolute lg:inset-x-1/4 justify-center md:h-72 lg:h-96 xl:h-72 w-full lg:w-1/2 z-10 rounded-[70px] experience-description-block scroll-reveal reveal-left'>
            <div className='grid grid-cols-4 w-full'>
              <div className='flex justify-center items-center content-center col-span-1 row-span-4'>
                <img src={`images/${props.item.logo}`} className='max-w-[100px] max-h-[100px]'></img>
              </div>
              <div className='flex flex-wrap place-self-start mt-8 basis-full col-span-3'>
                <p className='font-semibold'>{props.item.startDate} - {props.item.endDate}</p>
              </div>
              <div className='flex flex-wrap items-center col-span-3'>
                {points}
              </div>
            </div>
        </div>

        <div className='hidden lg:flex absolute right-auto h-96 xl:h-72 w-1/2 z-1 experience-description-block'>
        </div>
        
    </div>
  )
}

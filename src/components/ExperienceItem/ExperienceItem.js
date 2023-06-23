import React from 'react'

export default function ExperienceItem(props) {

  const points = props.item.description.map((point, index) => <p className='mr-20 py-1' key={index}>
    {point}
  </p>)

  return (
    <div className='flex w-full justify-center content-center relative gap-2'>

      <div className='flex flex-wrap items-center justify-center content-center h-52 w-3/4 z-20 rounded-[60px] absolute inset-x-1/8 experience-title-block scroll-reveal reveal-right
              md:h-72 
              lg:h-96 lg:inset-x-1/4 lg:w-1/2 lg:rounded-[70px]'>

        <div className='flex flex-row basis-full justify-center'>
          <p className={`text-center tx-base font-normal text-black px-8
                    lg:text-lg`}>
            {props.item.role}
          </p>
        </div>

        <div className='flex flex-row basis-full justify-center'>
          <p className={`text-center text-3xl font-semibold text-black m-4
                    lg:text-5xl`}>
            {props.item.company}
          </p>
        </div>
      </div>

      <div className='flex absolute inset-x-32 justify-center h-52 w-1/4 z-10 rounded-l-[60px] experience-description-block scroll-reveal reveal-left
              md:h-72
              lg:inset-x-1/4 lg:h-96 lg:w-1/2 lg:rounded-[70px]'>

        <div className='grid grid-cols-4 w-full lg:mb-8'>
          <div className='flex justify-center items-center content-center col-span-4  row-span-4
                    lg:col-span-1'>
            <img className='max-w-[80px] max-h-[80px]
                      sm:max-w-[100px] sm:max-h-[100px]'
              src={`images/${props.item.logo}`}></img>
          </div>

          <div className='hidden flex-wrap place-self-start mt-8 mb-8 basis-full col-span-3
                    lg:flex'>
            <p className='font-semibold'>{props.item.startDate} - {props.item.endDate}</p>
          </div>

          <div className='hidden flex-wrap items-center col-span-3 overflow-y-auto
                    lg:flex'>
            {points}
          </div>

        </div>
      </div>

      <div className='flex absolute inset-x-1/8 h-52 w-3/4 rounded-[60px] z-1 experience-description-block
              sm:rounded-[60px]
              md:h-72
              lg:h-96 lg:w-1/2 lg:rounded-[70px]'>
      </div>

    </div>
  )
}

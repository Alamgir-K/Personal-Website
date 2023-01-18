import React from 'react'

export default function Contact() {
  return (
    <div className='h-fit rounded-[70px] m-2 overflow-hidden bg-[#1D1C16] text-[#D4C951]' id='landing-link-4'>
        <div className='pl-12 pt-12 sm:pl-16 sm:pt-16'>
          <p className={`text-xl lg:text-xl font-semibold`}>GET IN TOUCH</p>
        </div>

        <div className='pl-12 px-12 sm:px-16 sm:pt-16'>
          <p className={`lg:leading-none xl:leading-tight text-4xl sm:text-6xl lg:text-8xl`}>Feel free to reach out if you would like to discuss any opportunities or simply just connect.</p>
        </div>

        <div className='grid grid-rows-2 grid-cols-2 w-1/2 gap-y-16 mx-12 mt-16 mb-12 sm:mx-16 sm:mt-16 sm:mb-16'>
            <div className='col-span-2 row-span-1'>
                <a className='text-xl font-semibold rounded-full border-[#D4C951] border-2 p-4' href="mailto:k.alamgir2002@gmail.com">k.alamgir2002@gmail.com</a>
            </div>
            <div className='col-span-2'>
                <a className='text-xl font-semibold rounded-full border-[#D4C951] border-2 p-4 mr-2' href="https://www.linkedin.com/in/kalamgir/" target="_blank">LinkedIn</a>
                <a className='text-xl font-semibold rounded-full border-[#D4C951] border-2 p-4 ml-2' href="">Resume</a>
            </div>
        </div>
        
    </div>
  )
}

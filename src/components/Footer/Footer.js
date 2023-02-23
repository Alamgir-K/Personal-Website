import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between items-start m-6
            lg:m-12'>
        <div className=''>
            <img className='w-[40px] h-[40px]' src='akFavicon.png'></img>
        </div>
        <div className=''>
            <p className='text-center text-xl text-white'>Coded by Alamgir Khan</p>
        </div>
        <div className=''>
            <p className='text-center text-xl text-white'> ♥</p>
        </div>
    </div>
  )
}

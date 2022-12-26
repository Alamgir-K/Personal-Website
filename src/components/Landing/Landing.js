import React from 'react'
import LandingItem from '../LandingItem/LandingItem'
import LandingData from './LandingData'
import { TypeAnimation } from 'react-type-animation'

export default function () {
  return (
    <div className='lg:h-screen'>
        <div className='container flex justify-center mx-auto items-center h-60 w-80 lg:w-full lg:h-2/6'>
            <TypeAnimation
            sequence={['Hi there!', 1000, 'My name is Alamgir Khan.', 1000, 'I am a full-stack developer.', 1000, 'Welcome to my personal portfolio.', 1000]}
            speed={25} 
            wrapper="p"
            repeat={0}
            className='text-2xl lg:text-5xl text-center font-semibold text-white'
            />
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:h-4/6 p-2'>
            <div className='col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 h-96 lg:h-full'>
                <LandingItem item={LandingData[0]}></LandingItem>
            </div>
            <div className='col-span-1 h-60 lg:h-full'>
                <LandingItem item={LandingData[1]}></LandingItem>
            </div>
            <div className='col-span-1 h-60 lg:h-full'>
                <LandingItem item={LandingData[2]}></LandingItem>
            </div>
            <div className='col-span-2 lg:col-start-3 h-60 lg:h-full'>
                <LandingItem item={LandingData[3]}></LandingItem>
            </div>
        </div>
    </div>
    
  )
}

import React from 'react'
import LandingBlockItem from '../LandingBlockItem/LandingBlockItem'
import LandingData from './LandingData'
import { TypeAnimation } from 'react-type-animation'


export default function () {
  return (
    <div className='h-screen'>
        <div className='container mx-auto py-32 h-2/6'>
            <TypeAnimation
            sequence={['Hi there!', 1000, 'My name is Alamgir Khan.', 1000, 'I am a full-stack developer.', 1000, 'Welcome to my personal portfolio.', 1000]}
            speed={25} 
            wrapper="h2"
            repeat={0}
            className='text-5xl text-center font-semibold text-white antialiased'
            />
        </div>

        <div className='grid grid-cols-4 gap-2 h-4/6 p-2'>
            <div className='col-span-2 row-span-2 landing-item'>
                <LandingBlockItem item={LandingData[0]} height={'full'}></LandingBlockItem>
            </div>
            <div className='col-span-1 landing-item'>
                <LandingBlockItem item={LandingData[1]} height={'full'}></LandingBlockItem>
            </div>
            <div className='col-span-1 landing-item'>
                <LandingBlockItem item={LandingData[2]} height={'full'}></LandingBlockItem>
            </div>
            <div className='col-span-2 col-start-3 landing-item'>
                <LandingBlockItem item={LandingData[3]} height={'full'}></LandingBlockItem>
            </div>
        </div>
    </div>
    
  )
}

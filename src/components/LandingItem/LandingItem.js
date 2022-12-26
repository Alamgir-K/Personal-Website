import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

export default function (props) {
    const fontColor = props.item.color === '#fff' || props.item.color === '#FFF480' ? 'black' : 'white'

    const [marqueeMove, setmarqueeMove] = useState(false)

    const isPill = props.item.id === 2 || props.item.id === 3

    function handleMarqueeHover() {
        setmarqueeMove(!marqueeMove)
    }

  return (
    <div className={`rounded-[70px] flex relative justify-center p-5 landing-item`} id={`landing-bg-${props.item.id}`} style={{backgroundColor: props.item.color}} onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeHover}>
        
        <div className='hidden lg:flex w-full'>
                <Marquee gradient={false} speed={150} className='' play={marqueeMove}>
                <div className='flex items-center justify-center landing-title w-full pb-10'>
                    <p className={`mr-4 text-5xl lg:text-8xl text-center font-semibold text-${fontColor}`}>{props.item.text}.</p>
                </div> 
                </Marquee>
        </div>

        <div className={`flex items-center m-8 ${isPill ? 'flex-col justify-center' : 'absolute inset-x-0 bottom-0 justify-between'} lg:justify-between lg:flex-row lg:absolute inset-x-0 bottom-0`}>
                <p className={`text-center text-xl font-semibold text-${fontColor}`}>{props.item.title}</p>
                <img className='w-8 ' src={`./images/${props.item.logo}`}></img>
        </div>
    </div>
  )
}

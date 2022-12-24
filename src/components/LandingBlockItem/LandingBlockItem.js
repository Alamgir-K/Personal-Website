import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

export default function (props) {
    const fontColor = props.item.color === '#fff' || props.item.color === '#FFF480' ? 'black' : 'white'

    const [marqueeMove, setmarqueeMove] = useState(false)
    console.log(marqueeMove)

    function handleMarqueeHover() {
        setmarqueeMove(!marqueeMove)
    }

  return (
    <div className={`bg-white rounded-[70px] flex justify-center p-5 h-${props.height}`} style={{backgroundColor: props.item.color}} onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeHover}>

        <div className='relative flex w-full' id={`landing-bg-${props.item.id}`}>
            <Marquee gradient={false} speed={150} className='' play={marqueeMove}>
            <div className='flex items-center justify-center landing-title w-full pb-10'>
                <p className={`mr-4 text-8xl text-center font-semibold text-${fontColor}`}>{props.item.text}.</p>
            </div> 
            </Marquee>

            <div className='flex justify-between absolute inset-x-0 bottom-0 p-8'>
                <p className={`text-xl font-semibold text-${fontColor}`}>{props.item.title}</p>
                <img className='w-8' src={`./images/${props.item.logo}`}></img>
            </div>
        </div>
    </div>
  )
}

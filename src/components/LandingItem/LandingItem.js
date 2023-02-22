import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

export default function (props) {
    const fontColor = props.item.color === '#fff' || props.item.color === '#FFF480' ? 'black' : 'white'

    const [marqueeMove, setmarqueeMove] = useState(false)

    const isPill = props.item.id === 2 || props.item.id === 3 || props.item.id === 4

    function handleMarqueeHover() {
        setmarqueeMove(!marqueeMove)
    }

    function handleOnClick() {
      var element = document.getElementById(`landing-link-${props.item.id}`)
      element.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <div className={`rounded-[60px] flex relative justify-center p-5 landing-item
            lg:rounded-[70px]`} 
    id={`landing-bg-${props.item.id}`} 
    style={{backgroundColor: props.item.color}} 
    onClick={handleOnClick} onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeHover}>
        
        <div className='hidden w-full
                sm:flex'>
                <Marquee gradient={false} speed={150} className='' play={marqueeMove}>
                <div className='flex items-center justify-center landing-title w-full pb-10'>
                    <p className={`mr-4 text-center font-semibold text-${fontColor}

                          ${isPill ? 'text-5xl lg:text-8xl' : 'text-8xl'}
                          `}>
                      {props.item.text}.
                    </p>
                </div> 
                </Marquee>
        </div>

        <div className={`flex items-center justify-between mx-8 my-8 absolute inset-x-0 bottom-0
                ${isPill ? 'flex-col my-16 sm:my-8 sm:flex-row' : ''}`}>
                <p className={`text-center text-xl font-semibold text-${fontColor}`}>{props.item.title}</p>
                <img className={`${isPill ? 'mt-4' : ''} w-8`} src={`./images/${props.item.logo}`}></img>
        </div>
    </div>
  )
}


// ${isPill ? 'flex-col justify-center' : 'absolute inset-x-0 bottom-0 justify-between'}
import React from 'react'

export default function ProjectItem(props) {
  return (
    <div className='flex flex-wrap h-96 w-full justify-between rounded-[70px]' style={{backgroundColor: props.item.bgColor, color: props.item.textColor ? props.item.textColor : 'black'}}>
        
        <div className='flex w-full justify-between px-10 pt-10'>
            <p className="text-xl font-semibold">0{props.item.id}.</p>
            <a href={props.item.github} target="_blank">
                <img src='images/github-mark-white.png' className='w-[30px] h-[30px]'></img>
            </a>
            
        </div>

        <div className='flex w-full justify-center items-start mb-10 pt-10'>
            <img src={`images/${props.item.logo}`} className='max-w-[200px] max-h-[100px]'></img>
        </div>

        <div className='flex w-full justify-between px-10'>
            <p className="text-xl font-semibold">{props.item.title}</p>
            {props.item.link && <a href={props.item.link} target="_blank">
                <img src='images/arrow-top-right.png' className='w-[30px] h-[30px]' style={{filter: props.item.id === 1 || props.item.id === 3 ? "" :"invert(100%)"}}></img>
                </a>}
        </div>

    </div>
  )
}

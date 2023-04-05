import React from 'react'

export default function ProjectItem(props) {
    return (
        <div className='flex flex-wrap h-96 w-full justify-between rounded-[60px]
            lg:rounded-[70px] project-item'
            style={{ backgroundColor: props.item.bgColor, color: props.item.textColor ? props.item.textColor : 'black' }}>

            <div className='flex w-full justify-between px-10 pt-10'>
                <p className="text-xl font-semibold">0{props.item.id}.</p>
                <a href={props.item.github} target="_blank">
                    <img src='images/github-mark-white.png' className='w-[30px] h-[30px]'></img>
                </a>
            </div>

            <div className='flex w-full justify-center items-start mb-10 pt-10'>
                <a className={`${props.item.link ? 'point-events-auto' : 'pointer-events-none'}`}
                    href={props.item.link} target="_blank">
                    <img className='max-w-[150px] max-h-[100px]
                    md:max-w-[200px] md:max-h-[100px]'
                        src={`images/${props.item.logo}`}></img>
                </a>
            </div>

            <div className='flex w-full justify-center px-10
                sm:justify-between'>

                <a className={`${props.item.link ? 'point-events-auto' : 'pointer-events-none'}`}
                    href={props.item.link} target="_blank">
                    <p className="text-xl font-semibold text-center
                    sm:text-left">{props.item.title}</p>
                </a>

                {props.item.link &&
                    <a href={props.item.link} target="_blank">
                        <img className='w-[30px] h-[30px] hidden
                            sm:block'
                            src='images/arrow-top-right.png'
                            style={{ filter: props.item.id === 1 || props.item.id === 3 ? "" : "invert(100%)" }}></img>
                    </a>}
            </div>

        </div>
    )
}

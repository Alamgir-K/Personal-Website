import React from 'react'
import Marquee from 'react-fast-marquee'

export default function About() {

    const images = ['album1.jpg', 'album2.jpg', 'album7.jpg', 'album9.jpg', 'album5.jpg', 'album6.jpg']
    const slideShow = images.map((image, index) => {
        const imageSrc = 'images/' + image
        return <div className='col-span-1 row-span-1'>
            <img src={imageSrc} className='object-contain border-solid rounded-full border-2 border-[#FFAED8]' key={index}/>
        </div>})

  return (
    <div className='h-fit about rounded-[70px] m-2 overflow-hidden'>
        <div className='py-16 lg:py-20'>
                <Marquee gradient={false} speed={150} className=''>
                    <div className='flex items-center justify-center w-full'>
                        <p className={`mr-4 text-5xl lg:text-9xl text-center`}>Hi There! My name's Alamgir Khan.</p>
                    </div> 
                </Marquee>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 pt-10 gap-4 lg:gap-0 pb-20'>
            <div className='px-10'>
                <p className='text-xl lg:text-3xl'>
                    I'm a 3<sup>rd</sup> year student at The University of Toronto, pursuing a Double Major in Computer Science and Computational Cognition. I have a keen interest in full-stack development, espescially in the technology, finance, and/or gaming space.
                </p>
            </div>
            <div className='px-10'>
                <p className='text-xl lg:text-3xl'>
                Outside of work, I love playing video games. I'm currently mildly addicted to LoL... I'm also a huge fan of football. Lastly, I love listening to hard-rock/metal music -  my favourite bands are Slipknot and Gojira.
                </p>
            </div>
        </div>

        <div className='w-full grid grid-cols-3 grid-rows-2 px-10 gap-4 pb-4'>
            {slideShow}
        </div>

        
    </div>
  )
}


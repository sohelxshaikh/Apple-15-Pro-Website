import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo,smallHeroVideo } from '../utils'

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth<760 ? smallHeroVideo: heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    }else {
      setVideoSrc(heroVideo)
    } 
  }

  useEffect(()=> {
    window.addEventListener('resize' , handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize' ,handleVideoSrcSet)
    }
  } ,[])

  useGSAP(()=> {
    gsap.to('.hero-title',{
      opacity:1,
      delay:1.5,


    })
  },[])
  
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-title'>
          iPhone 15 pro
        </p>
        <div className='md:w-10/12 w-9/12 pointer-events-none'>
          <video autoPlay  muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

    </section>
  )
}

export default Hero
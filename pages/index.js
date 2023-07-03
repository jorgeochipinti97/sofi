import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power1, Back, Circ } from 'gsap';
import Lottie from "lottie-react";
import arrowAnimation from '../animations/arrow.json'
import animation1 from '../animations/1.json'
import animation2 from '../animations/2.json'
import animation4 from '../animations/4.json'
import animation3 from '../animations/3.json'
import animation5 from '../animations/5.json'
import animation6 from '../animations/6.json'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    gsap.to('.title', {
      scale: 1,
      delay: 1,
      opacity: 1,
      ease: Power1.easeOut
    })
    gsap.to('.title', {
      opacity: 0, delay: 2, ease: Power1.easeOut
    })
    gsap.to('.foto', {
      display: 'block', delay: 2.5, ease: Back.easeInOut.config(1.7)
    })
    gsap.to('.title', {
      opacity: 0, delay: 2, ease: Power1.easeOut
    })
    gsap.to('.containerimage', {
      display: 'none', delay: 2.5, ease: Back.easeInOut.config(1.7)
    })

    gsap.to('.containerImagetwo', {
      transform: 'scale(1)', delay: 3, ease: Back.easeInOut.config(1.7)
    })
    gsap.to('.containerImagetwo', {
      delay: 4.4, transform: 'scale(0)', ease: Back.easeInOut.config(1.7)
    })
    gsap.to('.containerImagetwo', {
      delay: 4.5, display: 'none'
    })
    gsap.to('.framethree', {
      delay: 5, ease: Back.easeInOut.config(1.6), opacity: 1
    })
    gsap.to('.framethree', {
      delay: 9, ease: Back.easeInOut.config(0.5), opacity: 0
    })
    gsap.to('.containerImageThree', {
      delay: 9.5, display: 'none'

    })
    gsap.to('.scaleAnimation', {
      delay: 11, opacity: 1, ease: Back.easeInOut.config(0.5)

    })
    gsap.to('.scaleAnimation', {
      delay: 14.8, transform: 'scale(0)'

    })
    gsap.to('.scaleAnimation', {
      delay: 15, display: 'none'
    })
    gsap.to('.containerImageFour', {
      delay: 15, display: 'none'
    })
    gsap.to('.scaleAnimationTwo', {
      delay: 16, transform: 'scale(1)'
    })
    gsap.to('.scaleAnimationTwo', {
      delay: 19, opacity: 0, ease: Power1.easeOut
    })
    gsap.to('.containerImageFive', {
      delay: 20.5, display:'none'
    })
    gsap.to('.scaleAnimationThree', {
      delay: 21, opacity: 1, ease: Power1.easeOut
    })

  }, []);





  return (
    <>
      <Box sx={{ height: '100vh' }} className='containerimage'>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ height: '100%', }}>
          <Typography sx={{ transform: 'scale(0.2)', opacity: 0.1, fontWeight: '300' }} className='title' variant='h5' >Todo comenzó así</Typography>
        </Box>
      </Box>
      <Box sx={{ height: '100vh', transform: 'scale(0.2)' }} display='flex' justifyContent='center' alignItems='center' className='containerImagetwo' >
        <Image alt='' src='/sofia.png' height={300} width={300} />
      </Box>
      <Box sx={{ backgroundColor: 'white', height: '100vh', textAlign: 'center', mt: 5, fontSize: '24px', lineHeight: '24px' }} className='containerImageThree'>
        <Typography variant='body1' className='framethree' sx={{ fontWeight: '300', opacity: 0 }}>No tenía ninguna expectativa<br />  apareciste y me sorprendiste</Typography>
        <Box display='flex' className='framethree' justifyContent={'center'} sx={{ width: '100vw', mt: 5, opacity: 0 }}>
          <Lottie animationData={animation1} loop={true} />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', height: '100vh', textAlign: 'center', mt: 5, fontSize: '24px', lineHeight: '24px', mx: 2 }} className='containerImageFour'>
        <Typography variant='body1' sx={{ fontWeight: 300, fontWeight: 500, opacity: 0 }} className='scaleAnimation'> Sos de esas personas con las que me siento en sintonía y puedo ser yo mismo </Typography>
        <Box display='flex' justifyContent={'center'} sx={{ width: '100vw', mt: 5, opacity: 0 }} className='scaleAnimation'>
          <Lottie animationData={animation3} loop={true} />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', height: '100vh', textAlign: 'center', mt: 5, lineHeight: '30px', mx: 2 }} className='containerImageFive'>
        <Typography variant='body1' sx={{ fontWeight: 300, fontWeight: 500, fontSize: '40px', transform: 'scale(0)' }} className='scaleAnimationTwo'> Por eso y muchas otras cosas me encantas</Typography>
        <Box display='flex' flexDirection='column' justifyContent={'center'} sx={{ width: '100vw', transform: 'scale(0)' }} className='scaleAnimationTwo'>
          <Box sx={{ mt: 3 }}>
            <Lottie animationData={animation4} loop={true} />
          </Box>
          <Lottie animationData={animation2} loop={true} />
        </Box>
      </Box >
      <Box sx={{ backgroundColor: 'white', height: '100vh',alignContent:'center', textAlign: 'center', mt: 5, lineHeight: '30px', mx: 2 }} >
        <Typography variant='body1' sx={{ fontWeight: 300, fontWeight: 500, fontSize: '24px', opacity: 0 }} className='scaleAnimationThree'> Equivocarse es parte del proceso, lo importante es disfrutar el camino</Typography>
        <Box display='flex' flexDirection='column' justifyContent={'center'} sx={{ width: '100vw', opacity: 0 }} className='scaleAnimationThree'>
          <Box sx={{ mt: 3 }}>
            <Lottie animationData={animation6} loop={true} />
          </Box>
          
        </Box>
      </Box >
    </>
  )
}

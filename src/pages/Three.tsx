import React, { useRef, useState } from 'react'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'
const hi = 'hi'
const Three = () => {
  return (
    <div className=''>
      <ParallaxProvider>
        <Parallax translateY={[-20, 10]}>
          <div className='h-[400px] my-2 bg-red-200'>hi</div>
        </Parallax>
        <Parallax speed={+5}>
          <div className='h-[500px] my-2 bg-green-200'>hi</div>
        </Parallax>
        <Parallax translateY={[-20, 10]}>
          <div className='h-[400px] my-2 bg-red-200'>hi</div>
        </Parallax>
        <Parallax speed={+5}>
          <div className='h-[500px] my-2 bg-green-200'>{hi}</div>
        </Parallax>
        <Parallax translateY={[-20, 10]}>
          <div className='h-[400px] my-2 bg-red-200'>{hi}</div>
        </Parallax>
      </ParallaxProvider>
    </div>
  )
}

export default Three

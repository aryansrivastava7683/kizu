'use client'

import React, { useRef, useEffect, useState } from 'react'
import HeartBackground from '@/components/heartbg'

export default function Home () {
  return (
    <div className="relative w-screen min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center text-white">
      <HeartBackground />

      <div className='z-[10] text-white fixed inset-0 md:mt-16 mx-auto md:w-1/2 md:h-3/4 w-full h-full bg-black/60 flex flex-col items-center justify-center pointer-events-none scrollbar-hide text-wrap '>
        <span className='text-lg md:text-2xl font-bold text-center m-4 comic'>
          Hello Kizu , I created this website for you. I hope you like it. I
          love you so much. You are my everything. I am so grateful to have you
          in my life. You make me so happy. I love you more than anything in the
          world. You are my sunshine, my moonlight, and all my stars. You are
          the love of my life, and I will always cherish you. Thank you for
          being you. I love you more than words can say. You are my heart, my
          soul, and my everything. I love you more than anything in the world.
          You are my best friend, my partner, and my soulmate. I am so lucky to
          have you in my life. You make me a better person, and I am so grateful
          for you.
        </span>
      </div>
      <div className='fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] text-center text-2xl text-white font-bold comic mt-4 pointer-events-none'>
        Tap Anywhere
      </div>
    </div>
  )
}

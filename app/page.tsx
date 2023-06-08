'use client'

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Icon from '@/components/Icon'
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export default function Home() {
  const [answer, setAnswer] = useState<any | null>(null);
  const [correct, setCorrect] = useState<Number>(0);

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (answer === '9.29') {
      setCorrect(1);
    } else {
      setCorrect(2);
    }
  }

  return (
    <div className='flex-col relative h-screen w-screen'>
      <video autoPlay muted loop playsInline src='videos/gas.mp4'
        className="w-screen h-screen object-cover absolute z-1 brightness-[60%]">
        <source src='videos/gas.mp4' type="video/mp4" />
      </video>
      <div className='flex-col flex md:p-20 px-12 py-16 md:py-20 text-white gap-16 h-full'>
        <div className='text-[2.75rem] md:text-[5rem] font-semibold z-50'>
          Gay-Lussac's Law
        </div>
        <div className='text-white z-50 flex gap-10'>
          <div className='md:w-[60%] w-full flex flex-col gap-4 md:mt-10'>
            <div className='md:text-lg w-full mb-6'>
              BREAKING NEWS! The wildfires have resulted in record breaking temperatures across Milton, reaching a consistent high of 313K. A 50.0L sample of nitrogen is found within a sealed aerosol container with a resting temperature of 288K, and a pressure of 8.55atm. Unfortunately, Rhea left this container on the hot driveway, causing it to heat up. What is the new pressure after it increases in temperature?
            </div>
            <form className='flex gap-2 items-center' onSubmit={(e: any) => onSubmit(e)}>
              <input type="text" placeholder='Answer' id="fname" name="fname" onChange={(e) => setAnswer(e.currentTarget.value)}
                className='z-50 p-2 rounded-xl bg-transparent border-white border-2 text-white' />
              <div className='bg-red-400 py-2 px-3 rounded-xl bg-opacity-60 hover:bg-opacity-90 cursor-pointer' onClick={(e) => onSubmit(e)}>
                Check
              </div>
            </form>
            {
              correct === 1 ? (
                <>
                  <div className='text-green-500 font-bold text-xl'>
                    Correct!
                  </div>
                  <ConfettiExplosion
                    particleCount={300}
                    duration={5000}
                    height={2000}
                    width={2000}
                  />
                </>
              ) : correct === 2 ? (
                <div className='text-red-500 font-bold text-xl'>
                  Wrong, try again!
                </div>
              ) : (
                <div className='text-red-500 font-bold text-xl'>

                </div>
              )
            }
          </div>
          <div className='md:w-[40%] hidden md:block'>
            <Icon />
          </div>
        </div>
      </div>
    </div>
  )
}
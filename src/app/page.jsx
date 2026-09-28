import React from 'react'

import Hero from './componets/Hero'
import JourneySelector from './componets/JourneySelector'
import Features from './componets/Features'
import { Philosopher } from 'next/font/google'
import Philosophy from './componets/Philosophy'
import JourneyShape from './componets/JourneyShape'
import SignatureSection from './componets/SignatureSection'
import WhyElevatedIndia from './componets/WhyElevatedIndia'
import LuxuryStats from './componets/LuxuryStats'
import GroundOperations from './componets/GroundOperations'
import JourneyServices from './componets/JourneyServices'
import FamousJourneys from './componets/FamousJourneys'
import LuxuryCalendar from './componets/LuxuryCalendar'


export default function page() {
  return (
    <>
      <div className='mt-3'>
      <Hero/>
      </div>
      <JourneySelector/>
      <Features/>
      <Philosophy/>
      <JourneyShape/>
      <SignatureSection/>
      <WhyElevatedIndia/>
      <LuxuryStats/>
      <GroundOperations/> 
      <JourneyServices/>
      <FamousJourneys/>
      <LuxuryCalendar/>
      
    </>
  )
}

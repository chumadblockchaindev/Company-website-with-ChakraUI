import AboutHero from '@/components/AboutHero'
import AboutUs from '@/components/AboutUs'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import React from 'react'

const About = () => {
  return (
    <div>
      <AboutHero />
      <br />
      <AboutUs />
      <CTA />
      <h1 className="text-center text-3xl font-extrabold p-8">FAQ</h1>
      <Faq />
    </div>
  )
}

export default About
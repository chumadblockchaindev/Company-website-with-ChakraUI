import AboutFlooring from '@/components/AboutFlooring'
import Carousel from '@/components/Carousel'
import CTA from '@/components/CTA'
import Gallery from '@/components/Gallery'
import React from 'react'

const imageGallery = [
  { 
    title: "",
    text: "",
    image: '/photo_12.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_13.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_60.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_61.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_72.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_92.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_93.jpg'
  }
]

const GermanFloor = () => {
  return (
    <div>
      <Carousel />
      <AboutFlooring />
      <Gallery title='View our works' gallery={imageGallery}/>
      <CTA />
    </div>
  )
}

export default GermanFloor
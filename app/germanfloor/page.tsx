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
  },
  { 
    title: "",
    text: "",
    image: '/3d3.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/3d4.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/3d5.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/3d6.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/3d7.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/3d8.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/incret1.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/incret2.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/incret3.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/incret4.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/incret5.png'
  },
  { 
    title: "",
    text: "",
    image: '/incret6.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/incret7.jpg'
  },
]

const videoPath = ['/3d1.mp4', '/3d2.mp4', '/screedingvid.mp4']

const GermanFloor = () => {
  return (
    <div>
      <Carousel />
      <AboutFlooring />
      <Gallery title='View our works' gallery={imageGallery} videoPath={videoPath} />
      <CTA />
    </div>
  )
}

export default GermanFloor
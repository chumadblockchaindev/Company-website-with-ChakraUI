import AboutCosmetic from '@/components/AboutCosmetic'
import AboutProd from '@/components/AboutProd'
import Carousel from '@/components/Carousel'
import CTA from '@/components/CTA'
import Gallery from '@/components/Gallery'
import OtherProducts from '@/components/OtherProducts'
import React from 'react'

const imageGallery = [
  { 
    title: "Skin Cream",
    text: "",
    image: '/photo_88.jpg'
  },
  { 
    title: "Hand Sanitizer",
    text: "",
    image: '/photo_1.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_2.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_3.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_14.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_16.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_17.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_20.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_21.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_24.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_27.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_29.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_35.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_90.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_91.jpg'
  },
]

const Cosmetics = () => {
  return (
    <div>
      <Carousel />
      <AboutCosmetic />
      <h1 className="text-center text-3xl font-extrabold p-4">Other Products</h1>
      <OtherProducts />
      <Gallery title='View our Products' gallery={imageGallery}/>
      <CTA />
    </div>
  )
}

export default Cosmetics
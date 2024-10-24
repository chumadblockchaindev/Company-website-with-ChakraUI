import AboutProd from '@/components/AboutProd'
import Carousel from '@/components/Carousel'
import CTA from '@/components/CTA'
import Gallery from '@/components/Gallery'
import Painting from '@/components/Painting'
import React from 'react'

const imageGallery = [
  { 
    title: "",
    text: "",
    image: '/photo_62.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_63.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_64.jpg'
  },
  { 
    title: "Crackie paint",
    text: "",
    image: '/photo_67.jpg'
  },
  { 
    title: "Gravitex",
    text: "",
    image: '/photo_68.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_4.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_9.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_66.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_69.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_70.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_71.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_78.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_77.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_76.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_75.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_74.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_79.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_80.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_81.jpg'
  },
  { 
    title: "Emulsion Painting",
    text: "",
    image: '/photo_73.jpg'
  },
  { 
    title: "Emulsion Painting",
    text: "",
    image: '/photo_84.jpg'
  },
  { 
    title: "Emulsion Painting",
    text: "",
    image: '/photo_85.jpg'
  },
  { 
    title: "Emulsion Painting",
    text: "",
    image: '/photo_86.jpg'
  },
  { 
    title: "",
    text: "",
    image: '/photo_91.jpg'
  },
]

const videoPath = ['']

const Paints = () => {
  return (
    <section>
      <div>
        <Carousel />
        <AboutProd />
        <Gallery title='Gallery' gallery={imageGallery} videoPath={videoPath} />
        <CTA />
      </div>
    </section>
  )
}

export default Paints
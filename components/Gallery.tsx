import Image from 'next/image'
import React from 'react'
import Video from './Video'

interface galleryProp {
  title: string,
  text: string,
  image: string,
}

const Gallery = ({ gallery, title, videoPath }: {gallery: galleryProp[], title: string, videoPath: Array<string>}) => {

  
  return (
    <section id='gallery'>
      <div className='flex flex-col justify-center items-center space-y-5 mt-10 m-4'>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold'>{title}</h1>
        </div>
        <div className='border-2 border-neutral-500 p-4 rounded-xl'>
          <div  className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4'>
          {
            gallery.map((item, index) => (
              <div key={index} className='relative'>
                <Image
                  src={item.image}
                  alt='#images'
                  width={300}
                  height={150}
                  className='rounded-xl shadow-xl dark:shadow-gray-800'
                />
                  <div className="absolute px-4 text-lg text-white bottom-6">
                    <p>{item.title}</p>
                    <p>{item.text}</p>
                </div>
              </div>
            ))
          }
            {
              videoPath.map((video, index) => (
                <div key={index}>
                  <Video path={video} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
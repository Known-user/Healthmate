import React from 'react'
import Carousel from './Carousel'

function Slider({arr , heading ,slide}) {
  return (
    <>
      <section className='bg-[#EEEEEE] px-24 py-8 max-lg:px-8 max-md:px-6'>
        <h1 className='text-4xl font-semibold p-2 mb-8'>{heading}</h1>
        <Carousel slide={slide} arr={arr}/>
      </section>
    </>
  )
}

export default Slider

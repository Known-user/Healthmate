import React from 'react'
import Carousel from './Carousel'

function Slider({arr , heading ,slide ,type}) {
  return (
    <>
      <section className='px-24 py-16 max-lg:px-8 max-md:px-6'>
        <h1 className='text-4xl font-semibold p-2 mb-8'>{heading}</h1>
        <Carousel slide={slide} type={type} arr={arr}/>
      </section>
    </>
  )
}

export default Slider

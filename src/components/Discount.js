import React from 'react'

function Discount() {
  const discountProducts = [
    {
      name: 'Pain Relief Tablets',
      desc: 'Effective pain relief with fast action',
      image: 'https://www.deemark.com/cdn/shop/files/OrthoTablet.jpg?v=1714394143',
      discount: 15,
    },
    {
      name: 'Multivitamin Capsules',
      desc: 'Daily multivitamin for overall health support',
      image: 'https://www.paxhealthcare.com/wp-content/uploads/2017/01/SOFIT-COMP.jpg',
      discount: 20,
    },
    {
      name: 'Cough Syrup',
      desc: 'Fast relief from cough and cold symptoms',
      image: 'https://www.medkart.in/_next/image?url=https%3A%2F%2Fd1s24u4ln0wd0i.cloudfront.net%2F15446_1&w=640&q=75',
      discount: 25,
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 pb-14">
      {discountProducts.map((product, index) => (
        <div
          key={index}
          className="bg-cover bg-center h-96 flex flex-col justify-end relative"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 text-white">
            <h3 className="text-lg">{product.name}</h3>
            <p className="mb-2">Get up to {product.discount}% off!</p>
            <a href='/description' className="bg-white inline-block text-black py-2 px-4 uppercase font-bold transition duration-500 hover:bg-black hover:text-white">
              Shop Now
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Discount

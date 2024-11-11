import React, { useState, useEffect } from 'react';
import Products from './Products';
import Slider from '../components/Slider';

const info = [
  {
    name: ' Worldwide Shipping',
    image: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png',
    des: '20000+ Pincodes Served'
  },
  {
    name: ' Best Quality',
    image: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png',
    des: '9M+ Happy Customers'
  },
  {
    name: ' Best Offers',
    image: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png',
    des: 'On All Products'
  },
  {
    name: ' Secure Payments',
    image: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/payment-free-img.png',
    des: 'Men dhklyrlk'
  },
];

const trending = [
  "https://mercury.akamaized.net/i/324b967d8a8c788adb862aaae380be36_286304_0.jpg",
  "https://mercury.akamaized.net/i/7b4ed388a4d96f1ab9da1eb6a0d096fe_269807_0.jpg",
  "https://mercury.akamaized.net/i/fc4a54c68dbff609f2e178c0ed1c0eb9_275176_0.jpg",
  "https://mercury.akamaized.net/i/ada1a9b18729c3f8bb28d1076e5aada4_58415_0.jpg",
  "https://mercury.akamaized.net/i/91544f70f0302ddeca232a2e9e098666_250935_0.jpg",
  "https://mercury.akamaized.net/i/e36ec136a1f09a4a4f1dc3171819ec85_233062_0.jpg",
  "https://mercury.akamaized.net/i/de37aadf1118f218b7a39283c13d278e_222071_0.jpg",
  "https://mercury.akamaized.net/i/0bc1628efd2f8f0ccec5441b188e2ac1_271448_0.jpg"
];

// const categories = [
//   "https://www.netmeds.com/images/category/v1/3087/thumb/feminine_hygiene_2.png",
//   "https://www.netmeds.com/images/category/v1/525/thumb/body_care_4.png",
//   "https://www.netmeds.com/images/category/prod/thumb/ayurvedic.png",
//   "https://www.netmeds.com/images/category/prod/thumb/orthopaedics.png",
//   "https://www.netmeds.com/images/category/prod/thumb/sports_supplements.png",
//   "https://www.netmeds.com/images/category/prod/thumb/ayush.png",
//   "https://www.netmeds.com/images/category/prod/thumb/fitness.png",
//   "https://www.netmeds.com/images/category/v1/665/thumb/devices_1.png",
//   "https://www.netmeds.com/images/category/prod/thumb/personal_care.png",
//   "https://www.netmeds.com/images/category/prod/thumb/sexual_wellness.png",
// ];

// Featured Products Section
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/product/all');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="products" className="bg-[#EEEEEE] px-24 py-8 max-lg:px-8 max-md:px-6 relative">
        <h2 className="text-center text-4xl font-semibold p-2 mb-14">Featured Products</h2>
        <div>Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="bg-[#EEEEEE] px-24 py-8 max-lg:px-8 max-md:px-6 relative">
        <h2 className="text-center text-4xl font-semibold p-2 mb-14">Featured Products</h2>
        <div>Error: {error}</div>
      </section>
    );
  }

  return (
    <section id="products" className="bg-[#EEEEEE] px-24 py-8 max-lg:px-8 max-md:px-6 relative">
      <h2 className="text-center text-4xl font-semibold p-2 mb-14">Featured Products</h2>
      <Products products={products} />
    </section>
  );
};

// Limited Offer Section
const LimitedOffer = () => {
  return (
    <section className="bg-[#EEEEEE] p-20">
      <div className="relative h-96 bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg')" }}>
        <div className="absolute inset-0 bg-blue-500 bg-opacity-30"></div>
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2 text-white">
          <p className="text-sm leading-none">Limited Offer</p>
          <h3 className="text-4xl py-3 font-bold">Special Edition</h3>
          <p className="text-sm leading-none">Don't miss out on our exclusive deals!</p>
          <p className="text-sm leading-none">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
          <button className="bg-white text-black px-4 py-2 mt-5 transition duration-300 hover:bg-black hover:text-white">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

// Info Section
const InfoSection = () => {
  return (
    <section className="grid bg-[#EEEEEE] grid-cols-2 sm:grid-cols-4 gap-10 p-20 ">
      {info.map((i, index) => (
        <div key={index} className="text-center">
          <img src={i.image} alt="Info Icon" className="mx-auto w-12 h-12 object-contain" />
          <h2>{i.name}</h2>
          <p className="text-gray-700">{i.des}</p>
        </div>
      ))}
    </section>
  );
};

function Special() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/category/all');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data.data);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <FeaturedProducts />
      <Slider heading={"Trending Today"} slide={3} type="img" arr={trending} />
      <LimitedOffer />
      <Slider heading={"Categories"} slide={4} type="card"  arr={categories} />
      <InfoSection />
    </>
  );
}

export default Special;













// const products = [
//   {
//     id: 1,
//     category: 'Women',
//     title: "Women's Top",
//     price: 75.99,
//     salePrice: null,
//     image1: "https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765a2eb222b1851840a4a157780fb487&auto=format&fit=crop&w=1534&q=80",
//     image2: "https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765a2eb222b1851840a4a157780fb487&auto=format&fit=crop&w=1534&q=80"
//   },
//   {
//     id: 2,
//     category: 'Men',
//     title: "Men's Blazer",
//     price: 86.33,
//     salePrice: 71.55,
//     image1: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60",
//     image2: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     id: 3,
//     category: 'Men',
//     title: "Men's Blazer",
//     price: 86.33,
//     salePrice: 71.55,
//     image1: "https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60",
//     image2: "https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     id: 4,
//     category: 'Men',
//     title: "Men's Blazer",
//     price: 86.33,
//     salePrice: 71.55,
//     image1: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60",
//     image2: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     id: 4,
//     category: 'Men',
//     title: "Men's Blazer",
//     price: 86.33,
//     salePrice: 71.55,
//     image1: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60",
//     image2: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     id: 4,
//     category: 'Men',
//     title: "Men's Blazer",
//     price: 86.33,
//     salePrice: 71.55,
//     image1: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60",
//     image2: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     id: 4,
//     category: 'Men',
//     title: "Men's Blazer",
//     price: 86.33,
//     salePrice: 71.55,
//     image1: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60",
//     image2: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60"
//   },
// ];


{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
          {products.map((i, index) => (
            <div key={index} className="relative h-80">
              <img src={i.image1} alt="Product" className="w-full h-52 object-cover cursor-pointer" />
              <i className="fas fa-shopping-basket absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></i>
              <div className=" p-4">
                <div className="text-lg font-bold">{i.title}</div>
                <div className="text-gray-500">{i.category}</div>
                <div className="text-gray-400 line-through">{i.price}</div>
                <div className="text-lg">{i.salePrice}</div>
               
                <div className="mt-2 flex gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer"></span>
                  <span className="w-5 h-5 rounded-full bg-green-500 cursor-pointer"></span>
                  <span className="w-5 h-5 rounded-full bg-purple-500 cursor-pointer"></span>
                </div>
              </div>
            </div>
          ))}
        </div> */}



{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
          {arr.map((i, index) => (
            <div key={index} className="relative h-80">
              <img src={i.image} alt="Product" className="w-full h-52 object-cover cursor-pointer" />
              <i className="fas fa-shopping-basket absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></i>
              <div className=" p-4">
                <div className="text-lg font-bold">{i.name}</div>
                <div className="text-gray-500">{i.category}</div>
               
                <div className="mt-2 flex gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer"></span>
                  <span className="w-5 h-5 rounded-full bg-green-500 cursor-pointer"></span>
                  <span className="w-5 h-5 rounded-full bg-purple-500 cursor-pointer"></span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
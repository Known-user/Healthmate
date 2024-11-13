// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function Footer() {
//   return (
//     <footer className="bg-white">
//       <div className="border-t border-b border-gray-300 py-10 px-24 text-lg font-bold cursor-pointer">
//       HealthMate is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 9 million happy customers – PAN India.
//       </div>

//       <div className="bg-white grid grid-cols-1 md:grid-cols-4 gap-5 py-10 px-24 border-b border-gray-300">
//         <div className="container">
//           <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img-120x40.png" alt="Logo" className="w-20" />
//           <h2 className="text-xl font-bold mt-4">The best look anytime, anywhere.</h2>
//         </div>
//         <div className="container text-center">
//           <h5 className="text-lg font-light">About Us</h5>
//           <ul>
//             <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-500">Our Story</li>
//             <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-500">Careers</li>
//             <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-500">Privacy Policy</li>
//           </ul>
//         </div>
//         <div className="container text-center">
//           <h5 className="text-lg font-light">Customer Service</h5>
//           <ul>
//             <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-500">Contact Us</li>
//             <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-500">Returns</li>
//             <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-500">Shipping Info</li>
//           </ul>
//         </div>
//         <div className="container text-center">
//           <h5 className="text-lg font-light">Subscribe</h5>
//           <form>
//             <input type="text" className="border border-gray-300 p-2 w-full mt-5" placeholder="Your Name" />
//             <input type="email" className="border border-gray-300 p-2 w-full mt-5" placeholder="Your Email" />
//             <button type="submit" className="bg-blue-600 text-white p-3 mt-4 w-full hover:bg-black transition duration-500">Subscribe</button>
//           </form>
//         </div>
//       </div>

//       <div className="flex justify-between px-24 py-8">
//         <div className="text-sm">© 2024 Your Company Name. All rights reserved.</div>
//         <div className="flex gap-5">
//           <FontAwesomeIcon icon={['fab', 'facebook']} className="text-lg cursor-pointer hover:text-blue-500" />
//           <FontAwesomeIcon icon={['fab', 'twitter']} className="text-lg cursor-pointer hover:text-blue-500" />
//           <FontAwesomeIcon icon={['fab', 'instagram']} className="text-lg cursor-pointer hover:text-blue-500" />
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
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
      image: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png',
      des: 'Men dhklyrlk'
    },
  ];
  return (
    <footer id="about" className="bg-blue-50">
      <section className="grid bg-blue-50 grid-cols-2 sm:grid-cols-4 gap-10 p-20 ">
      {info.map((i, index) => (
        <div key={index} className="text-center">
          <img src={i.image} alt="Info Icon" className="mx-auto w-12 h-12 object-contain" />
          <h2>{i.name}</h2>
          <p className="text-gray-700">{i.des}</p>
        </div>
      ))}
    </section>
      <div className="border-t border-b border-gray-300 py-10 px-24 text-lg font-semibold text-gray-700 cursor-pointer">
        HealthMate is India’s trusted online pharmacy, providing quality
        medicines, healthcare products, and expert advice to customers across
        the nation.
      </div>

      <div className="bg-blue-50 grid grid-cols-1 md:grid-cols-4 gap-8 py-10 px-24 border-b border-gray-300">
        <div className="container">
          <img
            src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img-120x40.png"
            alt="Logo"
            className="w-24"
          />
          <h2 className="text-xl font-bold mt-4 text-blue-700">Your health, our priority.</h2>
        </div>
        <div className="container text-center">
          <h5 className="text-lg font-semibold text-blue-700">Company</h5>
          <ul>
            <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-600">
              About HealthMate
            </li>
            <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-600">
              Our Values
            </li>
            <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-600">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="container text-center">
          <h5 className="text-lg font-semibold text-blue-700">Customer Care</h5>
          <ul>
            <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-600">
              FAQs
            </li>
            <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-600">
              Order Tracking
            </li>
            <li className="text-gray-600 py-2 cursor-pointer hover:text-blue-600">
              Return Policy
            </li>
          </ul>
        </div>
        <div className="container text-center">
          <h5 className="text-lg font-semibold text-blue-700">Stay Connected</h5>
          <form>
            <input
              type="text"
              className="border border-blue-300 p-2 w-full mt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="border border-blue-300 p-2 w-full mt-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 mt-4 w-full rounded-md hover:bg-blue-700 transition duration-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-between px-24 py-8 bg-blue-700 text-white">
        <div className="text-sm">© 2024 HealthMate. All rights reserved.</div>
        <div className="flex gap-6">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-lg cursor-pointer hover:text-blue-300"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-lg cursor-pointer hover:text-blue-300"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-lg cursor-pointer hover:text-blue-300"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;


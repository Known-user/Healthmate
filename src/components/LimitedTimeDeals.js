// import React, { useState } from 'react';

// const deals = [
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 4.8,
//     title: 'Cetaphil Oily Skin Cleanser 125ml',
//     price: '₹ 545.16',
//     originalPrice: '₹ 649.00',
//     discount: '16',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Episoft For Sensitive Skin Cleansing Lotion 250ml',
//     price: '₹ 492.00',
//     originalPrice: '₹ 600.00',
//     discount: '18',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Bontress Pro Plus Scalp Serum 60 Ml',
//     price: '₹ 1,350.00',
//     originalPrice: '₹ 1,500.00',
//     discount: '10',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Dr. Willmar Schwabe Dizester Herbal Digestive Tonic',
//     price: '₹ 276.50',
//     originalPrice: '₹ 395.00',
//     discount: '30',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: "Skore Xtra Lubrication Condoms - Blue 10'S",
//     price: '₹ 70.20',
//     originalPrice: '₹ 90.00',
//     discount: '22',
//   },
// ];

// const LimitedTimeDeals = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? deals.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === deals.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="flex justify-center bg-sky-100 py-8">
//       <div className="relative w-11/12 md:w-10/12 lg:w-9/12 bg-gradient-to-b from-red-500 to-red-700 text-white rounded-md shadow-lg p-6">
//         {/* Background Image */}
//         <div
//   className="absolute inset-0 bg-no-repeat bg-left opacity-20"
//   style={{ backgroundImage: "url('https://www.netmeds.com/images/cms/section/images/1704906417_Limited_Time.png')" }}
// ></div>


//         {/* Header */}
//         <div className="flex justify-between items-center relative z-10 mb-4">
//           <div>
//             <h2 className="text-xl font-semibold">Limited Time Deals</h2>
//             <p className="text-sm font-light italic">Grab the Deal!</p>
//           </div>
//           <a href="#" className="text-white text-sm underline hover:text-gray-200">
//             View All &gt;
//           </a>
//         </div>

//         {/* Carousel */}
//         <div className="flex items-center relative">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 z-10 bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100"
//           >
//             &#10094;
//           </button>

//           {/* Card */}
//           <div className="flex gap-4 overflow-hidden w-full">
//             {deals.slice(currentIndex, currentIndex + 1).map((deal, index) => (
//               <div
//                 key={index}
//                 className="bg-white text-gray-800 rounded-lg shadow-lg p-4 w-60 flex-shrink-0 mx-auto"
//               >
//                 <div className="absolute top-0 -left-4 bg-white p-2 rounded-full shadow-md">
//                   <span className="text-sm font-semibold text-gray-800">⭐ {deal.rating}</span>
//                 </div>
//                 <img src={deal.image} alt={deal.title} className="h-40 mx-auto mb-2" />
//                 <h3 className="text-sm font-semibold mb-1">{deal.title}</h3>
//                 <p className="text-lg font-bold">{deal.price} <span className="line-through text-gray-400">{deal.originalPrice}</span></p>
//                 <p className="text-green-600 text-sm font-semibold mb-3">GET {deal.discount} % off</p>
//                 <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-teal-600">
//                   ADD TO CART
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="absolute right-0 z-10 bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100"
//           >
//             &#10095;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LimitedTimeDeals;







// import React, { useState } from 'react';
// import Slider from 'react-slick';

// const deals = [
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 4.8,
//     title: 'Cetaphil Oily Skin Cleanser 125ml',
//     price: '₹ 545.16',
//     originalPrice: '₹ 649.00',
//     discount: '16',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Episoft For Sensitive Skin Cleansing Lotion 250ml',
//     price: '₹ 492.00',
//     originalPrice: '₹ 600.00',
//     discount: '18',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Bontress Pro Plus Scalp Serum 60 Ml',
//     price: '₹ 1,350.00',
//     originalPrice: '₹ 1,500.00',
//     discount: '10',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Dr. Willmar Schwabe Dizester Herbal Digestive Tonic',
//     price: '₹ 276.50',
//     originalPrice: '₹ 395.00',
//     discount: '30',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: "Skore Xtra Lubrication Condoms - Blue 10'S",
//     price: '₹ 70.20',
//     originalPrice: '₹ 90.00',
//     discount: '22',
//   },
// ];
// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       style={{
//         backgroundColor: 'white',
//         border: '1px solid #ccc', // Thin gray border
//         borderRadius: '0 50% 50% 0', // Rounded right border
//         padding: '0.5rem',
//         position: 'absolute',
//         top: '50%',
//         left: '0',
//         transform: 'translateY(-50%)',
//         fontSize: '1.5rem',
//         color: 'gray',
//         cursor: 'pointer',
//         boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)', // Subtle shadow
//         transition: 'color 0.2s, box-shadow 0.2s', // Smooth hover effect
//         zIndex: 1,
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.color = '#333'; // Darker color on hover
//         e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.color = 'gray';
//         e.currentTarget.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.15)';
//       }}
//     >
//       ❮
//     </button>
//   );
// };

// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       style={{
//         backgroundColor: 'white',
//         border: '1px solid #ccc', // Thin gray border
//         borderRadius: '50% 0 0 50%', // Rounded left border
//         padding: '0.5rem',
//         position: 'absolute',
//         top: '50%',
//         right: '0',
//         transform: 'translateY(-50%)',
//         fontSize: '1.5rem',
//         color: 'gray',
//         cursor: 'pointer',
//         boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)', // Subtle shadow
//         transition: 'color 0.2s, box-shadow 0.2s', // Smooth hover effect
//         zIndex: 1,
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.color = '#333'; // Darker color on hover
//         e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.color = 'gray';
//         e.currentTarget.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.15)';
//       }}
//     >
//       ❯
//     </button>
//   );
// };

// const LimitedTimeDeals = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };


//   return (
//     <div className="flex justify-center bg-sky-100 py-8">
//       <div className="relative w-11/12 md:w-10/12 lg:w-9/12 bg-gradient-to-b from-red-500 to-red-700 text-white rounded-md shadow-lg p-6">
//         {/* Background Image */}
//         <div
//   className="absolute inset-0 bg-no-repeat bg-left opacity-20"
//   style={{ backgroundImage: "url('https://www.netmeds.com/images/cms/section/images/1704906417_Limited_Time.png')" }}
// ></div>


//         {/* Header */}
//         <div className="flex justify-between items-center relative z-10 mb-4">
//           <div>
//             <h2 className="text-xl font-semibold">Limited Time Deals</h2>
//             <p className="text-sm font-light italic">Grab the Deal!</p>
//           </div>
//           <a href="#" className="text-white text-sm underline hover:text-gray-200">
//             View All &gt;
//           </a>
//         </div>

//         {/* Carousel */}
//         <div className="flex items-center relative">
//         <Slider {...settings}>
//         {deals.map((deal, index) => (
//           <div className="flex gap-4 overflow-hidden w-full">
//               <div
//                 key={index}
//                 className="bg-white text-gray-800 rounded-lg shadow-lg p-4 w-60 flex-shrink-0 mx-auto"
//               >
//                 <div className="absolute top-0 -left-4 bg-white p-2 rounded-full shadow-md">
//                   <span className="text-sm font-semibold text-gray-800">⭐ {deal.rating}</span>
//                 </div>
//                 <img src={deal.image} alt={deal.title} className="h-40 mx-auto mb-2" />
//                 <h3 className="text-sm font-semibold mb-1">{deal.title}</h3>
//                 <p className="text-lg font-bold">{deal.price} <span className="line-through text-gray-400">{deal.originalPrice}</span></p>
//                 <p className="text-green-600 text-sm font-semibold mb-3">GET {deal.discount} % off</p>
//                 <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-teal-600">
//                   ADD TO CART
//                 </button>
//               </div>
//           </div>
//         ))}
//       </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LimitedTimeDeals;
























// import React from 'react';
// import Slider from 'react-slick';

// const deals = [
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 4.8,
//     title: 'Cetaphil Oily Skin Cleanser 125ml',
//     price: '₹ 545.16',
//     originalPrice: '₹ 649.00',
//     discount: '16',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Episoft For Sensitive Skin Cleansing Lotion 250ml',
//     price: '₹ 492.00',
//     originalPrice: '₹ 600.00',
//     discount: '18',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Bontress Pro Plus Scalp Serum 60 Ml',
//     price: '₹ 1,350.00',
//     originalPrice: '₹ 1,500.00',
//     discount: '10',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: 'Dr. Willmar Schwabe Dizester Herbal Digestive Tonic',
//     price: '₹ 276.50',
//     originalPrice: '₹ 395.00',
//     discount: '30',
//   },
//   {
//     image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
//     rating: 5.0,
//     title: "Skore Xtra Lubrication Condoms - Blue 10'S",
//     price: '₹ 70.20',
//     originalPrice: '₹ 90.00',
//     discount: '22',
//   },
// ];

// const SampleNextArrow = ({ onClick }) => (
//   <div
//     className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 cursor-pointer shadow-lg"
//     onClick={onClick}
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-5 text-gray-600"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//     </svg>
//   </div>
// );

// const SamplePrevArrow = ({ onClick }) => (
//   <div
//     className="absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 cursor-pointer shadow-lg"
//     onClick={onClick}
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-5 text-gray-600"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//     </svg>
//   </div>
// );

// const LimitedTimeDeals = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="flex justify-center bg-sky-100 py-8">
//       <div className="relative w-11/12 md:w-10/12 lg:w-9/12 bg-gradient-to-b from-red-500 to-red-700 text-white rounded-md shadow-lg p-6"
//       style={{
//                 backgroundImage: 'linear-gradient(to bottom, #AD252A, #CF7C7D)',
//               }}
//       >
//         <div
//           className="absolute inset-0 bg-no-repeat bg-left opacity-20"
//           style={{ backgroundImage: "url('https://www.netmeds.com/images/cms/section/images/1704906417_Limited_Time.png')" }}
//         ></div>

//         <div className="flex justify-between items-center relative z-10 mb-4">
//           <div>
//             <h2 className="text-xl font-semibold">Limited Time Deals</h2>
//             <p className="text-sm font-light italic">Grab the Deal!</p>
//           </div>
//           <a href="#" className="text-white text-sm underline hover:text-gray-200">
//             View All &gt;
//           </a>
//         </div>

//         <div className="flex items-center justify-end relative w-full">
//           <Slider className='w-[90%]' {...settings}>
//             {deals.map((deal, index) => (
//               <div key={index} className="flex gap-4 overflow-hidden w-full">
//                 <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4 w-60 flex-shrink-0 mx-auto">
//                   <div className="absolute top-0 -left-4 bg-white p-2 rounded-full shadow-md">
//                     <span className="text-sm font-semibold text-gray-800">⭐ {deal.rating}</span>
//                   </div>
//                   <img src={deal.image} alt={deal.title} className="h-40 mx-auto mb-2" />
//                   <h3 className="text-sm font-semibold mb-1">{deal.title}</h3>
//                   <p className="text-lg font-bold">{deal.price} <span className="line-through text-gray-400">{deal.originalPrice}</span></p>
//                   <p className="text-green-600 text-sm font-semibold mb-3">GET {deal.discount} % off</p>
//                   <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-teal-600">
//                     ADD TO CART
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LimitedTimeDeals;




import React from 'react';
import Slider from 'react-slick';

const deals = [
  {
    image: 'https://www.netmeds.com/images/product-v1/150x150/848465/skore_notout_climax_delay_with_1500_plus_raised_dots_10s_73948_0_1.jpg',
    rating: 4.8,
    title: 'Cetaphil Oily Skin Cleanser 125ml',
    price: '₹ 545.16',
    originalPrice: '₹ 649.00',
    discount: '16',
  },
  {
    image: 'https://www.netmeds.com/images/product-v1/150x150/828337/cetaphil_oily_skin_cleanser_125ml_120194_0_1.jpg',
    rating: 4.8,
    title: 'Cetaphil Oily Skin Cleanser 125ml',
    price: '₹ 545.16',
    originalPrice: '₹ 649.00',
    discount: '16',
  },
  {
    image: 'https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg',
    rating: 4.8,
    title: 'Cetaphil Oily Skin Cleanser 125ml',
    price: '₹ 545.16',
    originalPrice: '₹ 649.00',
    discount: '16',
  },
  {
    image: 'https://www.netmeds.com/images/product-v1/150x150/1133148/bontress_pro_plus_scalp_serum_60_ml_731765_0_0.jpg',
    rating: 4.8,
    title: 'Cetaphil Oily Skin Cleanser 125ml',
    price: '₹ 545.16',
    originalPrice: '₹ 649.00',
    discount: '16',
  },
  {
    image: 'https://www.netmeds.com/images/product-v1/150x150/835964/dr_willmar_schwabe_dizester_tonic_500_ml_0.jpg',
    rating: 4.8,
    title: 'Cetaphil Oily Skin Cleanser 125ml',
    price: '₹ 545.16',
    originalPrice: '₹ 649.00',
    discount: '16',
  },
  
];

const SampleNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 cursor-pointer shadow-lg z-10"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 cursor-pointer shadow-lg z-10"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const LimitedTimeDeals = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center px-24 py-12 pb-20">
      <div className="relative w-full bg-gradient-to-b from-red-500 to-red-700 text-white rounded-md shadow-lg px-6 py-8"
           style={{
             backgroundImage: 'linear-gradient(to bottom, #AD252A, #CF7C7D)',
             backgroundSize: 'cover',
           }}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-left"
          style={{ backgroundImage: "url('https://www.netmeds.com/images/cms/section/images/1704906417_Limited_Time.png')" }}
        ></div>

        <div className="flex justify-between items-center relative z-10 mb-6">
          <div>
            <h2 className="text-xl font-semibold">Limited Time Deals</h2>
            <p className="text-sm font-light italic">Grab the Deal!</p>
          </div>
          <a href="#" className="text-white text-sm align-top hover:text-gray-200">
            View All &gt;
          </a>
        </div>

        <div className="relative w-full flex items-center justify-end">
          <Slider className='w-[90%]' {...settings}>
            {deals.map((deal, index) => (
              <div key={index} className="flex gap-4 overflow-hidden w-full">
                <div className="bg-white text-gray-800 rounded-lg shadow-lg p-4 w-60 flex-shrink-0 mx-auto relative">
                  <div className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-gray-800">⭐ {deal.rating}</span>
                  </div>
                  <img src={deal.image} alt={deal.title} className="h-40 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold mb-1">{deal.title}</h3>
                  <p className="text-lg font-bold">{deal.price} <span className="line-through text-gray-400">{deal.originalPrice}</span></p>
                  <p className="text-green-600 text-sm font-semibold mb-3">GET {deal.discount} % off</p>
                  <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-teal-600">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeDeals;




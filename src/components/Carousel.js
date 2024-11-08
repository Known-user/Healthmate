// import React, { useEffect, useRef } from 'react';

// function Carousel() {
//   const sliderRef = useRef(null);
//   const sliderListRef = useRef(null);
//   const countRef = useRef(1);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const sliderList = sliderListRef.current;
//     let sliderWidth = slider.offsetWidth / 3;
//     const items = sliderList.querySelectorAll('li').length - 2;

//     const updateSliderWidth = () => {
//       sliderWidth = slider.offsetWidth / 3;
//     };
//     window.addEventListener('resize', updateSliderWidth);

//     const prevSlide = () => {
//       if (countRef.current > 1) {
//         countRef.current -= 2;
//         sliderList.style.left = `-${countRef.current * sliderWidth}px`;
//         countRef.current++;
//       } else if (countRef.current === 1) {
//         countRef.current = items - 1;
//         sliderList.style.left = `-${countRef.current * sliderWidth}px`;
//         countRef.current++;
//       }
//     };

//     const nextSlide = () => {
//       if (countRef.current < items) {
//         sliderList.style.left = `-${countRef.current * sliderWidth}px`;
//         countRef.current++;
//       } else if (countRef.current === items) {
//         sliderList.style.left = '0px';
//         countRef.current = 1;
//       }
//     };

//     document.getElementById('prev').addEventListener('click', prevSlide);
//     document.getElementById('next').addEventListener('click', nextSlide);

//     const autoSlide = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => {
//       window.removeEventListener('resize', updateSliderWidth);
//       clearInterval(autoSlide);
//     };
//   }, []);

//   return (
//     <div ref={sliderRef} className="w-full h-[200px] relative border border-gray-300 shadow-[0px_8px_10px_rgba(0,0,0,0.4)] overflow-hidden">
//       <ul ref={sliderListRef} className="w-[9999%] h-full list-none left-0 m-0 p-0 relative transition-all duration-[750ms] ease-in-out">
//         <li className="w-[26.66vw] h-full float-left bg-[#1abc9c]"></li>
//         <li className="w-[26.66vw] h-full float-left bg-[#e74c3c]"></li>
//         <li className="w-[26.66vw] h-full float-left bg-[#27ae60]"></li>
//         <li className="w-[26.66vw] h-full float-left bg-[#e67e22]"></li>
//         <li className="w-[26.66vw] h-full float-left bg-[#8e44ad]"></li>
//         <li className="w-[26.66vw] h-full float-left bg-[#22a6b3]"></li>
//         <li className="w-[26.66vw] h-full float-left bg-[#30336b]"></li>
//         <li className="w-[26.66vw] h-full float-left bg-pink-300"></li>
//         <li className="w-[26.66vw] h-full float-left bg-[#eb4d4b]"></li>
//       </ul>
//       <a href="#" id="prev" className="absolute top-1/2 left-0 text-gray-400 text-2xl p-[5px_3px] bg-white text-center transform -translate-y-1/2 transition-all duration-150 ease-in border border-gray-300 rounded-[0_3px_3px_0] shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:text-gray-500">
//         <i className="fas fa-angle-left"></i>
//       </a>
//       <a href="#" id="next" className="absolute top-1/2 right-0 text-gray-400 text-2xl p-[5px_3px] bg-white text-center transform -translate-y-1/2 transition-all duration-150 ease-in border border-gray-300 rounded-[3px_0_0_3px] shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:text-gray-500">
//         <i className="fas fa-angle-right"></i>
//       </a>
//     </div>
//   );
// }

// export default Carousel;


// import React, { useEffect, useRef } from 'react';

// function Carousel() {
//   const arr = [
//     "https://mercury.akamaized.net/i/324b967d8a8c788adb862aaae380be36_286304_0.jpg",
//     "https://mercury.akamaized.net/i/7b4ed388a4d96f1ab9da1eb6a0d096fe_269807_0.jpg",
//     "https://mercury.akamaized.net/i/fc4a54c68dbff609f2e178c0ed1c0eb9_275176_0.jpg",
//     "https://mercury.akamaized.net/i/ada1a9b18729c3f8bb28d1076e5aada4_58415_0.jpg",
//     "https://mercury.akamaized.net/i/91544f70f0302ddeca232a2e9e098666_250935_0.jpg",
//     "https://mercury.akamaized.net/i/e36ec136a1f09a4a4f1dc3171819ec85_233062_0.jpg",
//     "https://mercury.akamaized.net/i/de37aadf1118f218b7a39283c13d278e_222071_0.jpg",
//     "https://mercury.akamaized.net/i/0bc1628efd2f8f0ccec5441b188e2ac1_271448_0.jpg"
//   ];

//   const sliderRef = useRef(null);
//   const sliderListRef = useRef(null);
//   const countRef = useRef(0);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const sliderList = sliderListRef.current;
//     const totalSlides = arr.length;
//     let sliderWidth = slider.offsetWidth;

//     const updateSliderWidth = () => {
//       sliderWidth = slider.offsetWidth;
//     };
//     window.addEventListener('resize', updateSliderWidth);

//     const goToSlide = (index) => {
//       sliderList.style.transform = `translateX(-${index * sliderWidth}px)`;
//       countRef.current = index;
//     };

//     const nextSlide = () => {
//       if (countRef.current < totalSlides - 1) {
//         goToSlide(countRef.current + 1);
//       } else {
//         goToSlide(0); // Loop back to the start
//       }
//     };

//     const prevSlide = () => {
//       if (countRef.current > 0) {
//         goToSlide(countRef.current - 1);
//       } else {
//         goToSlide(totalSlides - 1); // Loop to the last slide
//       }
//     };

//     document.getElementById('prev').addEventListener('click', prevSlide);
//     document.getElementById('next').addEventListener('click', nextSlide);

//     const autoSlide = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => {
//       window.removeEventListener('resize', updateSliderWidth);
//       clearInterval(autoSlide);
//     };
//   }, [arr.length]);

//   return (
//     <div ref={sliderRef} className="w-full  relative border border-gray-300 shadow-[0px_8px_10px_rgba(0,0,0,0.4)] overflow-hidden">
//       <ul ref={sliderListRef} className="flex transition-transform duration-[750ms] ease-in-out m-0 p-0 list-none">
//         {arr.map((image, index) => (
//           <li key={index} className="min-w-full h-full">
//             <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
//           </li>
//         ))}
//       </ul>
//       <a href="#" id="prev" className="absolute top-1/2 left-0 text-gray-400 text-2xl p-[5px_3px] bg-white text-center transform -translate-y-1/2 transition-all duration-150 ease-in border border-gray-300 rounded-[0_3px_3px_0] shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:text-gray-500">
//         <i className="fas fa-angle-left"></i>
//       </a>
//       <a href="#" id="next" className="absolute top-1/2 right-0 text-gray-400 text-2xl p-[5px_3px] bg-white text-center transform -translate-y-1/2 transition-all duration-150 ease-in border border-gray-300 rounded-[3px_0_0_3px] shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:text-gray-500">
//         <i className="fas fa-angle-right"></i>
//       </a>
//     </div>
//   );
// }

// export default Carousel;



// import React, { useEffect, useRef } from 'react';

// function Carousel() {
//   const arr = [
//     "https://mercury.akamaized.net/i/324b967d8a8c788adb862aaae380be36_286304_0.jpg",
//     "https://mercury.akamaized.net/i/7b4ed388a4d96f1ab9da1eb6a0d096fe_269807_0.jpg",
//     "https://mercury.akamaized.net/i/fc4a54c68dbff609f2e178c0ed1c0eb9_275176_0.jpg",
//     "https://mercury.akamaized.net/i/ada1a9b18729c3f8bb28d1076e5aada4_58415_0.jpg",
//     "https://mercury.akamaized.net/i/91544f70f0302ddeca232a2e9e098666_250935_0.jpg",
//     "https://mercury.akamaized.net/i/e36ec136a1f09a4a4f1dc3171819ec85_233062_0.jpg",
//     "https://mercury.akamaized.net/i/de37aadf1118f218b7a39283c13d278e_222071_0.jpg",
//     "https://mercury.akamaized.net/i/0bc1628efd2f8f0ccec5441b188e2ac1_271448_0.jpg"
//   ];

//   const sliderRef = useRef(null);
//   const sliderListRef = useRef(null);
//   const countRef = useRef(0);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const sliderList = sliderListRef.current;
//     const itemsPerSlide = 3;  // Number of arr to display per slide
//     const totalSlides = Math.ceil(arr.length / itemsPerSlide); // Total number of slides
//     let sliderWidth = slider.offsetWidth;

//     const updateSliderWidth = () => {
//       sliderWidth = slider.offsetWidth;
//     };
//     window.addEventListener('resize', updateSliderWidth);

//     const goToSlide = (index) => {
//       sliderList.style.transform = `translateX(-${index * sliderWidth}px)`;
//       countRef.current = index;
//     };

//     const nextSlide = () => {
//       if (countRef.current < totalSlides - 1) {
//         goToSlide(countRef.current + 1);
//       } else {
//         goToSlide(0); // Loop back to the start
//       }
//     };

//     const prevSlide = () => {
//       if (countRef.current > 0) {
//         goToSlide(countRef.current - 1);
//       } else {
//         goToSlide(totalSlides - 1); // Loop to the last slide
//       }
//     };

//     document.getElementById('prev').addEventListener('click', prevSlide);
//     document.getElementById('next').addEventListener('click', nextSlide);

//     const autoSlide = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => {
//       window.removeEventListener('resize', updateSliderWidth);
//       clearInterval(autoSlide);
//     };
//   }, [arr.length]);

//   return (
//     <div ref={sliderRef} className="w-full h-[200px] relative border border-gray-300 shadow-[0px_8px_10px_rgba(0,0,0,0.4)] overflow-hidden">
//       <ul ref={sliderListRef} className="flex transition-transform duration-[750ms] ease-in-out m-0 p-0 list-none">
//         {arr.map((image, index) => (
//           <li key={index} className="w-1/3 h-full flex-shrink-0">
//             <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
//           </li>
//         ))}
//       </ul>
//       <a href="#" id="prev" className="absolute top-1/2 left-0 text-gray-400 text-2xl p-[5px_3px] bg-white text-center transform -translate-y-1/2 transition-all duration-150 ease-in border border-gray-300 rounded-[0_3px_3px_0] shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:text-gray-500">
//         <i className="fas fa-angle-left"></i>
//       </a>
//       <a href="#" id="next" className="absolute top-1/2 right-0 text-gray-400 text-2xl p-[5px_3px] bg-white text-center transform -translate-y-1/2 transition-all duration-150 ease-in border border-gray-300 rounded-[3px_0_0_3px] shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:text-gray-500">
//         <i className="fas fa-angle-right"></i>
//       </a>
//     </div>
//   );
// }

// export default Carousel;




















// import React, { useEffect, useRef } from 'react';

// function Carousel({arr}) {
//   const sliderRef = useRef(null);
//   const sliderListRef = useRef(null);
//   const countRef = useRef(1);

//   const images = [
//     "https://mercury.akamaized.net/i/324b967d8a8c788adb862aaae380be36_286304_0.jpg",
//     "https://mercury.akamaized.net/i/7b4ed388a4d96f1ab9da1eb6a0d096fe_269807_0.jpg",
//     "https://mercury.akamaized.net/i/fc4a54c68dbff609f2e178c0ed1c0eb9_275176_0.jpg",
//     "https://mercury.akamaized.net/i/ada1a9b18729c3f8bb28d1076e5aada4_58415_0.jpg",
//     "https://mercury.akamaized.net/i/91544f70f0302ddeca232a2e9e098666_250935_0.jpg",
//     "https://mercury.akamaized.net/i/e36ec136a1f09a4a4f1dc3171819ec85_233062_0.jpg",
//     "https://mercury.akamaized.net/i/de37aadf1118f218b7a39283c13d278e_222071_0.jpg",
//     "https://mercury.akamaized.net/i/0bc1628efd2f8f0ccec5441b188e2ac1_271448_0.jpg"
//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const sliderList = sliderListRef.current;
//     const itemsPerSlide = 3;
// const totalItems = arr.length;
// let sliderWidth = slider.offsetWidth / itemsPerSlide;

// const updateSliderWidth = () => {
//   sliderWidth = slider.offsetWidth / itemsPerSlide;
//   sliderList.style.transition = 'none';
//   sliderList.style.left = `-${sliderWidth * countRef.current}px`;
// };
// window.addEventListener('resize', updateSliderWidth);

// const goToSlide = (index) => {
//   sliderList.style.transition = 'all 0.75s ease-in-out';
//   sliderList.style.left = `-${index * sliderWidth}px`;
// };

// const prevSlide = () => {
//   if (countRef.current === 1) {
//     countRef.current = totalItems;
//     sliderList.style.left = `-${sliderWidth * countRef.current}px`;
//     setTimeout(() => {
//       countRef.current--;
//       goToSlide(countRef.current);
//     }, 50);
//   } else {
//     countRef.current--;
//     goToSlide(countRef.current);
//   }
// };

// const nextSlide = () => {
//   if (countRef.current === totalItems) {
//     countRef.current = 1;
//     sliderList.style.left = `-${sliderWidth * countRef.current}px`;
//     setTimeout(() => {
//       countRef.current++;
//       goToSlide(countRef.current);
//     }, 50);
//   } else {
//     countRef.current++;
//     goToSlide(countRef.current);
//   }
// };

// document.getElementById('prev').addEventListener('click', prevSlide);
// document.getElementById('next').addEventListener('click', nextSlide);

// const autoSlide = setInterval(nextSlide, 4000);

// return () => {
//   window.removeEventListener('resize', updateSliderWidth);
//   clearInterval(autoSlide);
// };
// }, [arr]);

// return (
//   <div ref={sliderRef} className="w-full h-[300px] relative overflow-hidden">
//     <ul ref={sliderListRef} className="flex w-[calc(100% * ${totalItems + 6})] h-full list-none m-0 p-0 relative transition-all duration-[750ms] ease-in-out">
//       {/* Duplicate last set of arr for seamless looping */}
//       {arr.slice(-3).map((src, index) => (
//         <li key={`last-${index}`} className="w-1/3 flex-shrink-0 p-2">
//           <img src={src} alt="Last Slide Duplicate" className="w-full h-full object-contain rounded-lg" />
//         </li>
//       ))}

//       {/* Main arr */}
//       {arr.map((src, index) => (
//         <li key={index} className="w-1/3 flex-shrink-0 p-2">
//           <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-contain rounded-lg" />
//         </li>
//       ))}

//       {/* Duplicate first set of arr for seamless looping */}
//       {arr.slice(0, 3).map((src, index) => (
//         <li key={`first-${index}`} className="w-1/3 flex-shrink-0 p-2">
//           <img src={src} alt="First Slide Duplicate" className="w-full h-full object-contain rounded-lg" />
//         </li>
//       ))}
//     </ul>

//     <a href="#" id="prev" className="absolute top-1/2 left-0 text-gray-400 text-2xl p-3 bg-white text-center transform -translate-y-1/2 transition-all duration-150 ease-in border border-gray-300 rounded-r-lg shadow hover:text-gray-500">
//       <i className="fas fa-angle-left"></i>
//     </a>
//     <a href="#" id="next" className="absolute top-1/2 right-0 text-gray-400 text-2xl p-3 bg-white text-center transform -translate-y-1/2 transition-all duration-150 ease-in border border-gray-300 rounded-l-lg shadow hover:text-gray-500">
//       <i className="fas fa-angle-right"></i>
//     </a>
//   </div>
// );
// }

// export default Carousel;



import React from 'react';
import Slider from 'react-slick';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'white',
        border: '1px solid #ccc', // Thin gray border
        borderRadius: '0 50% 50% 0', // Rounded right border
        padding: '0.5rem',
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        fontSize: '1.5rem',
        color: 'gray',
        cursor: 'pointer',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)', // Subtle shadow
        transition: 'color 0.2s, box-shadow 0.2s', // Smooth hover effect
        zIndex: 1,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#333'; // Darker color on hover
        e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'gray';
        e.currentTarget.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.15)';
      }}
    >
      ❮
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'white',
        border: '1px solid #ccc', // Thin gray border
        borderRadius: '50% 0 0 50%', // Rounded left border
        padding: '0.5rem',
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        fontSize: '1.5rem',
        color: 'gray',
        cursor: 'pointer',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)', // Subtle shadow
        transition: 'color 0.2s, box-shadow 0.2s', // Smooth hover effect
        zIndex: 1,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#333'; // Darker color on hover
        e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'gray';
        e.currentTarget.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.15)';
      }}
    >
      ❯
    </button>
  );
};

function Carousel({ arr ,slide }) {
  const settings = {
    infinite: true,
    slidesToShow: slide,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
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
    <div className="carousel-container">
      <Slider {...settings}>
        {arr.map((src, index) => (
          <div key={index} className="p-2 outline-none border-none">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] object-contain rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;


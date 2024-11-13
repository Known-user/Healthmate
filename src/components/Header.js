// import React, { useState } from 'react';
// import Dropdown from './Dropdown';
// import { FiUpload, FiGift, FiShoppingCart, FiUser } from 'react-icons/fi';
// import { FaPills, FaHeartbeat, FaVials, FaSpa, FaHeart } from 'react-icons/fa';
// const Header = () => {
//   const [isLocationBoxOpen, setIsLocationBoxOpen] = useState(false);

//   const toggleLocationBox = () => {
//     setIsLocationBoxOpen(!isLocationBoxOpen);
//   };
//   return (
//     // <header className="bg-teal-500 text-white">
//     //   {/* Top Header: Logo, Search Bar, and User Options */}
//     //   <div className="container mx-auto px-6 py-3 flex items-center justify-between">
//     //     {/* Logo */}
//     //     <div className="flex items-center space-x-4">
//     //       <img src="/path-to-logo.png" alt="Netmeds" className="h-8" />
//     //     </div>

//     //     {/* Search Bar */}
//     //     <div className="relative flex-grow mx-4">
//     //     <div className="flex items-center bg-white rounded-lg overflow-hidden">
//     //       <button
//     //         onClick={toggleLocationBox}
//     //         className="flex items-center text-gray-700 px-4 py-2 focus:outline-none"
//     //       >
//     //         <span>Deliver to</span>
//     //         <span className="font-semibold mx-1">110002</span>
//     //         <svg
//     //           className="w-4 h-4 ml-1 text-gray-500"
//     //           fill="currentColor"
//     //           viewBox="0 0 20 20"
//     //         >
//     //           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//     //         </svg>
//     //       </button>
//     //       <input
//     //         type="text"
//     //         placeholder="Search for medicine & wellness products..."
//     //         className="flex-grow px-4 py-2 text-black focus:outline-none"
//     //       />
//     //     </div>
        
//     //     {/* Location Selection Box */}
//     //     {isLocationBoxOpen && (
//     //       <div className="absolute z-20 top-full mt-2 w-80 bg-white p-4 rounded shadow-lg">
//     //         <h3 className="text-gray-700 font-semibold">Where do you want the delivery?</h3>
//     //         <p className="text-gray-500 text-sm">Get access to your Addresses, Orders, and Wishlist</p>
//     //         <button className="bg-teal-500 text-white w-full py-2 rounded mt-2">
//     //           Sign in to see your location
//     //         </button>
//     //         <div className="mt-4">
//     //           <label className="text-gray-700 font-medium">Or Enter Pincode</label>
//     //           <input
//     //             type="text"
//     //             placeholder="Enter Pincode"
//     //             className="w-full border border-gray-300 px-3 py-2 mt-2 rounded"
//     //           />
//     //         </div>
//     //         <p className="text-pink-500 text-sm mt-2">Detect my location</p>
//     //       </div>
//     //     )}
//     //   </div>

//     //     {/* Icons Section */}
//     //     <div className="flex items-center space-x-6 text-xl">
//     //       <FiUpload className="hover:text-gray-300 cursor-pointer" title="Upload" />
//     //       <FiGift className="hover:text-gray-300 cursor-pointer" title="Offers" />
//     //       <FiShoppingCart className="hover:text-gray-300 cursor-pointer" title="Cart" />
//     //       <FiUser className="hover:text-gray-300 cursor-pointer" title="Sign in / Sign up" />
//     //     </div>
//     //   </div>

//     //   {/* Bottom Header: Navigation Links */}
//     //   <div className="bg-teal-600">
//     //     <nav className="container mx-auto px-6 flex justify-around space-x-8">
//     //       <Dropdown title="Medicine" Icon={FaPills} items={medicineItems} />
//     //       <Dropdown title="Wellness" Icon={FaHeartbeat} items={wellnessItems} />
//     //       <Dropdown title="Lab Tests" Icon={FaVials} items={labTestItems} />
//     //       <Dropdown title="Beauty" Icon={FaSpa} items={beautyItems} />
//     //       <Dropdown title="Health Corner" Icon={FaHeart} items={healthCornerItems} />
//     //     </nav>
//     //   </div>
//     // </header>
    
//     <header className="bg-teal-500 text-white">
//   {/* Top Header: Logo, Search Bar, and User Options */}
//   <div className="container mx-auto px-6 py-3 flex items-center justify-center gap-6">
//     {/* Logo */}
//     <div className="flex items-center space-x-4">
//       <img src="/path-to-logo.png" alt="Netmeds" className="h-8" />
//     </div>

//     {/* Search Bar */}
//     <div className="relative mx-4 w-[650px]">
//       <div className="flex items-center bg-white rounded-lg overflow-hidden">
//         <button
//           onClick={toggleLocationBox}
//           className="flex items-center text-gray-700 px-4 py-2 focus:outline-none"
//         >
//           <span>Deliver to</span>
//           <span className="font-semibold mx-1">110002</span>
//           <svg
//             className="w-4 h-4 ml-1 text-gray-500"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//         <input
//           type="text"
//           placeholder="Search for medicine & wellness products..."
//           className="flex-grow px-4 py-2 text-black focus:outline-none"
//         />
//       </div>

//       {/* Location Selection Box */}
//       {isLocationBoxOpen && (
//         <div className="absolute z-20 top-full mt-2 w-80 bg-white p-4 rounded shadow-lg">
//           <h3 className="text-gray-700 font-semibold">Where do you want the delivery?</h3>
//           <p className="text-gray-500 text-sm">Get access to your Addresses, Orders, and Wishlist</p>
//           <button className="bg-teal-500 text-white w-full py-2 rounded mt-2">
//             Sign in to see your location
//           </button>
//           <div className="mt-4">
//             <label className="text-gray-700 font-medium">Or Enter Pincode</label>
//             <input
//               type="text"
//               placeholder="Enter Pincode"
//               className="w-full border border-gray-300 px-3 py-2 mt-2 rounded"
//             />
//           </div>
//           <p className="text-pink-500 text-sm mt-2">Detect my location</p>
//         </div>
//       )}
//     </div>

//     {/* Icons Section */}
//     <div className="flex items-center space-x-6 text-xl">
//       <div className="flex items-center hover:text-gray-300 cursor-pointer">
//         <FiUpload />
//         <span className="ml-2 text-sm">Upload</span>
//       </div>
//       <div className="flex items-center hover:text-gray-300 cursor-pointer">
//         <FiGift />
//         <span className="ml-2 text-sm">Offers</span>
//       </div>
//       <div className="flex items-center hover:text-gray-300 cursor-pointer">
//         <FiShoppingCart />
//         <span className="ml-2 text-sm">Cart</span>
//       </div>
//       <div className="flex items-center hover:text-gray-300 cursor-pointer">
//         <FiUser />
//         <span className="ml-2 text-sm">Sign in / Sign up</span>
//       </div>
//     </div>
//   </div>

//   {/* Bottom Header: Navigation Links */}
//   <div className="bg-teal-600">
//     <nav className="container mx-auto px-6 flex justify-around space-x-8">
//       <Dropdown title="Medicine" Icon={FaPills} items={medicineItems} />
//       <Dropdown title="Wellness" Icon={FaHeartbeat} items={wellnessItems} />
//       <Dropdown title="Lab Tests" Icon={FaVials} items={labTestItems} />
//       <Dropdown title="Beauty" Icon={FaSpa} items={beautyItems} />
//       <Dropdown title="Health Corner" Icon={FaHeart} items={healthCornerItems} />
//     </nav>
//   </div>
// </header>

//   );
// };

// // Sample dropdown items
// const medicineItems = [
//   { name: 'Ayush', subItems: ['Ayurvedic', 'Unani', 'Homeopathy', 'Siddha'] },
//   { name: 'Covid Essentials', subItems: ['Oxygen Can', 'Masks', 'Sanitizers'] },
//   { name: 'Devices', subItems: ['Breathe Easy', 'Surgical Accessories'] },
// ];

// const wellnessItems = [
//   { name: 'Diabetes Support', subItems: ['Glucometers', 'Sugar Substitutes'] },
//   { name: 'Fitness', subItems: ['Weight Management', 'Sports Supplements'] },
// ];

// const labTestItems = [
//   { name: 'Blood Test', subItems: ['Complete Blood Count', 'Lipid Profile'] },
// ];

// const beautyItems = [
//   { name: 'Skin Care', subItems: ['Moisturizers', 'Cleansers'] },
// ];

// const healthCornerItems = [
//   { name: 'Health Articles', subItems: ['Wellness', 'Treatments'] },
// ];

// export default Header;











// import React from 'react'

// function Header() {
//   return (
//     <>
//       <div className="w-full h-screen bg-[url('https://i.ibb.co/Pmy0dmn/bg.png')] bg-cover relative">
//   <section className="absolute top-[15vh] m-8 w-[40%]">
//     <em>WELCOME TO NAME_HERE</em>
//     <h1 className="text-[3em]">Take the world's best quality Treatment</h1>
//     <h4 className="leading-[1.4em] tracking-[0.08em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
//     <a href="#" className="btn1">Learn More</a>
//   </section>
// </div>

//     </>
//   )
// }

// export default Header


// Header.js
import poster from "../Images/logo4.jpeg";

const Header = () => {
  return (
    <header
      className="discBox relative h-screen w-full bg-cover bg-fixed bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/Pmy0dmn/bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 opacity-40 z-0"></div>
      
      {/* Main Content */}
      <div className="absolute top-1/2 left-24 transform -translate-y-1/2 text-white z-10 w-4/5 max-w-md">
        <h1 className="text-6xl font-bold capitalize tracking-wide leading-tight animate-fade-in-down">
          Welcome to HealthMate
        </h1>
        <h4 className="mt-4 text-2xl font-light italic animate-fade-in-up">
          Your Trusted Online Pharmacy
        </h4>
        <p className="mt-2 text-lg font-medium opacity-90">
          Discover a wide range of health and wellness products at your fingertips.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a href="#about" className="inline-block px-8 py-3 border border-white text-white uppercase font-semibold rounded-full transition duration-500 hover:bg-white hover:text-blue-600 shadow-lg transform hover:scale-105">
            Learn More
          </a>
          <a href="#products" className="inline-block px-8 py-3 bg-white text-blue-600 uppercase font-semibold rounded-full transition duration-500 hover:bg-blue-600 hover:text-white shadow-lg transform hover:scale-105">
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;






// import React, { useState } from 'react';

// function Header() {
//   const [isLocationBoxOpen, setIsLocationBoxOpen] = useState(false);

//   const toggleLocationBox = () => {
//     setIsLocationBoxOpen(!isLocationBoxOpen);
//   };

//   return (
//     <header className="bg-teal-500 p-4 flex justify-between items-center">
//       {/* Logo */}
//       <img src="https://your-logo-url" alt="Logo" className="h-8" />

//       {/* Deliver to & Search Bar */}
//       <div className="relative flex-grow mx-4">
//         <div className="flex items-center bg-white rounded-lg overflow-hidden">
//           <button
//             onClick={toggleLocationBox}
//             className="flex items-center text-gray-700 px-4 py-2 focus:outline-none"
//           >
//             <span>Deliver to</span>
//             <span className="font-semibold mx-1">110002</span>
//             <svg
//               className="w-4 h-4 ml-1 text-gray-500"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>
//           <input
//             type="text"
//             placeholder="Search for medicine & wellness products..."
//             className="flex-grow px-4 py-2 focus:outline-none"
//           />
//         </div>
        
//         {/* Location Selection Box */}
//         {isLocationBoxOpen && (
//           <div className="absolute top-full mt-2 w-80 bg-white p-4 rounded shadow-lg">
//             <h3 className="text-gray-700 font-semibold">Where do you want the delivery?</h3>
//             <p className="text-gray-500 text-sm">Get access to your Addresses, Orders, and Wishlist</p>
//             <button className="bg-teal-500 text-white w-full py-2 rounded mt-2">
//               Sign in to see your location
//             </button>
//             <div className="mt-4">
//               <label className="text-gray-700 font-medium">Or Enter Pincode</label>
//               <input
//                 type="text"
//                 placeholder="Enter Pincode"
//                 className="w-full border border-gray-300 px-3 py-2 mt-2 rounded"
//               />
//             </div>
//             <p className="text-pink-500 text-sm mt-2">Detect my location</p>
//           </div>
//         )}
//       </div>

//       {/* Icons */}
//       <div className="flex items-center space-x-4">
//         <button className="text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zM4 4L20 20M20 4L4 20" />
//           </svg>
//         </button>
//         <button className="text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c3.866 0 7 3.134 7 7H5c0-3.866 3.134-7 7-7z" />
//           </svg>
//         </button>
//         <button className="text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z" />
//           </svg>
//         </button>
//         <button className="text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m4-4v8M3 12l7-8 7 8-7 8-7-8z" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;

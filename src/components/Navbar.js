
// import React, { useState } from 'react';
// import Dropdown from './Dropdown';
// import { FiUpload, FiGift, FiShoppingCart, FiUser } from 'react-icons/fi';
// import { FaPills, FaHeartbeat, FaVials, FaSpa, FaHeart } from 'react-icons/fa';
// const Navbar = () => {
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

// export default Navbar;



import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const topnavRef = useRef(null);
  const headerRef = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState(isHomePage ? 'w-[80%]' : 'w-full');

  const toggleNavBar = () => {
    setIsResponsive(!isResponsive);
  };

  const scrollFunction = () => {
    if (isHomePage && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {
      setNavbarWidth('w-full');
      headerRef.current.style.position = "fixed";
      headerRef.current.style.top = "0%";
    } else if (isHomePage) {
      setNavbarWidth('w-[80%]');
      headerRef.current.style.position = "fixed";
      headerRef.current.style.top = "2rem";
    }
  };

  useEffect(() => {
    if (isHomePage) {
      window.onscroll = scrollFunction;
    } else {
      setNavbarWidth('w-full'); // Navbar stays full width on non-home pages
      headerRef.current.style.position = "fixed";
      headerRef.current.style.top = "0";
      window.onscroll = null; // Disable scroll listener on non-home pages
    }

    return () => {
      window.onscroll = null; // Cleanup on component unmount
    };
  }, [isHomePage]);

  const [activeItem, setActiveItem] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  const handleSetActive = (item) => {
    setActiveItem(item);
  };

  const handleDropdownEnter = () => setIsDropdownOpen(true);
  const handleDropdownLeave = () => setIsDropdownOpen(false);
  const handleSubDropdownEnter = () => setIsSubDropdownOpen(true);
  const handleSubDropdownLeave = () => setIsSubDropdownOpen(false);

  return (
    <>
      <div className="scroll-smooth">
        <header ref={headerRef} className="fixed top-8 w-full z-[9999] transition-all duration-500">
          <nav
            ref={topnavRef}
            className={`topnav bg-white ${navbarWidth} mx-auto h-20 shadow-lg flex justify-between items-center transition-all duration-500`}
          >
            <div className="flex items-center justify-between w-full px-12 py-4 transition-all duration-1000">
              <h1 className="logo mr-auto">
                <Link to="/" className="text-2xl font-bold text-gray-800">HealthMate</Link>
              </h1>

              <nav className="hidden lg:flex space-x-6">
                <ul className="flex space-x-6 items-center">
                  {['home', 'about', 'services', 'Woman Care', 'Baby Care'].map((item) => (
                    <li className="flex items-center" key={item}>
                      <Link
                        to={`/${item}`}
                        onClick={() => handleSetActive(item)}
                        className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${activeItem === item ? 'text-blue-500 border-blue-500' : 'text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500'}`}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </li>
                  ))}

                  {/* Main Dropdown */}
                  <li
                    className="relative group flex items-center"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <a
                      href="#"
                      className={`flex items-center py-2 border-b-2 transition duration-300 ${isDropdownOpen ? 'text-blue-500 border-blue-500' : 'text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500'}`}
                    >
                      <span>Personal Care</span>
                      <i className="fas fa-chevron-down ml-1"></i>
                    </a>
                    <ul
                      className={`absolute left-0 top-full bg-white shadow-lg rounded-md transition-all duration-300 transform ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} p-4 space-y-2 z-30`}
                      style={{ minWidth: '150px', borderRadius: '0.5rem' }}
                    >
                      <li>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 transition-colors">
                          Skin Care
                        </a>
                      </li>
                      {/* Sub Dropdown */}
                      <li
                        className="relative group flex items-center"
                        onMouseEnter={handleSubDropdownEnter}
                        onMouseLeave={handleSubDropdownLeave}
                      >
                        <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
                          <span>Health Care</span>
                          <i className="fas fa-chevron-right ml-1"></i>
                        </a>
                        <ul
                          className={`absolute left-full top-0 bg-white shadow-lg rounded-lg transition-all duration-300 transform ${isSubDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} p-4 space-y-2 z-30`}
                          style={{ minWidth: '160px' }}
                        >
                          <li>
                            <a href="#" className="block text-gray-700 hover:text-blue-500 transition-colors">
                              Sub Drop Down 1
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block text-gray-700 hover:text-blue-500 transition-colors">
                              Sub Drop Down 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 transition-colors">
                          Oral Care
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 transition-colors">
                          Sexual Wellness
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 transition-colors">
                          Elderly Care
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="flex items-center">
                    <a
                      href="#contact"
                      onClick={() => handleSetActive('contact')}
                      className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${activeItem === 'contact' ? 'text-blue-500 border-blue-500' : 'text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500'}`}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="lg:hidden">
                <i className="bi bi-list mobile-nav-toggle text-3xl cursor-pointer"></i>
              </div>

              <a href="#appointment" className="ml-6 px-4 py-1 bg-blue-500 text-white rounded-3xl hover:bg-blue-600">
                <span className="hidden md:inline">Login</span>
              </a>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};


export default Navbar;










{/* <ul className="hidden absolute left-full top-0 group-hover:block bg-white shadow-lg p-2 space-y-2">
                <li><a href="#" className="block text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Deep Drop Down 1</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Deep Drop Down 2</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Deep Drop Down 3</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Deep Drop Down 4</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500">Deep Drop Down 5</a></li>
              </ul> */}




{/* <section>
      <div class="flex absolute z-20 w-full top-0 justify-between p-4 bg-[rgba(0,_52,_82,.15)]">
        <div class="flex items-center ">
          <h1 class="text-3xl font-bold">DNK</h1>
          <nav class="ml-8">
            <ul class="flex space-x-4">
              <li>
                <a href="#" class="text-white hover:underline">
                  Everything
                </a>
              </li>
              <li>
                <a href="#" class="text-white hover:underline">
                  Women
                </a>
              </li>
              <li>
                <a href="#" class="text-white hover:underline">
                  Men
                </a>
              </li>
              <li>
                <a href="#" class="text-white hover:underline">
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:underline">
            About
          </a>
          <a href="#" class="text-white hover:underline">
            Contact Us
          </a>
          <span class="text-white">Cart</span>
        </div>
      </div>
     
      </section> */}




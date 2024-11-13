// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const isHomePage = location.pathname === "/" || location.pathname === "/home";
//   const topnavRef = useRef(null);
//   const headerRef = useRef(null);
//   const navigate = useNavigate(); 

//   const [isResponsive, setIsResponsive] = useState(false);
//   const [navbarWidth, setNavbarWidth] = useState(
//     isHomePage ? "w-[80%]" : "w-full"
//   );
//   const [searchQuery, setSearchQuery] = useState("");
  

//   const toggleNavBar = () => setIsResponsive(!isResponsive);

//   const scrollFunction = () => {
//     if (
//       isHomePage &&
//       (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
//     ) {
//       setNavbarWidth("w-full");
//       headerRef.current.style.position = "fixed";
//       headerRef.current.style.top = "0%";
//     } else if (isHomePage) {
//       setNavbarWidth("w-[80%]");
//       headerRef.current.style.position = "fixed";
//       headerRef.current.style.top = "2rem";
//     }
//   };

//   const handleSearchChange = (e) => setSearchQuery(e.target.value);


//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
    
//     // Store the search query in localStorage
//     localStorage.setItem('searchQuery', searchQuery);
  
//     // Navigate to /description
//     navigate('/search');
//   };

//   useEffect(() => {
//     if (isHomePage) {
//       window.onscroll = scrollFunction;
//     } else {
//       setNavbarWidth("w-full");
//       headerRef.current.style.position = "fixed";
//       headerRef.current.style.top = "0";
//       window.onscroll = null;
//     }
//     return () => {
//       window.onscroll = null;
//     };
//   }, [isHomePage]);

//   const [activeItem, setActiveItem] = useState("home");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

//   const handleSetActive = (item) => setActiveItem(item);
//   const handleDropdownEnter = () => setIsDropdownOpen(true);
//   const handleDropdownLeave = () => setIsDropdownOpen(false);
//   const handleSubDropdownEnter = () => setIsSubDropdownOpen(true);
//   const handleSubDropdownLeave = () => setIsSubDropdownOpen(false);

//   return (
//     <>
//       <div className="scroll-smooth">
//         <header
//           ref={headerRef}
//           className="fixed top-8 w-full z-10 transition-all duration-500"
//         >
//           <nav
//             ref={topnavRef}
//             className={`topnav bg-white ${navbarWidth} mx-auto h-20 shadow-lg flex justify-between items-center transition-all duration-500`}
//           >
//             <div className="flex items-center justify-between w-full px-12 py-4 transition-all duration-1000">
//               <h1 className="logo mr-4">
//                 <Link to="/" className="text-2xl font-bold text-gray-800">
//                   HealthMate
//                 </Link>
//               </h1>

//               <form
//                 onSubmit={handleSearchSubmit}
//                 className="mr-auto flex items-center bg-gray-100 rounded-full px-4 py-2"
//               >
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                   placeholder="Search for products..."
//                   className="bg-transparent outline-none text-gray-700 placeholder-gray-500 flex-grow"
//                 />
//                 <button
//                   type="submit"
//                   className="text-blue-500 hover:text-blue-600 px-2"
//                 >
//                   <i className="fas fa-search"></i>
//                 </button>
//               </form>

//               <nav className="hidden lg:flex space-x-6">
//   <ul className="flex space-x-6 items-center">
//     {["home", "cart", ].map((item) => (
//       <li className="flex items-center" key={item}>
//         <Link
//           to={`/${item === "home" ? "" : item}`}
//           onClick={() => handleSetActive(item)}
//           className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${
//             activeItem === item
//               ? "text-blue-500 border-blue-500"
//               : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500"
//           }`}
//         >
//           {item.charAt(0).toUpperCase() + item.slice(1)}
//         </Link>
//       </li>
//     ))}

// <li className="flex items-center">
//                     <a
//                       href="#about"
//                       onClick={() => handleSetActive("about")}
//                       className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${
//                         activeItem === "about"
//                           ? "text-blue-500 border-blue-500"
//                           : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500"
//                       }`}
//                     >
//                       About
//                     </a>
//                   </li>
//                   <li className="flex items-center">
//                     <a
//                       href="#category"
//                       onClick={() => handleSetActive("category")}
//                       className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${
//                         activeItem === "category"
//                           ? "text-blue-500 border-blue-500"
//                           : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500"
//                       }`}
//                     >
//                       Category
//                     </a>
//                   </li>
//     <li className="flex items-center">
//       <Link
//         to="/adminlogin"
//         onClick={() => handleSetActive("admin")}
//         className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${
//           activeItem === "admin"
//             ? "text-blue-500 border-blue-500"
//             : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500"
//         }`}
//       >
//         Admin
//       </Link>
//     </li>
//   </ul>
// </nav>


//               <div className="lg:hidden">
//                 <i className="bi bi-list mobile-nav-toggle text-3xl cursor-pointer"></i>
//               </div>

//               <a
//                 href="/login"
//                 className="ml-6 px-4 py-1 bg-blue-500 text-white rounded-3xl hover:bg-blue-600"
//               >
//                 <span className="hidden md:inline">Login</span>
//               </a>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// };

// export default Navbar;



import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const topnavRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate(); 

  const { isLoggedIn } = useSelector((state) => state.first);
  const [isResponsive, setIsResponsive] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState(
    isHomePage ? "w-[80%]" : "w-full"
  );
  const [searchQuery, setSearchQuery] = useState("");
  

  const toggleNavBar = () => setIsResponsive(!isResponsive);

  const scrollFunction = () => {
    if (
      isHomePage &&
      (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    ) {
      setNavbarWidth("w-full");
      headerRef.current.style.position = "fixed";
      headerRef.current.style.top = "0%";
    } else if (isHomePage) {
      setNavbarWidth("w-[80%]");
      headerRef.current.style.position = "fixed";
      headerRef.current.style.top = "2rem";
    }
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    // Store the search query in localStorage
    localStorage.setItem('searchQuery', searchQuery);
  
    // Navigate to /search
    navigate('/search');
  };

  useEffect(() => {
    if (isHomePage) {
      window.onscroll = scrollFunction;
    } else {
      setNavbarWidth("w-full");
      headerRef.current.style.position = "fixed";
      headerRef.current.style.top = "0";
      window.onscroll = null;
    }
    return () => {
      window.onscroll = null;
    };
  }, [isHomePage]);

  const [activeItem, setActiveItem] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  const handleSetActive = (item) => setActiveItem(item);
  const handleDropdownEnter = () => setIsDropdownOpen(true);
  const handleDropdownLeave = () => setIsDropdownOpen(false);
  const handleSubDropdownEnter = () => setIsSubDropdownOpen(true);
  const handleSubDropdownLeave = () => setIsSubDropdownOpen(false);

  const handleSectionClick = (section) => {
    if (isHomePage) {
      navigate(`#${section}`);
    }
  };

  return (
    <>
      <div className="scroll-smooth">
        <header
          ref={headerRef}
          className="fixed top-8 w-full z-10 transition-all duration-500"
        >
          <nav
            ref={topnavRef}
            className={`topnav bg-white ${navbarWidth} mx-auto h-20 shadow-lg flex justify-between items-center transition-all duration-500`}
          >
            <div className="flex items-center justify-between w-full px-12 py-4 transition-all duration-1000">
              <h1 className="logo mr-4">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                  HealthMate
                </Link>
              </h1>

              <form
                onSubmit={handleSearchSubmit}
                className="mr-auto flex items-center bg-gray-100 rounded-full px-4 py-2"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for products..."
                  className="bg-transparent outline-none text-gray-700 placeholder-gray-500 flex-grow"
                />
                <button
                  type="submit"
                  className="text-blue-500 hover:text-blue-600 px-2"
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>

              <nav className="hidden lg:flex space-x-6">
                <ul className="flex space-x-6 items-center">
                  {["home", "cart"].map((item) => (
                    <li className="flex items-center" key={item}>
                      <Link
                        to={`/${item === "home" ? "" : item}`}
                        onClick={() => handleSetActive(item)}
                        className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${
                          activeItem === item
                            ? "text-blue-500 border-blue-500"
                            : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500"
                        }`}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </li>
                  ))}
                  {isHomePage && (
                    <>
                      <li className="flex items-center">
                        <a
                          href="#about"
                          onClick={() => handleSectionClick("about")}
                          className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${
                            activeItem === "about"
                              ? "text-blue-500 border-blue-500"
                              : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500"
                          }`}
                        >
                          About
                        </a>
                      </li>
                      <li className="flex items-center">
                        <a
                          href="#category"
                          onClick={() => handleSectionClick("category")}
                          className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${
                            activeItem === "category"
                              ? "text-blue-500 border-blue-500"
                              : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500"
                          }`}
                        >
                          Category
                        </a>
                      </li>
                    </>
                  )}
                  <li className="flex items-center">
                    <Link
                      to="/adminlogin"
                      onClick={() => handleSetActive("admin")}
                      className={`nav-link scrollto py-2 border-b-2 transition duration-300 ${
                        activeItem === "admin"
                          ? "text-blue-500 border-blue-500"
                          : "text-gray-700 border-transparent hover:text-blue-500 hover:border-blue-500"
                      }`}
                    >
                      Admin
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="lg:hidden">
                <i className="bi bi-list mobile-nav-toggle text-3xl cursor-pointer"></i>
              </div>
{!isLoggedIn &&

              <a
                href="/login"
                className="ml-6 px-4 py-1 bg-blue-500 text-white rounded-3xl hover:bg-blue-600"
              >
                <span className="hidden md:inline">Login</span>
              </a>
}
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;

// import React, { useState } from 'react';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#020410]">
//       <div className="fixed inset-0 bg-cover bg-center filter blur-[10px]" style={{ backgroundImage: "url('https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg')" }}></div>
//       <div className="relative w-[75%] h-[550px] bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg')" }}>
//         <div className="absolute inset-0 flex">
//           <div className="w-1/2 p-10 flex flex-col justify-between text-[#e4e4e4]">
//             <h2 className="text-3xl"><i className="bx bxl-firefox"></i> Dev Tech</h2>
//             <div>
//               <h2 className="text-4xl leading-tight">Welcome! <br /><span className="text-2xl">To Our New Website.</span></h2>
//               <p className="text-lg my-5">We're delighted to have you here. If you need any assistance, feel free to reach out!</p>
//             </div>
//             <div className="flex space-x-3">
//               <a href="#"><i className="bx bxl-facebook-circle text-xl transition-transform transform hover:scale-110"></i></a>
//               <a href="#"><i className="bx bxl-instagram-alt text-xl transition-transform transform hover:scale-110"></i></a>
//               <a href="#"><i className="bx bxl-linkedin-square text-xl transition-transform transform hover:scale-110"></i></a>
//               <a href="#"><i className="bx bxl-dribbble text-xl transition-transform transform hover:scale-110"></i></a>
//             </div>
//           </div>
//           <div className="w-1/2 relative flex justify-center items-center bg-transparent backdrop-blur-lg rounded-r-lg">
//             <div className="w-full max-w-sm px-6">
//               {isLogin ? (
//                 <form action="#" className="space-y-6">
//                   <h2 className="text-3xl text-center text-[#e4e4e4]">Login</h2>
//                   <div className="relative border-b-2 border-[#e4e4e4] py-2">
//                     <input type="text" required className="w-full bg-transparent outline-none text-[#e4e4e4] placeholder-transparent" />
//                     <label className="absolute top-0 text-[#e4e4e4] transform -translate-y-1/2 pointer-events-none transition-all duration-200">Email</label>
//                     <span className="absolute right-0 top-3 text-[#e4e4e4]"><i className="bx bxs-envelope"></i></span>
//                   </div>
//                   <div className="relative border-b-2 border-[#e4e4e4] py-2">
//                     <input type="password" required className="w-full bg-transparent outline-none text-[#e4e4e4] placeholder-transparent" />
//                     <label className="absolute top-0 text-[#e4e4e4] transform -translate-y-1/2 pointer-events-none transition-all duration-200">Password</label>
//                     <span className="absolute right-0 top-3 text-[#e4e4e4]"><i className="bx bxs-lock"></i></span>
//                   </div>
//                   <div className="flex items-center justify-between text-sm text-[#e4e4e4]">
//                     <label>
//                       <input type="checkbox" className="accent-[#e4e4e4] mr-2" />Remember me
//                     </label>
//                     <a href="#" className="hover:underline">Forgot Password?</a>
//                   </div>
//                   <button type="submit" className="w-full py-3 bg-[#27ceac] rounded-lg text-[#e4e4e4] font-semibold shadow-md">Login</button>
//                   <div className="text-center text-sm mt-6">
//                     <p>Don't have an account?<br />
//                       <a href="#" onClick={() => setIsLogin(false)} className="text-[#e4e4e4] hover:underline">Register</a>
//                     </p>
//                   </div>
//                 </form>
//               ) : (
//                 <form action="#" className="space-y-6">
//                   <h2 className="text-3xl text-center text-[#e4e4e4]">Sign Up</h2>
//                   <div className="relative border-b-2 border-[#e4e4e4] py-2">
//                     <input type="text" required className="w-full bg-transparent outline-none text-[#e4e4e4] placeholder-transparent" />
//                     <label className="absolute top-0 text-[#e4e4e4] transform -translate-y-1/2 pointer-events-none transition-all duration-200">Name</label>
//                     <span className="absolute right-0 top-3 text-[#e4e4e4]"><i className="bx bxs-user"></i></span>
//                   </div>
//                   <div className="relative border-b-2 border-[#e4e4e4] py-2">
//                     <input type="text" required className="w-full bg-transparent outline-none text-[#e4e4e4] placeholder-transparent" />
//                     <label className="absolute top-0 text-[#e4e4e4] transform -translate-y-1/2 pointer-events-none transition-all duration-200">Email</label>
//                     <span className="absolute right-0 top-3 text-[#e4e4e4]"><i className="bx bxs-envelope"></i></span>
//                   </div>
//                   <div className="relative border-b-2 border-[#e4e4e4] py-2">
//                     <input type="password" required className="w-full bg-transparent outline-none text-[#e4e4e4] placeholder-transparent" />
//                     <label className="absolute top-0 text-[#e4e4e4] transform -translate-y-1/2 pointer-events-none transition-all duration-200">Password</label>
//                     <span className="absolute right-0 top-3 text-[#e4e4e4]"><i className="bx bxs-lock"></i></span>
//                   </div>
//                   <div className="flex items-center text-sm text-[#e4e4e4]">
//                     <label>
//                       <input type="checkbox" className="accent-[#e4e4e4] mr-2" />I agree to the terms & conditions
//                     </label>
//                   </div>
//                   <button type="submit" className="w-full py-3 bg-[#27ceac] rounded-lg text-[#e4e4e4] font-semibold shadow-md">Sign Up</button>
//                   <div className="text-center text-sm mt-6">
//                     <p>Already have an account?<br />
//                       <a href="#" onClick={() => setIsLogin(true)} className="text-[#e4e4e4] hover:underline">Login</a>
//                     </p>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;







// import React, { useState } from "react";
// import "boxicons";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="bg-[#020410] min-h-screen flex items-center justify-center">
//       <div
//         className="absolute inset-0 bg-cover bg-center blur-[10px]"
//         style={{
//           backgroundImage:
//             "url('https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg')",
//         }}
//       ></div>
//       <div className="relative w-3/4 h-[550px] bg-cover bg-center rounded-lg mt-6 overflow-hidden"
//            style={{
//             backgroundImage:
//               "url('https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg')",
//           }}>
//         <div className="absolute top-0 left-0 w-1/2 h-full bg-transparent p-20 text-[#e4e4e4] flex flex-col justify-between">
//           <h2 className="text-3xl">
//             <i className="bx bxl-firefox"></i> Dev Tech
//           </h2>
//           <div>
//             <h2 className="text-4xl leading-none">
//               Welcome! <br />
//               <span className="text-2xl">To Our New Website.</span>
//             </h2>
//             <p className="text-base my-5">
//               We're delighted to have you here. If you need any assistance,
//               feel free to reach out!
//             </p>
//             <div className="flex space-x-3">
//               <a href="#" className="text-[#e4e4e4] hover:scale-110 duration-300">
//                 <i className="bx bxl-facebook-circle text-2xl"></i>
//               </a>
//               <a href="#" className="text-[#e4e4e4] hover:scale-110 duration-300">
//                 <i className="bx bxl-instagram-alt text-2xl"></i>
//               </a>
//               <a href="#" className="text-[#e4e4e4] hover:scale-110 duration-300">
//                 <i className="bx bxl-linkedin-square text-2xl"></i>
//               </a>
//               <a href="#" className="text-[#e4e4e4] hover:scale-110 duration-300">
//                 <i className="bx bxl-dribbble text-2xl"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="absolute top-0 right-0 w-[calc(100%-60%)] h-full backdrop-blur-xl bg-transparent border-l border-[#e4e4e4] flex items-center justify-center">
//           <div
//             className={`form-box ${isLogin ? "login" : "register"} transition-transform duration-500`}
//           >
//             {isLogin ? (
//               <form action="#" className="text-[#e4e4e4]">
//                 <h2 className="text-2xl text-center">Login</h2>
//                 <div className="input-box relative w-[340px] h-12 border-b-2 border-[#e4e4e4] my-8">
//                   <span className="icon absolute top-3 right-0 text-xl">
//                     <i className="bx bxs-envelope"></i>
//                   </span>
//                   <input
//                     type="text"
//                     required
//                     className="w-full h-full bg-transparent text-base text-[#e4e4e4] focus:outline-none pr-7"
//                   />
//                   <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base font-medium transition-all">
//                     Email
//                   </label>
//                 </div>

//                 <div className="input-box relative w-[340px] h-12 border-b-2 border-[#e4e4e4] my-8">
//                   <span className="icon absolute top-3 right-0 text-xl">
//                     <i className="bx bxs-lock"></i>
//                   </span>
//                   <input
//                     type="password"
//                     required
//                     className="w-full h-full bg-transparent text-base text-[#e4e4e4] focus:outline-none pr-7"
//                   />
//                   <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base font-medium transition-all">
//                     Password
//                   </label>
//                 </div>

//                 <div className="flex justify-between items-center text-sm font-medium mb-4">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="accent-[#e4e4e4] mr-1" />
//                     Remember me
//                   </label>
//                   <a href="#" className="hover:underline">
//                     Forgot Password?
//                   </a>
//                 </div>

//                 <button type="submit" className="btn w-full h-11 bg-[#27ceac] rounded-md text-[#e4e4e4] font-semibold shadow-lg mb-6">
//                   Login
//                 </button>

//                 <div className="text-center text-sm font-medium">
//                   <p>
//                     Don't have an account?{" "}
//                     <span
//                       onClick={toggleForm}
//                       className="cursor-pointer text-lg hover:underline"
//                     >
//                       Register
//                     </span>
//                   </p>
//                 </div>
//               </form>
//             ) : (
//               <form action="#" className="text-[#e4e4e4]">
//                 <h2 className="text-2xl text-center">Sign Up</h2>
//                 <div className="input-box relative w-[340px] h-12 border-b-2 border-[#e4e4e4] my-8">
//                   <span className="icon absolute top-3 right-0 text-xl">
//                     <i className="bx bxs-user"></i>
//                   </span>
//                   <input
//                     type="text"
//                     required
//                     className="w-full h-full bg-transparent text-base text-[#e4e4e4] focus:outline-none pr-7"
//                   />
//                   <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base font-medium transition-all">
//                     Name
//                   </label>
//                 </div>

//                 <div className="input-box relative w-[340px] h-12 border-b-2 border-[#e4e4e4] my-8">
//                   <span className="icon absolute top-3 right-0 text-xl">
//                     <i className="bx bxs-envelope"></i>
//                   </span>
//                   <input
//                     type="text"
//                     required
//                     className="w-full h-full bg-transparent text-base text-[#e4e4e4] focus:outline-none pr-7"
//                   />
//                   <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base font-medium transition-all">
//                     Email
//                   </label>
//                 </div>

//                 <div className="input-box relative w-[340px] h-12 border-b-2 border-[#e4e4e4] my-8">
//                   <span className="icon absolute top-3 right-0 text-xl">
//                     <i className="bx bxs-lock"></i>
//                   </span>
//                   <input
//                     type="password"
//                     required
//                     className="w-full h-full bg-transparent text-base text-[#e4e4e4] focus:outline-none pr-7"
//                   />
//                   <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-base font-medium transition-all">
//                     Password
//                   </label>
//                 </div>

//                 <div className="flex items-center text-sm font-medium mb-4">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="accent-[#e4e4e4] mr-1" />
//                     I agree to the terms & conditions
//                   </label>
//                 </div>

//                 <button type="submit" className="btn w-full h-11 bg-[#27ceac] rounded-md text-[#e4e4e4] font-semibold shadow-lg mb-6">
//                   Sign Up
//                 </button>

//                 <div className="text-center text-sm font-medium">
//                   <p>
//                     Already have an account?{" "}
//                     <span
//                       onClick={toggleForm}
//                       className="cursor-pointer text-lg hover:underline"
//                     >
//                       Login
//                     </span>
//                   </p>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;








// import React from 'react';
// import 'boxicons/css/boxicons.min.css';

// const AuthPage = () => {
//   return (
//     <div className="bg-[#020410] min-h-screen flex items-center justify-center">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-60" style={{ backgroundImage: "url('https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg')" }}></div>

//       <div className="relative z-10 w-3/4 max-w-5xl bg-white bg-opacity-10 rounded-lg shadow-lg p-8 md:p-12">
//         <div className="flex flex-col md:flex-row">

//           {/* Left Side Content */}
//           <div className="w-full md:w-1/2 p-8 text-white space-y-4">
//             <h2 className="text-3xl font-bold flex items-center gap-2">
//               <i className="bx bxl-firefox text-4xl"></i> Dev Tech
//             </h2>
//             <h2 className="text-4xl font-bold">Welcome!</h2>
//             <p className="text-lg">We're delighted to have you here. If you need any assistance, feel free to reach out!</p>
//             <div className="flex gap-4">
//               <a href="#"><i className="bx bxl-facebook-circle text-3xl hover:scale-110"></i></a>
//               <a href="#"><i className="bx bxl-instagram-alt text-3xl hover:scale-110"></i></a>
//               <a href="#"><i className="bx bxl-linkedin-square text-3xl hover:scale-110"></i></a>
//               <a href="#"><i className="bx bxl-dribbble text-3xl hover:scale-110"></i></a>
//             </div>
//           </div>

//           {/* Right Side Login and Signup Forms */}
//           <div className="w-full md:w-1/2 space-y-8">
//             <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg shadow-lg">
//               <form className="space-y-4">
//                 <h2 className="text-3xl font-semibold text-center text-white">Login</h2>

//                 <div className="relative">
//                   <i className="bx bxs-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
//                   <input type="email" required className="w-full pl-12 py-2 bg-transparent border-b border-gray-400 text-white focus:outline-none" placeholder="Email" />
//                 </div>

//                 <div className="relative">
//                   <i className="bx bxs-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
//                   <input type="password" required className="w-full pl-12 py-2 bg-transparent border-b border-gray-400 text-white focus:outline-none" placeholder="Password" />
//                 </div>

//                 <div className="flex justify-between items-center text-gray-400 text-sm">
//                   <label className="flex items-center space-x-2">
//                     <input type="checkbox" className="accent-gray-500" /> <span>Remember me</span>
//                   </label>
//                   <a href="#" className="hover:underline">Forgot Password?</a>
//                 </div>
//                 <button type="submit" className="w-full py-2 bg-teal-500 hover:bg-teal-600 rounded text-white font-semibold shadow-md">Login</button>

//                 <div className="text-center text-gray-400">
//                   <p>Don't have an account? <a href="#" className="text-teal-400 hover:underline">Register</a></p>
//                 </div>
//               </form>
//             </div>

//             {/* Sign-Up Form */}
//             <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg shadow-lg">
//               <form className="space-y-4">
//                 <h2 className="text-3xl font-semibold text-center text-white">Sign Up</h2>

//                 <div className="relative">
//                   <i className="bx bxs-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
//                   <input type="text" required className="w-full pl-12 py-2 bg-transparent border-b border-gray-400 text-white focus:outline-none" placeholder="Name" />
//                 </div>

//                 <div className="relative">
//                   <i className="bx bxs-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
//                   <input type="email" required className="w-full pl-12 py-2 bg-transparent border-b border-gray-400 text-white focus:outline-none" placeholder="Email" />
//                 </div>

//                 <div className="relative">
//                   <i className="bx bxs-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
//                   <input type="password" required className="w-full pl-12 py-2 bg-transparent border-b border-gray-400 text-white focus:outline-none" placeholder="Password" />
//                 </div>

//                 <div className="flex items-center text-gray-400 text-sm">
//                   <input type="checkbox" className="accent-gray-500" />
//                   <span className="ml-2">I agree to the terms & conditions</span>
//                 </div>
//                 <button type="submit" className="w-full py-2 bg-teal-500 hover:bg-teal-600 rounded text-white font-semibold shadow-md">Sign Up</button>

//                 <div className="text-center text-gray-400">
//                   <p>Already have an account? <a href="#" className="text-teal-400 hover:underline">Login</a></p>
//                 </div>
//               </form>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;















// import React, { useState } from "react";

// function AuthPage() {
//     const [isLogin, setIsLogin] = useState(true);

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//     };
//   return (
//     <>
//      <div className="relative w-full h-screen bg-[#020410] font-poppins">
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-[10px]"
//         style={{ backgroundImage: 'url(https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg)' }}
//       ></div>

//       <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[550px] bg-cover bg-center rounded-lg"
//            style={{ backgroundImage: 'url(https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg)' }}>
//         <div className="absolute top-0 left-0 w-1/2 h-full p-20 text-[#e4e4e4] flex flex-col justify-between">
//           <h2 className="text-3xl">
//             <i className="bx bxl-firefox"></i> Dev Tech
//           </h2>
//           <div className="text-sci">
//             <h2 className="text-4xl leading-tight">
//               Welcome! <br />
//               <span className="text-2xl">To Our New Website.</span>
//             </h2>
//             <p className="text-base mt-5">
//               We're delighted to have you here. If you need any assistance, feel free to reach out!
//             </p>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="hover:scale-110 transform transition">
//                 <i className="bx bxl-facebook-circle text-xl text-[#e4e4e4]"></i>
//               </a>
//               <a href="#" className="hover:scale-110 transform transition">
//                 <i className="bx bxl-instagram-alt text-xl text-[#e4e4e4]"></i>
//               </a>
//               <a href="#" className="hover:scale-110 transform transition">
//                 <i className="bx bxl-linkedin-square text-xl text-[#e4e4e4]"></i>
//               </a>
//               <a href="#" className="hover:scale-110 transform transition">
//                 <i className="bx bxl-dribbble text-xl text-[#e4e4e4]"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="absolute top-0 right-0 w-[40%] h-full">
//           {/* Login Form */}
//           <div className="absolute w-full h-full bg-transparent backdrop-blur-[20px] rounded-tr-lg rounded-br-lg flex justify-center items-center transition duration-500">
//             <form className="w-full max-w-sm text-[#e4e4e4]">
//               <h2 className="text-2xl text-center mb-8">Login</h2>

//               <div className="relative border-b-2 border-[#e4e4e4] mb-8">
//                 <span className="absolute right-0 top-3 text-xl">
//                   <i className="bx bxs-envelope"></i>
//                 </span>
//                 <input type="text" required className="w-full bg-transparent outline-none text-[#e4e4e4] text-base pr-7" />
//                 <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-base transition-all">Email</label>
//               </div>

//               <div className="relative border-b-2 border-[#e4e4e4] mb-8">
//                 <span className="absolute right-0 top-3 text-xl">
//                   <i className="bx bxs-lock"></i>
//                 </span>
//                 <input type="password" required className="w-full bg-transparent outline-none text-[#e4e4e4] text-base pr-7" />
//                 <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-base transition-all">Password</label>
//               </div>

//               <div className="flex justify-between mb-6 text-sm">
//                 <label className="flex items-center">
//                   <input type="checkbox" className="mr-2 accent-[#e4e4e4]" />Remember me
//                 </label>
//                 <a href="#" className="hover:underline">Forgot Password?</a>
//               </div>
//               <button type="submit" className="w-full h-11 bg-[#27ceac] rounded-md shadow-md text-[#e4e4e4] font-semibold">Login</button>

//               <div className="mt-6 text-center">
//                 <p>Don't have an account?<br />
//                   <a href="#" className="text-[#e4e4e4] hover:underline text-lg">Register</a>
//                 </p>
//               </div>
//             </form>
//           </div>

//           {/* Sign-Up Form */}
//           <div className="absolute w-full h-full bg-transparent backdrop-blur-[20px] rounded-tr-lg rounded-br-lg flex justify-center items-center transition duration-500 transform translate-x-[470px]">
//             <form className="w-full max-w-sm text-[#e4e4e4]">
//               <h2 className="text-2xl text-center mb-8">Sign Up</h2>

//               <div className="relative border-b-2 border-[#e4e4e4] mb-8">
//                 <span className="absolute right-0 top-3 text-xl">
//                   <i className="bx bxs-user"></i>
//                 </span>
//                 <input type="text" required className="w-full bg-transparent outline-none text-[#e4e4e4] text-base pr-7" />
//                 <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-base transition-all">Name</label>
//               </div>

//               <div className="relative border-b-2 border-[#e4e4e4] mb-8">
//                 <span className="absolute right-0 top-3 text-xl">
//                   <i className="bx bxs-envelope"></i>
//                 </span>
//                 <input type="text" required className="w-full bg-transparent outline-none text-[#e4e4e4] text-base pr-7" />
//                 <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-base transition-all">Email</label>
//               </div>

//               <div className="relative border-b-2 border-[#e4e4e4] mb-8">
//                 <span className="absolute right-0 top-3 text-xl">
//                   <i className="bx bxs-lock"></i>
//                 </span>
//                 <input type="password" required className="w-full bg-transparent outline-none text-[#e4e4e4] text-base pr-7" />
//                 <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-base transition-all">Password</label>
//               </div>

//               <div className="flex items-center mb-6 text-sm">
//                 <label className="flex items-center">
//                   <input type="checkbox" className="mr-2 accent-[#e4e4e4]" />I agree to the terms & conditions
//                 </label>
//               </div>
//               <button type="submit" className="w-full h-11 bg-[#27ceac] rounded-md shadow-md text-[#e4e4e4] font-semibold">Sign Up</button>

//               <div className="mt-6 text-center">
//                 <p>Already have an account?<br />
//                   <a href="#" className="text-[#e4e4e4] hover:underline text-lg">Login</a>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default AuthPage;




import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  

  return (
    <div className="relative w-full min-h-screen bg-[#020410] font-poppins flex items-center justify-center">
      <div className="absolute w-full h-full bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg')" }}></div>

      <div className="absolute w-[75%] h-[550px] bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: "url('https://i.postimg.cc/prv7bv98/pexels-philippedonn-1114690.jpg')" }}></div>

      <div className="relative flex w-[75%] h-[550px] rounded-lg overflow-hidden">
        {/* Left Content */}
        <div className="w-1/2 h-full bg-transparent p-10 flex flex-col justify-between text-[#e4e4e4]">
          <h2 className="text-2xl font-bold flex items-center space-x-2">
            <FiUser className="text-4xl" /> <span>Dev Tech</span>
          </h2>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Welcome! <br /><span className="text-2xl">To Our New Website.</span></h2>
            <p>We're delighted to have you here. If you need any assistance, feel free to reach out!</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition transform"><FaFacebook size={22} className="text-[#e4e4e4]" /></a>
              <a href="#" className="hover:scale-110 transition transform"><FaInstagram size={22} className="text-[#e4e4e4]" /></a>
              <a href="#" className="hover:scale-110 transition transform"><FaLinkedin size={22} className="text-[#e4e4e4]" /></a>
              <a href="#" className="hover:scale-110 transition transform"><FaDribbble size={22} className="text-[#e4e4e4]" /></a>
            </div>
          </div>
        </div>

        {/* Right Box - Login/Signup */}
        <div className="w-1/2 h-full bg-transparent backdrop-blur-lg relative">
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-10 transition-transform duration-500 ease-in-out transform ${
              isLogin ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <h2 className="text-white text-3xl font-semibold text-center">Login</h2>
            <form action="#" className="space-y-6 mt-8">
              <div className="relative border-b-2 border-[#e4e4e4] w-[340px] h-[50px]">
                <input 
                  type="text" 
                  required 
                  className="w-full h-full bg-transparent outline-none text-[#e4e4e4] px-2"
                  onFocus={(e) => e.target.nextSibling.classList.add("transform", "-translate-y-3", "text-sm")}
                  onBlur={(e) => !e.target.value && e.target.nextSibling.classList.remove("transform", "-translate-y-3", "text-sm")}
                />
                <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] text-base font-medium transition duration-500 ease">
                  Phone Number
                </label>
                <FiPhone className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl text-[#e4e4e4]" />
              </div>
              
              {showOtp && (
                <div className="relative border-b-2 border-[#e4e4e4] w-[340px] h-[50px]">
                  <input 
                    type="text" 
                    required 
                    className="w-full h-full bg-transparent outline-none text-[#e4e4e4] px-2" 
                  />
                  <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] text-base font-medium transition duration-500 ease">
                    OTP
                  </label>
                </div>
              )}
              <button 
                type="button" 
                className="w-full py-2 bg-[#27ceac] rounded-lg text-[#e4e4e4] font-semibold shadow-md"
                onClick={() => setShowOtp(true)}
              >
                OK
              </button>
              <p className="text-center text-[#e4e4e4] mt-4">Don't have an account?<br /><a href="#" className="text-lg" onClick={() => setIsLogin(false)}>Register</a></p>
            </form>
          </div>

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-10 transition-transform duration-500 ease-in-out transform ${
              isLogin ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            <h2 className="text-white text-3xl font-semibold text-center">Sign Up</h2>
            <form action="#" className="space-y-6 mt-8">
              <div className="relative border-b-2 border-[#e4e4e4] w-[340px] h-[50px]">
                <input 
                  type="text" 
                  required 
                  className="w-full h-full bg-transparent outline-none text-[#e4e4e4] px-2"
                  onFocus={(e) => e.target.nextSibling.classList.add("transform", "-translate-y-3", "text-sm")}
                  onBlur={(e) => !e.target.value && e.target.nextSibling.classList.remove("transform", "-translate-y-3", "text-sm")}
                />
                <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] text-base font-medium transition duration-500 ease">
                  Name
                </label>
                <FiUser className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl text-[#e4e4e4]" />
              </div>
              <div className="relative border-b-2 border-[#e4e4e4] w-[340px] h-[50px]">
                <input 
                  type="text" 
                  required 
                  className="w-full h-full bg-transparent outline-none text-[#e4e4e4] px-2"
                  onFocus={(e) => e.target.nextSibling.classList.add("transform", "-translate-y-3", "text-sm")}
                  onBlur={(e) => !e.target.value && e.target.nextSibling.classList.remove("transform", "-translate-y-3", "text-sm")}
                />
                <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] text-base font-medium transition duration-500 ease">
                  Phone Number
                </label>
                <FiPhone className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl text-[#e4e4e4]" />
              </div>
              <div className="relative border-b-2 border-[#e4e4e4] w-[340px] h-[50px]">
                <input 
                  type="text" 
                  className="w-full h-full bg-transparent outline-none text-[#e4e4e4] px-2"
                  onFocus={(e) => e.target.nextSibling.classList.add("transform", "-translate-y-3", "text-sm")}
                  onBlur={(e) => !e.target.value && e.target.nextSibling.classList.remove("transform", "-translate-y-3", "text-sm")}
                />
                <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#e4e4e4] text-base font-medium transition duration-500 ease">
                  Email (optional)
                </label>
                <FiMail className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl text-[#e4e4e4]" />
              </div>
              <button type="submit" className="w-full py-2 bg-[#27ceac] rounded-lg text-[#e4e4e4] font-semibold shadow-md">Sign Up</button>
              <p className="text-center text-[#e4e4e4] mt-4">Already have an account?<br /><a href="#" className="text-lg" onClick={() => setIsLogin(true)}>Login</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    

  );
}

export default AuthPage;


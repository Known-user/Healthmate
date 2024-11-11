// import React, { useState, useEffect } from "react";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");

//   return (
//     <>
//       <div className="container mx-auto p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex flex-col">
//             <img
//               className="h-[30rem] rounded-lg"
//               src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
//               alt="Blazer Jacket"
//             />
//             <div className="flex space-x-2 mt-4">
//               <img
//                 className="w-16 h-16 rounded-lg"
//                 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
//                 alt="Thumbnail 1"
//               />
//               <img
//                 className="w-16 h-16 rounded-lg"
//                 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
//                 alt="Thumbnail 2"
//               />
//               <img
//                 className="w-16 h-16 rounded-lg"
//                 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
//                 alt="Thumbnail 3"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-2xl font-bold">Blazer Jacket</h1>
//             <div className="flex items-center mt-2">
//               <span className="text-yellow-500">★★★★☆</span>
//               <span className="text-muted-foreground ml-2">(4.9)</span>
//             </div>
//             <p className="text-xl font-semibold mt-4">$2500</p>
//             <div className="mt-4">
//               <label htmlFor="size" className="block text-sm font-medium">
//                 Available Size
//               </label>
//               <select
//                 id="size"
//                 className="mt-1 block w-full border border-border rounded-md p-2"
//               >
//                 <option>S</option>
//                 <option>M</option>
//                 <option>L</option>
//               </select>
//             </div>
//             <div className="mt-4">
//               <label htmlFor="color" className="block text-sm font-medium">
//                 Available Color
//               </label>
//               <select
//                 id="color"
//                 className="mt-1 block w-full border border-border rounded-md p-2"
//               >
//                 <option>Gray</option>
//                 <option>Black</option>
//                 <option>Blue</option>
//               </select>
//             </div>
//             <div className="flex items-center mt-4">
//               <label htmlFor="quantity" className="block text-sm font-medium">
//                 Last left - make it yours!
//               </label>
//               <input
//                 id="quantity"
//                 type="number"
//                 className="ml-2 border border-border rounded-md w-16 p-1"
//                 value="1"
//                 min="1"
//               />
//             </div>
//             <button className="bg-[#18181B] text-white hover:bg-[#18181bd0] mt-4 p-2 rounded-lg">
//               Add to cart
//             </button>
//           </div>
//         </div>

//         <div className="product-info-tabs mt-12">
//           <ul
//             className="nav nav-tabs flex border-b-2 border-gray-300"
//             id="myTab"
//             role="tablist"
//           >
//             <li className="nav-item mb-0 mr-4 contents">
//               <a
//                 className={`px-4 py-2 nav-link ${
//                   activeTab === "description"
//                     ? "active border-b-2 text-gray-800 font-bold border-gray-300"
//                     : "border-none border-b-2 border-transparent text-gray-800"
//                 }`}
//                 id="description-tab"
//                 href="#description"
//                 role="tab"
//                 aria-controls="description"
//                 aria-selected={activeTab === "description"}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setActiveTab("description");
//                 }}
//               >
//                 Description
//               </a>
//             </li>
//             <li className="nav-item mb-0 mr-4 contents">
//               <a
//                 className={`px-4 py-2 nav-link ${
//                   activeTab === "review"
//                     ? "active border-b-2 text-gray-800 font-bold border-gray-300"
//                     : "border-none border-b-2 border-transparent text-gray-800"
//                 }`}
//                 id="review-tab"
//                 href="#review"
//                 role="tab"
//                 aria-controls="review"
//                 aria-selected={activeTab === "review"}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setActiveTab("review");
//                 }}
//               >
//                 Reviews (3)
//               </a>
//             </li>
//           </ul>
//           <div className="tab-content p-4" id="myTabContent">
//             {activeTab === "description" && (
//               <div
//                 className={`tab-pane fade show active p-8 text-[15px] leading-6 text-[#7a7a7a]`}
//                 id="description"
//                 role="tabpanel"
//                 aria-labelledby="description-tab"
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
//                 at sapiente optio vero velit dolorum voluptatem, enim unde et
//                 rerum ad corporis officiis dolor atque ipsum in quis ab
//                 repellendus quisquam labore? Fuga, libero at cupiditate illo et
//                 eligendi? Nisi natus nemo consequuntur totam voluptatem minima
//                 perspiciatis dolor eius aperiam hic. Earum, odit, quibusdam
//                 natus, repellendus quo distinctio temporibus numquam sit quidem
//                 alias quisquam? Impedit perspiciatis incidunt dolores omnis
//                 ullam architecto praesentium error voluptatum excepturi
//                 provident, pariatur aperiam amet, similique sint eius!
//                 Laudantium unde veritatis, impedit voluptatibus molestias
//                 doloribus mollitia fugit hic est eos neque perferendis quam
//                 delectus illo architecto obcaecati eum quia cum quaerat nam
//                 minima qui. Laboriosam libero dolor illum voluptatibus!
//                 Accusantium tenetur eligendi ratione obcaecati, maiores dicta
//                 quasi ad officiis possimus distinctio nemo suscipit minus odit
//                 odio aspernatur, pariatur repellat! Dolor quam sed odio, quo
//                 atque esse nostrum repellendus eveniet repellat incidunt magnam
//                 inventore nulla cupiditate in facere saepe ex. Perspiciatis
//                 quibusdam dicta et! Consequatur soluta itaque veritatis
//                 obcaecati ut libero necessitatibus, ipsam ratione nemo quis
//                 omnis voluptates distinctio quaerat repellat dolores? Similique
//                 libero culpa non numquam saepe illo nulla ipsam, ipsum, unde
//                 officia cum nihil aliquid ratione harum esse perspiciatis
//                 debitis quisquam laboriosam. Assumenda hic dolorem dignissimos
//                 consectetur expedita tempora, corporis distinctio a modi
//                 exercitationem culpa omnis laboriosam itaque impedit quis
//                 suscipit laudantium ad porro inventore soluta consequatur! Non
//                 voluptatem in unde! Incidunt ea facere illo quaerat recusandae
//                 aperiam quisquam vitae ad minima quos labore neque quas aliquam
//                 quae ducimus eaque odit dolorem perspiciatis obcaecati quidem
//                 doloribus, omnis error laudantium commodi. Porro earum eos, quod
//                 ratione, deserunt temporibus dignissimos esse quibusdam veniam
//                 quam perferendis ducimus repellat officia accusamus cupiditate
//                 eius, itaque quos quis cumque sint maxime. Iste tenetur est, in
//                 nobis alias ea possimus ipsa quaerat, aliquam non a fugiat
//                 mollitia quam harum, doloribus animi voluptatem!
//               </div>
//             )}
//             {activeTab === "review" && (
//               <div
//                 className={`tab-pane fade show active`}
//                 id="review"
//                 role="tabpanel"
//                 aria-labelledby="review-tab"
//               >
//                 <div className="review-heading text-2xl font-semibold leading-6 mb-2 uppercase text-black">
//                   REVIEWS
//                 </div>

//                 <div className="mt-4">
//                   <div className="border-b border-border pb-2">
//                     <p className="font-semibold">Kathryn Murphy</p>
//                     <p className="text-muted-foreground">
//                       The fit is perfect, and the quality is top-notch.
//                     </p>
//                     <span className="text-sm text-muted-foreground">
//                       1 week ago
//                     </span>
//                   </div>
//                   <div className="border-b border-border pb-2 mt-2">
//                     <p className="font-semibold">Esther Howard</p>
//                     <p className="text-muted-foreground">
//                       I recently purchased the gray blazer jacket for women, and
//                       I couldn't be happier with my purchase!
//                     </p>
//                     <span className="text-sm text-muted-foreground">
//                       2 weeks ago
//                     </span>
//                   </div>
//                   <div className="border-b border-border pb-2 mt-2">
//                     <p className="font-semibold">Cameron Williamson</p>
//                     <p className="text-muted-foreground">
//                       I've received multiple compliments on how stylish it
//                       looks.
//                     </p>
//                     <span className="text-sm text-muted-foreground">
//                       2 weeks ago
//                     </span>
//                   </div>
//                 </div>
//                 <form className="review-form">
//                   <div className="form-group clear-both mt-6 mb-4">
//                     <label>Your rating</label>
//                     <div className="reviews-counter">
//                       <div className="rate inline-block">
//                         <input type="radio" id="star5" name="rate" value="5" />
//                         <label htmlFor="star5" title="text">
//                           5 stars
//                         </label>
//                         <input type="radio" id="star4" name="rate" value="4" />
//                         <label htmlFor="star4" title="text">
//                           4 stars
//                         </label>
//                         <input type="radio" id="star3" name="rate" value="3" />
//                         <label htmlFor="star3" title="text">
//                           3 stars
//                         </label>
//                         <input type="radio" id="star2" name="rate" value="2" />
//                         <label htmlFor="star2" title="text">
//                           2 stars
//                         </label>
//                         <input type="radio" id="star1" name="rate" value="1" />
//                         <label htmlFor="star1" title="text">
//                           1 star
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group clear-both mb-4">
//                     <label>Your message</label>
//                     <textarea
//                       className="form-control text-[14px] resize-none border p-2 w-full"
//                       rows="10"
//                     ></textarea>
//                   </div>
//                   <div className="flex flex-col md:flex-row gap-4">
//                     <div className="w-full md:w-1/2">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control text-[14px] h-10 border p-2 w-full"
//                           placeholder="Name*"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-full md:w-1/2">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control text-[14px] h-10 border p-2 w-full"
//                           placeholder="Email Id*"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <button className="round-black-btn uppercase cursor-pointer bg-black text-white px-4 py-2 mt-4">
//                     Submit Review
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;






// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");
//   const { product } = useSelector((state) => state.first);
//   const thumbnails = [
//     "https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448191_0_3.jpg",
//     "https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448192_1_3.jpg",
//     "https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448194_3_3.jpg",
//     "https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448195_4_3.jpg",
//     "https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448196_5_3.jpg",
//     "https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_737327_6_2.jpg",
//     "https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_737328_7_2.jpg",
//     "https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_746148_8_1.jpg",
//   ];
//   const similarProducts = [
//     {
//       id: 1,
//       image:
//         "https://www.netmeds.com/images/product-v1/150x150/920339/inlife_natural_vitamin_c_zinc_1000_mg_tablet_orange_flavour_60s_750404_0_0.jpg",
//       title: "Vitamin C 1000mg Tablets",
//       price: "$25",
//     },
//     {
//       id: 2,
//       image:
//         "https://www.netmeds.com/images/product-v1/150x150/958675/ultra_omega_3_capsule_10s_0_0.jpg",
//       title: "Omega-3 Fish Oil Capsules",
//       price: "$30",
//     },
//     {
//       id: 3,
//       image:
//         "https://www.netmeds.com/images/product-v1/150x150/858137/inlife_calcium_vitamin_d3_tablets_60s_77969_0_4.jpg",
//       title: "Calcium + D3 Tablets",
//       price: "$15",
//     },
//   ];
//   const SampleNextArrow = ({ onClick }) => (
//     <div
//       className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 cursor-pointer shadow-lg z-10"
//       onClick={onClick}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 text-gray-600"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//       </svg>
//     </div>
//   );

//   const SamplePrevArrow = ({ onClick }) => (
//     <div
//       className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 cursor-pointer shadow-lg z-10"
//       onClick={onClick}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 text-gray-600"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15 19l-7-7 7-7"
//         />
//       </svg>
//     </div>
//   );
//   const settings = {
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: false,
//     arrows: true,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1800,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 1400,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1000,
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
//   const deals = [
//     {
//       image:
//         "https://www.netmeds.com/images/product-v1/150x150/848465/skore_notout_climax_delay_with_1500_plus_raised_dots_10s_73948_0_1.jpg",
//       rating: 4.8,
//       title: "Cetaphil Oily Skin Cleanser 125ml",
//       price: "₹ 545.16",
//       originalPrice: "₹ 649.00",
//       discount: "16",
//     },
//     {
//       image:
//         "https://www.netmeds.com/images/product-v1/150x150/828337/cetaphil_oily_skin_cleanser_125ml_120194_0_1.jpg",
//       rating: 4.8,
//       title: "Cetaphil Oily Skin Cleanser 125ml",
//       price: "₹ 545.16",
//       originalPrice: "₹ 649.00",
//       discount: "16",
//     },
//     {
//       image:
//         "https://www.netmeds.com/images/product-v1/150x150/405930/episoft_for_sensitive_skin_cleansing_lotion_250ml_48692_0_1.jpg",
//       rating: 4.8,
//       title: "Cetaphil Oily Skin Cleanser 125ml",
//       price: "₹ 545.16",
//       originalPrice: "₹ 649.00",
//       discount: "16",
//     },
//     {
//       image:
//         "https://www.netmeds.com/images/product-v1/150x150/1133148/bontress_pro_plus_scalp_serum_60_ml_731765_0_0.jpg",
//       rating: 4.8,
//       title: "Cetaphil Oily Skin Cleanser 125ml",
//       price: "₹ 545.16",
//       originalPrice: "₹ 649.00",
//       discount: "16",
//     },
//     {
//       image:
//         "https://www.netmeds.com/images/product-v1/150x150/835964/dr_willmar_schwabe_dizester_tonic_500_ml_0.jpg",
//       rating: 4.8,
//       title: "Cetaphil Oily Skin Cleanser 125ml",
//       price: "₹ 545.16",
//       originalPrice: "₹ 649.00",
//       discount: "16",
//     },
//   ];

//   const [startIndex, setStartIndex] = useState(0); // Starting index for the carousel
//   const [selectedIndex, setSelectedIndex] = useState(0); // Index of the currently selected main image

//   const visibleThumbnails = thumbnails.slice(startIndex, startIndex + 3); // Display 3 thumbnails at a time

//   // Function to handle the next arrow click
//   const nextThumbnails = () => {
//     if (selectedIndex < thumbnails.length - 1) {
//       setSelectedIndex((prevIndex) => {
//         const newIndex = prevIndex + 1;
//         // Move the carousel if the selected image goes beyond the visible set
//         if (newIndex >= startIndex + 3 && startIndex + 3 < thumbnails.length) {
//           setStartIndex(startIndex + 1);
//         }
//         return newIndex;
//       });
//     }
//   };

//   // Function to handle the previous arrow click
//   const prevThumbnails = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex((prevIndex) => {
//         const newIndex = prevIndex - 1;
//         // Move the carousel if the selected image goes before the visible set
//         if (newIndex < startIndex && startIndex > 0) {
//           setStartIndex(startIndex - 1);
//         }
//         return newIndex;
//       });
//     }
//   };

//   // Handle when the user clicks directly on a thumbnail
//   const handleThumbnailClick = (index) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <>
//       <div className="container mx-auto p-6 mt-36">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex flex-col">
//             {/* Main image */}
//             <img
//               className="h-[30rem] rounded-lg"
//               src={thumbnails[selectedIndex]}
//               alt="Main Image"
//             />

//             {/* Thumbnails carousel */}
//             <div className="flex justify-center">
//               <div className="relative w-full max-w-[500px] flex items-center mt-4">
//                 {/* Left arrow */}
//                 <button
//                   onClick={prevThumbnails}
//                   className="absolute left-0 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-800 focus:outline-none"
//                   disabled={selectedIndex === 0}
//                 >
//                   &#10094;
//                 </button>

//                 <div className="flex space-x-2 mx-auto">
//                   {visibleThumbnails.slice(0, 3).map((thumbnail, index) => (
//                     <img
//                       key={startIndex + index}
//                       className={`w-16 h-16 rounded-lg cursor-pointer ${
//                         selectedIndex === startIndex + index
//                           ? "border-2 border-black"
//                           : ""
//                       }`}
//                       src={thumbnail}
//                       alt={`Thumbnail ${startIndex + index + 1}`}
//                       onClick={() => handleThumbnailClick(startIndex + index)}
//                     />
//                   ))}
//                 </div>

//                 {/* Right arrow */}
//                 <button
//                   onClick={nextThumbnails}
//                   className="absolute right-0 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-800 focus:outline-none"
//                   disabled={selectedIndex === thumbnails.length - 1}
//                 >
//                   &#10095;
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-2xl font-bold">Blazer Jacket</h1>
//             <div className="flex items-center mt-2">
//               <span className="text-yellow-500">★★★★☆</span>
//               <span className="text-muted-foreground ml-2">(4.9)</span>
//             </div>
//             <p className="text-xl font-semibold mt-4">$2500</p>
//             <div className="mt-4">
//               <label htmlFor="size" className="block text-sm font-medium">
//                 Available Size
//               </label>
//               <select
//                 id="size"
//                 className="mt-1 block w-full border border-border rounded-md p-2"
//               >
//                 <option>S</option>
//                 <option>M</option>
//                 <option>L</option>
//               </select>
//             </div>
//             <div className="mt-4">
//               <label htmlFor="color" className="block text-sm font-medium">
//                 Available Color
//               </label>
//               <select
//                 id="color"
//                 className="mt-1 block w-full border border-border rounded-md p-2"
//               >
//                 <option>Gray</option>
//                 <option>Black</option>
//                 <option>Blue</option>
//               </select>
//             </div>
//             <div className="flex items-center mt-4">
//               <label htmlFor="quantity" className="block text-sm font-medium">
//                 Last left - make it yours!
//               </label>
//               <input
//                 id="quantity"
//                 type="number"
//                 className="ml-2 border border-border rounded-md w-16 p-1"
//                 value="1"
//                 min="1"
//               />
//             </div>
//             <Link to="/cart" className="bg-[#18181B] text-center text-white hover:bg-[#18181bd0] mt-4 p-2 rounded-lg">
//               Add to cart
//             </Link>
//           </div>
//         </div>

//         <div className="product-info-tabs mt-12">
//           <ul
//             className="nav nav-tabs flex border-b-2 border-gray-300"
//             id="myTab"
//             role="tablist"
//           >
//             <li className="nav-item mb-0 mr-4 contents">
//               <a
//                 className={`px-4 py-2 nav-link ${
//                   activeTab === "description"
//                     ? "active border-b-2 text-gray-800 font-bold border-gray-300"
//                     : "border-none border-b-2 border-transparent text-gray-800"
//                 }`}
//                 id="description-tab"
//                 href="#description"
//                 role="tab"
//                 aria-controls="description"
//                 aria-selected={activeTab === "description"}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setActiveTab("description");
//                 }}
//               >
//                 Description
//               </a>
//             </li>
//             <li className="nav-item mb-0 mr-4 contents">
//               <a
//                 className={`px-4 py-2 nav-link ${
//                   activeTab === "review"
//                     ? "active border-b-2 text-gray-800 font-bold border-gray-300"
//                     : "border-none border-b-2 border-transparent text-gray-800"
//                 }`}
//                 id="review-tab"
//                 href="#review"
//                 role="tab"
//                 aria-controls="review"
//                 aria-selected={activeTab === "review"}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setActiveTab("review");
//                 }}
//               >
//                 Reviews (3)
//               </a>
//             </li>
//           </ul>
//           <div className="tab-content p-4" id="myTabContent">
//             {activeTab === "description" && (
//               <div
//                 className={`tab-pane fade show active p-8 text-[15px] leading-6 text-[#7a7a7a]`}
//                 id="description"
//                 role="tabpanel"
//                 aria-labelledby="description-tab"
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
//                 at sapiente optio vero velit dolorum voluptatem, enim unde et
//                 rerum ad corporis officiis dolor atque ipsum in quis ab
//                 repellendus quisquam labore? Fuga, libero at cupiditate illo et
//                 eligendi? Nisi natus nemo consequuntur totam voluptatem minima
//                 perspiciatis dolor eius aperiam hic. Earum, odit, quibusdam
//                 natus, repellendus quo distinctio temporibus numquam sit quidem
//                 alias quisquam? Impedit perspiciatis incidunt dolores omnis
//                 ullam architecto praesentium error voluptatum excepturi
//                 provident, pariatur aperiam amet, similique sint eius!
//                 Laudantium unde veritatis, impedit voluptatibus molestias
//                 doloribus mollitia fugit hic est eos neque perferendis quam
//                 delectus illo architecto obcaecati eum quia cum quaerat nam
//                 minima qui. Laboriosam libero dolor illum voluptatibus!
//                 Accusantium tenetur eligendi ratione obcaecati, maiores dicta
//                 quasi ad officiis possimus distinctio nemo suscipit minus odit
//                 odio aspernatur, pariatur repellat! Dolor quam sed odio, quo
//                 atque esse nostrum repellendus eveniet repellat incidunt magnam
//                 inventore nulla cupiditate in facere saepe ex. Perspiciatis
//                 quibusdam dicta et! Consequatur soluta itaque veritatis
//                 obcaecati ut libero necessitatibus, ipsam ratione nemo quis
//                 omnis voluptates distinctio quaerat repellat dolores? Similique
//                 libero culpa non numquam saepe illo nulla ipsam, ipsum, unde
//                 officia cum nihil aliquid ratione harum esse perspiciatis
//                 debitis quisquam laboriosam. Assumenda hic dolorem dignissimos
//                 consectetur expedita tempora, corporis distinctio a modi
//                 exercitationem culpa omnis laboriosam itaque impedit quis
//                 suscipit laudantium ad porro inventore soluta consequatur! Non
//                 voluptatem in unde! Incidunt ea facere illo quaerat recusandae
//                 aperiam quisquam vitae ad minima quos labore neque quas aliquam
//                 quae ducimus eaque odit dolorem perspiciatis obcaecati quidem
//                 doloribus, omnis error laudantium commodi. Porro earum eos, quod
//                 ratione, deserunt temporibus dignissimos esse quibusdam veniam
//                 quam perferendis ducimus repellat officia accusamus cupiditate
//                 eius, itaque quos quis cumque sint maxime. Iste tenetur est, in
//                 nobis alias ea possimus ipsa quaerat, aliquam non a fugiat
//                 mollitia quam harum, doloribus animi voluptatem!
//               </div>
//             )}
//             {activeTab === "review" && (
//               <div
//                 className={`tab-pane fade show active`}
//                 id="review"
//                 role="tabpanel"
//                 aria-labelledby="review-tab"
//               >
//                 <div className="review-heading text-2xl font-semibold leading-6 mb-2 uppercase text-black">
//                   REVIEWS
//                 </div>

//                 <div className="mt-4">
//                   <div className="border-b border-border pb-2">
//                     <p className="font-semibold">Kathryn Murphy</p>
//                     <p className="text-muted-foreground">
//                       The fit is perfect, and the quality is top-notch.
//                     </p>
//                     <span className="text-sm text-muted-foreground">
//                       1 week ago
//                     </span>
//                   </div>
//                   <div className="border-b border-border pb-2 mt-2">
//                     <p className="font-semibold">Esther Howard</p>
//                     <p className="text-muted-foreground">
//                       I recently purchased the gray blazer jacket for women, and
//                       I couldn't be happier with my purchase!
//                     </p>
//                     <span className="text-sm text-muted-foreground">
//                       2 weeks ago
//                     </span>
//                   </div>
//                   <div className="border-b border-border pb-2 mt-2">
//                     <p className="font-semibold">Cameron Williamson</p>
//                     <p className="text-muted-foreground">
//                       I've received multiple compliments on how stylish it
//                       looks.
//                     </p>
//                     <span className="text-sm text-muted-foreground">
//                       2 weeks ago
//                     </span>
//                   </div>
//                 </div>
//                 <form className="review-form">
//                   <div className="form-group clear-both mt-6 mb-4">
//                     <label>Your rating</label>
//                     <div className="reviews-counter">
//                       <div className="rate inline-block">
//                         <input type="radio" id="star5" name="rate" value="5" />
//                         <label htmlFor="star5" title="text">
//                           5 stars
//                         </label>
//                         <input type="radio" id="star4" name="rate" value="4" />
//                         <label htmlFor="star4" title="text">
//                           4 stars
//                         </label>
//                         <input type="radio" id="star3" name="rate" value="3" />
//                         <label htmlFor="star3" title="text">
//                           3 stars
//                         </label>
//                         <input type="radio" id="star2" name="rate" value="2" />
//                         <label htmlFor="star2" title="text">
//                           2 stars
//                         </label>
//                         <input type="radio" id="star1" name="rate" value="1" />
//                         <label htmlFor="star1" title="text">
//                           1 star
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group clear-both mb-4">
//                     <label>Your message</label>
//                     <textarea
//                       className="form-control text-[14px] resize-none border p-2 w-full"
//                       rows="10"
//                     ></textarea>
//                   </div>
//                   <div className="flex flex-col md:flex-row gap-4">
//                     <div className="w-full md:w-1/2">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control text-[14px] h-10 border p-2 w-full"
//                           placeholder="Name*"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-full md:w-1/2">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control text-[14px] h-10 border p-2 w-full"
//                           placeholder="Email Id*"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <button className="round-black-btn uppercase cursor-pointer bg-black text-white px-4 py-2 mt-4">
//                     Submit Review
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="mt-10">
//           <h2 className="text-3xl font-bold mb-6">Similar Products</h2>
//           <Slider {...settings}>
//             {deals.map((deal, index) => (
//               <div key={index} className="flex gap-4 overflow-hidden w-full">
//                 <div className="bg-white text-gray-800 rounded-lg shadow-lg mb-10 p-4 w-60 flex-shrink-0 mx-auto relative">
//                   <div className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md">
//                     <span className="text-sm font-semibold text-gray-800">
//                       ⭐ {deal.rating}
//                     </span>
//                   </div>
//                   <img
//                     src={deal.image}
//                     alt={deal.title}
//                     className="h-40 mx-auto mb-2"
//                   />
//                   <h3 className="text-sm font-semibold mb-1">{deal.title}</h3>
//                   <p className="text-lg font-bold">
//                     {deal.price}{" "}
//                     <span className="line-through text-gray-400">
//                       {deal.originalPrice}
//                     </span>
//                   </p>
//                   <p className="text-green-600 text-sm font-semibold mb-3">
//                     GET {deal.discount} % off
//                   </p>
//                   <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-teal-600">
//                     ADD TO CART
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;






import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { toast } from 'react-toastify';
// toast.configure();

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("description");
  const { product } = useSelector((state) => state.first);
  const thumbnails = [
    ...product.imageLink
  ];

  const [startIndex, setStartIndex] = useState(0); 
  const [selectedIndex, setSelectedIndex] = useState(0); 

  const visibleThumbnails = thumbnails.slice(startIndex, startIndex + 3); 

  const nextThumbnails = () => {
    if (selectedIndex < thumbnails.length - 1) {
      setSelectedIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        // Move the carousel if the selected image goes beyond the visible set
        if (newIndex >= startIndex + 3 && startIndex + 3 < thumbnails.length) {
          setStartIndex(startIndex + 1);
        }
        return newIndex;
      });
    }
  };

  const prevThumbnails = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        // Move the carousel if the selected image goes before the visible set
        if (newIndex < startIndex && startIndex > 0) {
          setStartIndex(startIndex - 1);
        }
        return newIndex;
      });
    }
  };

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    let newQuantity = parseInt(e.target.value, 10);
    if (newQuantity < 1) newQuantity = 1;
    if (newQuantity > product.quantity) newQuantity = product.quantity;
    setQuantity(newQuantity);
  };

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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
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

  const [deals, setDeals] = useState([]);

const fetchCategoryData = async (type) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/category/${type}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return []; 
  }
};

const getDeals = async () => {
  const products = await Promise.all(
    product.categories.map(async (category) => {
      const data = await fetchCategoryData(category);
      return data; 
    })
  );

  setDeals(products.flat());
};
const handleAddToCart = ({deal}) => {
  dispatch({ type: 'CART_DATA', payload: deal });
  toast.success("Added to cart!", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, // Close after 3 seconds
  });
};

useEffect(() => {
  getDeals(); 
}, []);
  return (
    <>
    {console.log(deals)}
      <div className="container mx-auto p-6 mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            {/* Main image */}
            <img
              className="h-[30rem] rounded-lg"
              src={thumbnails[selectedIndex]}
              alt="Main Image"
            />

            {/* Thumbnails carousel */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] flex items-center mt-4">
                {/* Left arrow */}
                <button
                  onClick={prevThumbnails}
                  className="absolute left-0 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-800 focus:outline-none"
                  disabled={selectedIndex === 0}
                >
                  &#10094;
                </button>

                <div className="flex space-x-2 mx-auto">
                  {visibleThumbnails.slice(0, 3).map((thumbnail, index) => (
                    <img
                      key={startIndex + index}
                      className={`w-16 h-16 rounded-lg cursor-pointer ${
                        selectedIndex === startIndex + index
                          ? "border-2 border-black"
                          : ""
                      }`}
                      src={thumbnail}
                      alt={`Thumbnail ${startIndex + index + 1}`}
                      onClick={() => handleThumbnailClick(startIndex + index)}
                    />
                  ))}
                </div>

                {/* Right arrow */}
                <button
                  onClick={nextThumbnails}
                  className="absolute right-0 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-800 focus:outline-none"
                  disabled={selectedIndex === thumbnails.length - 1}
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 p-6 bg-white rounded-lg ">
  <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

  <div className="flex items-center space-x-2 mt-2">
    <span className="text-yellow-500 text-xl">★★★★☆</span>
    <span className="text-gray-600 text-lg">(4.9)</span>
  </div>

  <p className="text-3xl font-semibold text-gray-800 mt-2">₹{product.price}</p>

  <div className="mt-4">
    <label htmlFor="brand" className="text-sm font-medium text-gray-600">Brand</label>
    <p className="mt-1 text-xl font-medium text-gray-800">{product.brand}</p>
  </div>

  <div className="mt-4">
    <label htmlFor="category" className="text-sm font-medium text-gray-600">Product Type</label>
    <p className="mt-1 capitalize text-lg text-gray-800">{product.productType}</p>
  </div>

  <div className="mt-4">
    <label htmlFor="delivery" className="text-sm font-medium text-gray-600">Estimated Delivery</label>
    <p className="mt-1 text-lg text-gray-800">Delivered in 2 days</p>
  </div>

  <div className="flex items-center space-x-3 mt-6">
    <label htmlFor="quantity" className="text-sm font-medium text-gray-600">Last left - make it yours!</label>
    <div className="flex items-center space-x-3">
      <input
        id="quantity"
        type="number"
        className="border border-gray-300 rounded-md p-3 text-center w-24 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        max={product.quantity}
      />
      <span className="text-sm text-gray-600">{product.quantity} products left</span>
    </div>
  </div>

  <button 
    onClick={() => handleAddToCart(product)}
    className="bg-[#18181B] text-white text-lg font-semibold py-3 rounded-lg text-center mt-6 hover:bg-[#18181bd0] transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    Add to cart
  </button>
</div>


        </div>

        <div className="product-info-tabs mt-12">
          <ul
            className="nav nav-tabs flex border-b-2 border-gray-300"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item mb-0 mr-4 contents">
              <a
                className={`px-4 py-2 nav-link ${
                  activeTab === "description"
                    ? "active border-b-2 text-gray-800 font-bold border-gray-300"
                    : "border-none border-b-2 border-transparent text-gray-800"
                }`}
                id="description-tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected={activeTab === "description"}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("description");
                }}
              >
                Description
              </a>
            </li>
            <li className="nav-item mb-0 mr-4 contents">
              <a
                className={`px-4 py-2 nav-link ${
                  activeTab === "review"
                    ? "active border-b-2 text-gray-800 font-bold border-gray-300"
                    : "border-none border-b-2 border-transparent text-gray-800"
                }`}
                id="review-tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected={activeTab === "review"}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("review");
                }}
              >
                Reviews (3)
              </a>
            </li>
          </ul>
          <div className="tab-content p-4" id="myTabContent">
            {activeTab === "description" && (
              <div
              className={`tab-pane fade show active p-8 text-[15px] leading-6 text-[#7a7a7a]`}
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <div className="flex flex-col space-y-6">
                {/* Product Description */}
                <p className="text-lg font-medium text-gray-800">{product.description}</p>
            
                {/* Brand Information */}
                <div className="mt-4">
                  <span className="text-sm font-semibold text-gray-600">Brand:</span>
                  <p className="text-md text-gray-800">{product.brand}</p>
                </div>
            
                {/* Categories */}
                <div className="mt-4">
                  <span className="text-sm font-semibold text-gray-600">Categories:</span>
                  <p className="text-md text-gray-800">{product.categories.join(', ')}</p>
                </div>
            
                {/* Creation Date */}
                <div className="mt-4">
                  <span className="text-sm font-semibold text-gray-600">Created At:</span>
                  <p className="text-md text-gray-800">{new Date(product.createdAt).toLocaleDateString()}</p>
                </div>
            
                {/* Product Type */}
                <div className="mt-4">
                  <span className="text-sm font-semibold text-gray-600">Product Type:</span>
                  <p className="text-md text-gray-800">{product.productType}</p>
                </div>
            
                {/* Quantity Available */}
                <div className="mt-4">
                  <span className="text-sm font-semibold text-gray-600">Quantity Available:</span>
                  <p className="text-md text-gray-800">{product.quantity} units</p>
                </div>
            
                {/* Price */}
                <div className="mt-4">
                  <span className="text-sm font-semibold text-gray-600">Price:</span>
                  <p className="text-md font-semibold text-gray-800">₹{product.price}</p>
                </div>
              </div>
            </div>
            
            )}
            {activeTab === "review" && (
              <div
                className={`tab-pane fade show active`}
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div className="review-heading text-2xl font-semibold leading-6 mb-2 uppercase text-black">
                  REVIEWS
                </div>

                <div className="mt-4">
                  <div className="border-b border-border pb-2">
                    <p className="font-semibold">Kathryn Murphy</p>
                    <p className="text-muted-foreground">
                      The fit is perfect, and the quality is top-notch.
                    </p>
                    <span className="text-sm text-muted-foreground">
                      1 week ago
                    </span>
                  </div>
                  <div className="border-b border-border pb-2 mt-2">
                    <p className="font-semibold">Esther Howard</p>
                    <p className="text-muted-foreground">
                      I recently purchased the gray blazer jacket for women, and
                      I couldn't be happier with my purchase!
                    </p>
                    <span className="text-sm text-muted-foreground">
                      2 weeks ago
                    </span>
                  </div>
                  <div className="border-b border-border pb-2 mt-2">
                    <p className="font-semibold">Cameron Williamson</p>
                    <p className="text-muted-foreground">
                      I've received multiple compliments on how stylish it
                      looks.
                    </p>
                    <span className="text-sm text-muted-foreground">
                      2 weeks ago
                    </span>
                  </div>
                </div>
                <form className="review-form">
                  <div className="form-group clear-both mt-6 mb-4">
                    <label>Your rating</label>
                    <div className="reviews-counter">
                      <div className="rate inline-block">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label htmlFor="star5" title="text">
                          5 stars
                        </label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label htmlFor="star4" title="text">
                          4 stars
                        </label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label htmlFor="star3" title="text">
                          3 stars
                        </label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label htmlFor="star2" title="text">
                          2 stars
                        </label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label htmlFor="star1" title="text">
                          1 star
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group clear-both mb-4">
                    <label>Your message</label>
                    <textarea
                      className="form-control text-[14px] resize-none border p-2 w-full"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control text-[14px] h-10 border p-2 w-full"
                          placeholder="Name*"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control text-[14px] h-10 border p-2 w-full"
                          placeholder="Email Id*"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="round-black-btn uppercase cursor-pointer bg-black text-white px-4 py-2 mt-4">
                    Submit Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>


        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">Similar Products</h2>
          <Slider {...settings}>
            {deals.map((deal, index) => (
              <div key={index} className="flex gap-4 overflow-hidden w-full">
                <div className="bg-white text-gray-800 rounded-lg shadow-lg mb-10 p-4 w-60 flex-shrink-0 mx-auto relative">
                  <div className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-gray-800">
                      ⭐ {deal.rating}
                    </span>
                  </div>
                  <img
                    src={deal.imageLink[0]}
                    alt={deal.name}
                    className="h-40 mx-auto mb-2"
                  />
                  <h3 className="text-sm font-semibold mb-1">{deal.name}</h3>
                  <p className="text-lg font-bold">
                  ₹{deal.price+10}
                    <span className="line-through text-gray-400 ml-4">
                      {deal.price+100}
                    </span>
                  </p>
                  <p className="text-green-600 text-sm font-semibold mb-3">
                    GET {deal.price} % off
                  </p>
                  <button onClick={() => handleAddToCart(deal)} className="bg-teal-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-teal-600">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;






























// import React, { useState } from "react";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");
//   const thumbnails = [
//     'https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448191_0_3.jpg',
//     'https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448192_1_3.jpg',
//     'https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448194_3_3.jpg',
//     'https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448195_4_3.jpg',
//     'https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_448196_5_3.jpg',
//     'https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_737327_6_2.jpg',
//     'https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_737328_7_2.jpg',
//     'https://www.netmeds.com/images/product-v1/600x600/1055859/wellbeing%C2%A0nutrition%C2%A0slow%C2%A0multi_omega_for_her_multivitamin_vegan_omega_3_oil_b_complex_746148_8_1.jpg',
//   ];

//   const similarProducts = [
//     {
//       id: 1,
//       image: 'https://example.com/similar-product1.jpg',
//       title: 'Vitamin C 1000mg Tablets',
//       price: '$25',
//     },
//     {
//       id: 2,
//       image: 'https://example.com/similar-product2.jpg',
//       title: 'Omega-3 Fish Oil Capsules',
//       price: '$30',
//     },
//     {
//       id: 3,
//       image: 'https://example.com/similar-product3.jpg',
//       title: 'Calcium + D3 Tablets',
//       price: '$15',
//     },
//   ];

//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const visibleThumbnails = thumbnails.slice(startIndex, startIndex + 3);

//   const nextThumbnails = () => {
//     if (selectedIndex < thumbnails.length - 1) {
//       setSelectedIndex((prevIndex) => {
//         const newIndex = prevIndex + 1;
//         if (newIndex >= startIndex + 3 && startIndex + 3 < thumbnails.length) {
//           setStartIndex(startIndex + 1);
//         }
//         return newIndex;
//       });
//     }
//   };

//   const prevThumbnails = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex((prevIndex) => {
//         const newIndex = prevIndex - 1;
//         if (newIndex < startIndex && startIndex > 0) {
//           setStartIndex(startIndex - 1);
//         }
//         return newIndex;
//       });
//     }
//   };

//   const handleThumbnailClick = (index) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <>
//       <div className="container mx-auto p-6 mt-36">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex flex-col">
//             {/* Main image */}
//             <img className="h-[30rem] rounded-lg" src={thumbnails[selectedIndex]} alt="Main Product" />

//             {/* Thumbnails carousel */}
//             <div className="flex justify-center mt-4">
//               <div className="relative w-full max-w-[500px] flex items-center">
//                 <button onClick={prevThumbnails} className="absolute left-0 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110">
//                   &#10094;
//                 </button>

//                 <div className="flex space-x-2 mx-auto">
//                   {visibleThumbnails.map((thumbnail, index) => (
//                     <img
//                       key={startIndex + index}
//                       className={`w-16 h-16 rounded-lg cursor-pointer ${selectedIndex === startIndex + index ? 'border-2 border-black' : ''}`}
//                       src={thumbnail}
//                       alt={`Thumbnail ${startIndex + index + 1}`}
//                       onClick={() => handleThumbnailClick(startIndex + index)}
//                     />
//                   ))}
//                 </div>

//                 <button onClick={nextThumbnails} className="absolute right-0 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110">
//                   &#10095;
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-2xl font-bold">Multivitamin Complex</h1>
//             <div className="flex items-center mt-2">
//               <span className="text-yellow-500">★★★★☆</span>
//               <span className="ml-2 text-gray-600">(4.7)</span>
//             </div>
//             <p className="text-xl font-semibold mt-4">$40</p>
//             <div className="mt-4">
//               <label htmlFor="size" className="block text-sm font-medium">Dosage Form</label>
//               <select id="dosageForm" className="mt-1 block w-full border rounded-md p-2">
//                 <option>Tablets</option>
//                 <option>Capsules</option>
//                 <option>Softgels</option>
//               </select>
//             </div>
//             <div className="mt-4">
//               <label htmlFor="quantity" className="block text-sm font-medium">Quantity</label>
//               <input id="quantity" type="number" className="mt-1 block w-full border rounded-md p-2" defaultValue="1" min="1" />
//             </div>
//             <button className="bg-blue-600 text-white hover:bg-blue-500 mt-4 p-2 rounded-lg">Add to cart</button>
//           </div>
//         </div>

//         <div className="product-info-tabs mt-12">
//           <ul className="flex border-b-2 border-gray-300">
//             <li className="mr-4">
//               <button
//                 className={`px-4 py-2 ${activeTab === "description" ? "border-b-2 font-bold" : ""}`}
//                 onClick={() => setActiveTab("description")}
//               >
//                 Description
//               </button>
//             </li>
//             <li className="mr-4">
//               <button
//                 className={`px-4 py-2 ${activeTab === "review" ? "border-b-2 font-bold" : ""}`}
//                 onClick={() => setActiveTab("review")}
//               >
//                 Reviews (5)
//               </button>
//             </li>
//           </ul>
//           <div className="p-4">
//             {activeTab === "description" && (
//               <div className="text-gray-700">
//                 <p>This premium multivitamin complex is designed to support daily health with a robust blend of essential vitamins and minerals, including:</p>
//                 <ul className="list-disc ml-6 mt-2">
//                   <li>Vitamins A, C, D, and E to support immunity and skin health</li>
//                   <li>B-complex vitamins for energy metabolism</li>
//                   <li>Calcium, magnesium, and zinc for bone health</li>
//                   <li>Antioxidants to fight free radicals and support cellular health</li>
//                 </ul>
//                 <p className="mt-4">This supplement is ideal for individuals seeking enhanced nutritional support, stress relief, and overall wellness. Formulated with non-GMO ingredients, it's free from artificial colors, flavors, and preservatives.</p>
//               </div>
//             )}
//             {activeTab === "review" && (
//               <div>
//                 <div className="text-lg font-semibold mb-2">Customer Reviews</div>
//                 <div className="mb-4">
//                   <p className="font-semibold">Emily R.</p>
//                   <p>Great product! I've noticed an increase in my energy levels.</p>
//                   <span className="text-sm text-gray-500">3 days ago</span>
//                 </div>
//                 <div className="mb-4">
//                   <p className="font-semibold">John T.</p>
//                   <p>Good quality multivitamins, easy to swallow, and effective.</p>
//                   <span className="text-sm text-gray-500">1 week ago</span>
//                 </div>
//                 <div className="mb-4">
//                   <p className="font-semibold">Sara L.</p>
//                   <p>After a month, my immunity feels stronger, and I’m less fatigued.</p>
//                   <span className="text-sm text-gray-500">2 weeks ago</span>
//                 </div>
//                 <div className="mb-4">
//                   <p className="font-semibold">Raj M.</p>
//                   <p>It’s helped my energy levels. Noticed better sleep as well.</p>
//                   <span className="text-sm text-gray-500">3 weeks ago</span>
//                 </div>
//                 <div className="mb-4">
//                   <p className="font-semibold">Mia C.</p>
//                   <p>A bit on the pricey side, but the quality is excellent.</p>
//                   <span className="text-sm text-gray-500">1 month ago</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;

// import React, { useState } from "react";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");

//   const thumbnails = [
//     'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
//     'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MnwzMjk3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
//     'https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60',
//   ];

//   const similarProducts = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1505751175028-125797c85092?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//       title: 'Casual Shirt',
//       price: '$35',
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1506507589020-9bfa216e06de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//       title: 'Slim Fit Trousers',
//       price: '$45',
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1543878020-6b7f9f78c992?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//       title: 'Leather Jacket',
//       price: '$150',
//     },
//     {
//       id: 4,
//       image: 'https://images.unsplash.com/photo-1502271142050-b4a7ef36a8f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//       title: 'Denim Jacket',
//       price: '$100',
//     },
//     {
//       id: 5,
//       image: 'https://images.unsplash.com/photo-1525239130613-7d5033f5e8b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//       title: 'Stylish Blazer',
//       price: '$80',
//     },
//   ];

//   const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
//   const [thumbnailSelectedIndex, setThumbnailSelectedIndex] = useState(0);
//   const [similarStartIndex, setSimilarStartIndex] = useState(0);

//   const visibleThumbnails = thumbnails.slice(thumbnailStartIndex, thumbnailStartIndex + 3);

//   const nextThumbnails = () => {
//     if (thumbnailSelectedIndex < thumbnails.length - 1) {
//       setThumbnailSelectedIndex((prevIndex) => {
//         const newIndex = prevIndex + 1;
//         if (newIndex >= thumbnailStartIndex + 3 && thumbnailStartIndex + 3 < thumbnails.length) {
//           setThumbnailStartIndex(thumbnailStartIndex + 1);
//         }
//         return newIndex;
//       });
//     }
//   };

//   const prevThumbnails = () => {
//     if (thumbnailSelectedIndex > 0) {
//       setThumbnailSelectedIndex((prevIndex) => {
//         const newIndex = prevIndex - 1;
//         if (newIndex < thumbnailStartIndex && thumbnailStartIndex > 0) {
//           setThumbnailStartIndex(thumbnailStartIndex - 1);
//         }
//         return newIndex;
//       });
//     }
//   };

//   const nextSimilarProducts = () => {
//     if (similarStartIndex + 3 < similarProducts.length) {
//       setSimilarStartIndex(similarStartIndex + 1);
//     }
//   };

//   const prevSimilarProducts = () => {
//     if (similarStartIndex > 0) {
//       setSimilarStartIndex(similarStartIndex - 1);
//     }
//   };

//   const handleThumbnailClick = (index) => {
//     setThumbnailSelectedIndex(index);
//   };

//   return (
//     <>
//       <div className="container mx-auto p-6 mt-36">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="flex flex-col">
//             <img className="h-[30rem] rounded-lg" src={thumbnails[thumbnailSelectedIndex]} alt="Main Image" />
//             <div className="flex justify-center">
//               <div className="relative w-full max-w-[500px] flex items-center mt-4">
//                 <button
//                   onClick={prevThumbnails}
//                   className="absolute left-0 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-800 focus:outline-none"
//                   disabled={thumbnailSelectedIndex === 0}
//                 >
//                   &#10094;
//                 </button>

//                 <div className="flex space-x-2 mx-auto">
//                   {visibleThumbnails.map((thumbnail, index) => (
//                     <img
//                       key={thumbnailStartIndex + index}
//                       className={`w-16 h-16 rounded-lg cursor-pointer ${thumbnailSelectedIndex === thumbnailStartIndex + index ? 'border-2 border-black' : ''}`}
//                       src={thumbnail}
//                       alt={`Thumbnail ${thumbnailStartIndex + index + 1}`}
//                       onClick={() => handleThumbnailClick(thumbnailStartIndex + index)}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={nextThumbnails}
//                   className="absolute right-0 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-110 hover:bg-gray-800 focus:outline-none"
//                   disabled={thumbnailSelectedIndex === thumbnails.length - 1}
//                 >
//                   &#10095;
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <h1 className="text-2xl font-bold">Blazer Jacket</h1>
//             <div className="flex items-center mt-2">
//               <span className="text-yellow-500">★★★★☆</span>
//               <span className="text-muted-foreground ml-2">(4.9)</span>
//             </div>
//             <p className="text-xl font-semibold mt-4">$2500</p>
//             <div className="mt-4">
//               <label htmlFor="size" className="block text-sm font-medium">Available Size</label>
//               <select id="size" className="mt-1 block w-full border border-border rounded-md p-2">
//                 <option>S</option>
//                 <option>M</option>
//                 <option>L</option>
//               </select>
//             </div>
//             <div className="mt-4">
//               <label htmlFor="color" className="block text-sm font-medium">Available Color</label>
//               <select id="color" className="mt-1 block w-full border border-border rounded-md p-2">
//                 <option>Red</option>
//                 <option>Blue</option>
//                 <option>Green</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10">
//           <ul className="flex justify-center space-x-4">
//             <li
//               className={`cursor-pointer p-2 ${activeTab === 'description' ? 'border-b-2 border-primary text-primary' : ''}`}
//               onClick={() => setActiveTab('description')}
//             >
//               Description
//             </li>
//             <li
//               className={`cursor-pointer p-2 ${activeTab === 'reviews' ? 'border-b-2 border-primary text-primary' : ''}`}
//               onClick={() => setActiveTab('reviews')}
//             >
//               Reviews
//             </li>
//           </ul>
//           <div className="mt-4">
//             {activeTab === 'description' && <p>Details about the blazer jacket will be shown here.</p>}
//             {activeTab === 'reviews' && <p>Customer reviews will be shown here.</p>}
//           </div>
//         </div>

//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
//           <div className="relative w-full">
//             <button
//               onClick={prevSimilarProducts}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 hover:bg-gray-800 focus:outline-none"
//               disabled={similarStartIndex === 0}
//             >
//               &#10094;
//             </button>

//             <div className="grid grid-cols-3 gap-4 mx-auto">
//               {similarProducts.slice(similarStartIndex, similarStartIndex + 3).map((product) => (
//                 <div key={product.id} className="flex flex-col items-center border border-border p-4 rounded-lg">
//                   <img className="w-full h-40 object-cover rounded-lg" src={product.image} alt={product.title} />
//                   <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
//                   <p className="text-muted-foreground">{product.price}</p>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={nextSimilarProducts}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 hover:bg-gray-800 focus:outline-none"
//               disabled={similarStartIndex + 3 >= similarProducts.length}
//             >
//               &#10095;
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;

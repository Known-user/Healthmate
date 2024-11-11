// import React from 'react';

// const ProductGrid = ({ product }) => {
//   const { title, price, salePrice, image1, image2 } = product;

//   const [isWishlistItemHovered, setIsWishlistItemHovered] = React.useState(false);

//   const handleWishlistHover = () => {
//     setIsWishlistItemHovered(true);
//   };

//   const handleWishlistLeave = () => {
//     setIsWishlistItemHovered(false);
//   };

//   return (
//     <div className="w-full mb-8">
//       <div className=" font-montserrat text-center product-grid relative group h-auto min-w-[350px] max-md:min-w-[300px] max-lg:min-w-[250px] mx-auto"> {/* Added min-width */}
//         <div className="overflow-hidden relative product-image h-[200px] md:h-[250px] lg:h-[250px] flex items-center justify-center">
//           <a href="#" className="block image h-full w-full">
//             {/* First image */}
//             <img
//               className="h-full w-full object-cover transition-transform duration-300 ease-linear pic-1 group-hover:translate-x-full"
//               src={image1}
//               alt={title}
//             />
//             {/* Second image */}
//             <img
//               className="h-full w-full object-cover absolute top-0 left-0 transition-transform duration-300 ease-linear pic-2 transform -translate-x-full group-hover:translate-x-0"
//               src={image2}
//               alt={title}
//             />
//           </a>
//           {salePrice && (
//             <span className="absolute top-4 left-4 text-white bg-blue-900 text-[13px] uppercase tracking-[1px] py-0.5 px-2 product-sale-label">
//               Sale
//             </span>
//           )}
//           <a
//             href="#"
//             className="group absolute top-4 right-4 text-gray-600 text-[22px] leading-[20px] transition-colors duration-300 ease-linear product-like-icon hover:text-blue-900"
//             onMouseEnter={handleWishlistHover}
//             onMouseLeave={handleWishlistLeave}
//           >
//             <i className="far fa-heart"></i>
//             {isWishlistItemHovered && (
//               <>
//                 <span className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-linear bg-black text-white text-[12px] py-1 px-2 rounded-md top-[30px] right-0 z-10">
//                   Add to Wishlist
//                 </span>
//                 <span className="absolute invisible opacity-0 hover:visible hover:opacity-100 transition-opacity duration-300 ease-linear bg-black w-[15px] h-[15px] transform rotate-45 top-[22px] right-[50%] translate-x-[50%] z-0"></span>
//               </>
//             )}
//           </a>
//           <ul className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-linear opacity-0 group-hover:bottom-10 group-hover:opacity-100 w-[170px] p-0 list-none product-links">
//             <li className="inline-block mx-[2px]">
//               <a
//                 href="#"
//                 className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
//               >
//                 <i className="fa fa-search"></i>
//               </a>
//             </li>
//             <li className="inline-block mx-[2px]">
//               <a
//                 href="#"
//                 className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
//               >
//                 <i className="fas fa-shopping-cart"></i>
//               </a>
//             </li>
//             <li className="inline-block mx-[2px]">
//               <a
//                 href="#"
//                 className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
//               >
//                 <i className="fa fa-random"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="text-left pt-4 product-content">
//           <h3 className="mb-2 font-medium text-[14px] capitalize title">
//             <a
//               href="#"
//               className="text-[16px] md:text-[18px] font-semibold text-gray-800 transition-colors duration-300 ease-linear hover:text-blue-900"
//             >
//               {title}
//             </a>
//           </h3>
//           <div className="text-blue-900 text-[16px] font-medium price">
//             {salePrice ? (
//               <>
//                 <span className="text-gray-600 text-[14px] font-normal line-through mr-2">
//                   ${price}
//                 </span>
//                 ${salePrice}
//               </>
//             ) : (
//               <>${price}</>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>



//     // <div className="w-full px-4 mb-8">
//     //   <div className="bg-white font-montserrat text-center product-grid relative group h-auto max-w-[300px] min-w-[200px] mx-auto"> {/* Added min-width */}
//     //     <div className="overflow-hidden relative product-image h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center">
//     //       <a href="#" className="block image h-full w-full">
//     //         {/* First image */}
//     //         <img
//     //           className="h-full w-full object-cover transition-transform duration-300 ease-linear pic-1 group-hover:translate-x-full"
//     //           src={image1}
//     //           alt={title}
//     //         />
//     //         {/* Second image */}
//     //         <img
//     //           className="h-full w-full object-cover absolute top-0 left-0 transition-transform duration-300 ease-linear pic-2 transform -translate-x-full group-hover:translate-x-0"
//     //           src={image2}
//     //           alt={title}
//     //         />
//     //       </a>
//     //       {salePrice && (
//     //         <span className="absolute top-4 left-4 text-white bg-blue-900 text-[13px] uppercase tracking-[1px] py-0.5 px-2 product-sale-label">
//     //           Sale
//     //         </span>
//     //       )}
//     //       <a
//     //         href="#"
//     //         className="group absolute top-4 right-4 text-gray-600 text-[22px] leading-[20px] transition-colors duration-300 ease-linear product-like-icon hover:text-blue-900"
//     //         onMouseEnter={handleWishlistHover}
//     //         onMouseLeave={handleWishlistLeave}
//     //       >
//     //         <i className="far fa-heart"></i>
//     //         {isWishlistItemHovered && (
//     //           <>
//     //             <span className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-linear bg-black text-white text-[12px] py-1 px-2 rounded-md top-[30px] right-0 z-10">
//     //               Add to Wishlist
//     //             </span>
//     //             <span className="absolute invisible opacity-0 hover:visible hover:opacity-100 transition-opacity duration-300 ease-linear bg-black w-[15px] h-[15px] transform rotate-45 top-[22px] right-[50%] translate-x-[50%] z-0"></span>
//     //           </>
//     //         )}
//     //       </a>
//     //       <ul className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-linear opacity-0 group-hover:bottom-10 group-hover:opacity-100 w-[170px] p-0 list-none product-links">
//     //         <li className="inline-block mx-[2px]">
//     //           <a
//     //             href="#"
//     //             className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
//     //           >
//     //             <i className="fa fa-search"></i>
//     //           </a>
//     //         </li>
//     //         <li className="inline-block mx-[2px]">
//     //           <a
//     //             href="#"
//     //             className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
//     //           >
//     //             <i className="fas fa-shopping-cart"></i>
//     //           </a>
//     //         </li>
//     //         <li className="inline-block mx-[2px]">
//     //           <a
//     //             href="#"
//     //             className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
//     //           >
//     //             <i className="fa fa-random"></i>
//     //           </a>
//     //         </li>
//     //       </ul>
//     //     </div>
//     //     <div className="text-left pt-4 product-content">
//     //       <h3 className="mb-2 font-medium text-[14px] capitalize title">
//     //         <a
//     //           href="#"
//     //           className="text-[16px] md:text-[18px] font-semibold text-gray-800 transition-colors duration-300 ease-linear hover:text-blue-900"
//     //         >
//     //           {title}
//     //         </a>
//     //       </h3>
//     //       <div className="text-blue-900 text-[16px] font-medium price">
//     //         {salePrice ? (
//     //           <>
//     //             <span className="text-gray-600 text-[14px] font-normal line-through mr-2">
//     //               ${price}
//     //             </span>
//     //             ${salePrice}
//     //           </>
//     //         ) : (
//     //           <>${price}</>
//     //         )}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// const Products = ({ products }) => {
//   return (
//     <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {products.map((product) => (
//         <ProductGrid key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default Products;





import React from 'react';

const ProductGrid = ({ product }) => {
  const { title, price, salePrice, image1, image2 } = product;

  const [isWishlistItemHovered, setIsWishlistItemHovered] = React.useState(false);

  const handleWishlistHover = () => {
    setIsWishlistItemHovered(true);
  };

  const handleWishlistLeave = () => {
    setIsWishlistItemHovered(false);
  };

  return (
    <div className="w-full mb-8">
 
    <div key={product.id} className="font-montserrat text-center product-grid relative group h-auto mx-auto">
      <div className="overflow-hidden relative product-image h-[200px] md:h-[250px] flex items-center justify-center">
        <a href="#" className="block image h-full w-full">
          {/* Handling Image Swapping */}
          <img
            className="h-full w-full object-contain bg-white transition-transform duration-300 ease-linear pic-1 group-hover:translate-x-full"
            src={product.imageLink[0]}  // First image as default
            alt={product.name}
          />
          <img
            className="h-full w-full object-contain bg-white absolute top-0 left-0 transition-transform duration-300 ease-linear pic-2 transform -translate-x-full group-hover:translate-x-0"
            src={product.imageLink[1]}  // Second image for hover effect
            alt={product.name}
          />
        </a>
        {product.salePrice && (
          <span className="absolute top-4 left-4 text-white bg-blue-900 text-[13px] uppercase tracking-[1px] py-0.5 px-2 product-sale-label">
            Sale
          </span>
        )}
        <a
          href="#"
          className="group absolute top-4 right-4 text-gray-600 text-[22px] leading-[20px] transition-colors duration-300 ease-linear product-like-icon hover:text-blue-900"
          onMouseEnter={handleWishlistHover}
          onMouseLeave={handleWishlistLeave}
        >
          <i className="far fa-heart"></i>
          {isWishlistItemHovered && (
            <>
              <span className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-linear bg-black text-white text-[12px] py-1 px-2 rounded-md top-[30px] right-0 z-10">
                Add to Wishlist
              </span>
              <span className="absolute invisible opacity-0 hover:visible hover:opacity-100 transition-opacity duration-300 ease-linear bg-black w-[15px] h-[15px] transform rotate-45 top-[22px] right-[50%] translate-x-[50%] z-0"></span>
            </>
          )}
        </a>
        <ul className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-linear opacity-0 group-hover:bottom-10 group-hover:opacity-100 w-[170px] p-0 list-none product-links">
          <li className="inline-block mx-[2px]">
            <a
              href="#"
              className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
            >
              <i className="fa fa-search"></i>
            </a>
          </li>
          <li className="inline-block mx-[2px]">
            <a
              href="#"
              className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
            >
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li className="inline-block mx-[2px]">
            <a
              href="#"
              className="w-[48px] h-[48px] bg-blue-900 text-white text-[16px] leading-[48px] rounded-full transition-colors duration-300 ease-linear hover:bg-gray-800 flex items-center justify-center"
            >
              <i className="fa fa-random"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-left pt-4 product-content">
        <h3 className="mb-2 font-medium text-[14px] capitalize title">
          <a
            href="#"
            className="text-[16px] md:text-[18px] font-semibold text-gray-800 transition-colors duration-300 ease-linear hover:text-blue-900"
          >
            {product.name}
          </a>
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p> {/* Displaying brand */}
        <div className="text-blue-900 text-[16px] font-medium price">
          {product.salePrice ? (
            <>
              <span className="text-gray-600 text-[14px] font-normal line-through mr-2">
              ₹{product.price}
              </span>
              ₹{product.salePrice}
            </>
          ) : (
            <>₹{product.price}</>
          )}
        </div>
      </div>
    </div>
</div>

  );
};

const Products = ({ products }) => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8">
      {products.map((product) => (
        <ProductGrid key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;



// import { useState } from 'react';

// const ProductGallery = () => {
//   const thumbnails = [
//     'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
//     'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MnwzMjk3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
//     'https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60',
//   ];

//   const [startIndex, setStartIndex] = useState(0); // Starting index for the carousel
//   const [selectedIndex, setSelectedIndex] = useState(0); // Index of the currently selected main image

//   const visibleThumbnails = thumbnails.slice(startIndex, startIndex + 3); // Display 3 thumbnails at a time

//   // Function to handle the next arrow click
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

//   // Function to handle the previous arrow click
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

//   // Handle when the user clicks directly on a thumbnail
//   const handleThumbnailClick = (index) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div className="flex flex-col">
//         {/* Main image */}
//         <img className="h-[30rem] rounded-lg" src={thumbnails[selectedIndex]} alt="Main Image" />

//         {/* Thumbnails carousel */}
//         <div className="relative flex items-center mt-4">
//           {/* Left arrow */}
//           <button
//             onClick={prevThumbnails}
//             className="absolute left-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors z-10"
//             disabled={selectedIndex === 0}
//           >
//             &#10094;
//           </button>

//           <div className="flex space-x-2 mx-auto">
//             {visibleThumbnails.map((thumbnail, index) => (
//               <img
//                 key={startIndex + index}
//                 className={`w-16 h-16 rounded-lg cursor-pointer border-2 ${
//                   selectedIndex === startIndex + index ? 'border-blue-500' : 'border-transparent'
//                 }`}
//                 src={thumbnail}
//                 alt={`Thumbnail ${startIndex + index + 1}`}
//                 onClick={() => handleThumbnailClick(startIndex + index)}
//               />
//             ))}
//           </div>

//           {/* Right arrow */}
//           <button
//             onClick={nextThumbnails}
//             className="absolute right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors z-10"
//             disabled={selectedIndex === thumbnails.length - 1}
//           >
//             &#10095;
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <h1 className="text-2xl font-bold">Blazer Jacket</h1>
//         <div className="flex items-center mt-2">
//           <span className="text-yellow-500">★★★★☆</span>
//           <span className="text-muted-foreground ml-2">(4.9)</span>
//         </div>
//         <p className="text-xl font-semibold mt-4">$2500</p>
//         <div className="mt-4">
//           <label htmlFor="size" className="block text-sm font-medium">
//             Available Size
//           </label>
//           <select
//             id="size"
//             className="mt-1 block w-full border border-border rounded-md p-2"
//           >
//             <option>S</option>
//             <option>M</option>
//             <option>L</option>
//           </select>
//         </div>
//         <div className="mt-4">
//           <label htmlFor="color" className="block text-sm font-medium">
//             Available Color
//           </label>
//           <select
//             id="color"
//             className="mt-1 block w-full border border-border rounded-md p-2"
//           >
//             <option>Gray</option>
//             <option>Black</option>
//             <option>Blue</option>
//           </select>
//         </div>
//         <div className="flex items-center mt-4">
//           <label htmlFor="quantity" className="block text-sm font-medium">
//             Last left - make it yours!
//           </label>
//           <input
//             id="quantity"
//             type="number"
//             className="ml-2 border border-border rounded-md w-16 p-1"
//             value="1"
//             min="1"
//           />
//         </div>
//         <button className="bg-[#18181B] text-white hover:bg-[#18181bd0] mt-4 p-2 rounded-lg">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductGallery;

import { useState } from 'react';

const ProductGallery = () => {
  const thumbnails = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MnwzMjk3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80',
    'https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60',
  ];

  const [startIndex, setStartIndex] = useState(0); // Starting index for the carousel
  const [selectedIndex, setSelectedIndex] = useState(0); // Index of the currently selected main image

  const visibleThumbnails = thumbnails.slice(startIndex, startIndex + 3); // Display 3 thumbnails at a time

  // Function to handle the next arrow click
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

  // Function to handle the previous arrow click
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

  // Handle when the user clicks directly on a thumbnail
  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        {/* Main image */}
        <img className="h-[30rem] rounded-lg" src={thumbnails[selectedIndex]} alt="Main Image" />

        {/* Thumbnails carousel */}
        <div className="relative flex items-center mt-4">
          {/* Left arrow */}
          <button
            onClick={prevThumbnails}
            className="absolute left-0 bg-gray-700 text-white p-2 rounded-full"
            disabled={selectedIndex === 0}
          >
            &#10094;
          </button>

          <div className="flex space-x-2 mx-auto">
            {visibleThumbnails.map((thumbnail, index) => (
              <img
                key={startIndex + index}
                className={`w-16 h-16 rounded-lg cursor-pointer ${
                  selectedIndex === startIndex + index ? 'border-2 border-black' : ''
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
            className="absolute right-0 bg-gray-700 text-white p-2 rounded-full"
            disabled={selectedIndex === thumbnails.length - 1}
          >
            &#10095;
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Blazer Jacket</h1>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="text-muted-foreground ml-2">(4.9)</span>
        </div>
        <p className="text-xl font-semibold mt-4">$2500</p>
        <div className="mt-4">
          <label htmlFor="size" className="block text-sm font-medium">
            Available Size
          </label>
          <select
            id="size"
            className="mt-1 block w-full border border-border rounded-md p-2"
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="color" className="block text-sm font-medium">
            Available Color
          </label>
          <select
            id="color"
            className="mt-1 block w-full border border-border rounded-md p-2"
          >
            <option>Gray</option>
            <option>Black</option>
            <option>Blue</option>
          </select>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="quantity" className="block text-sm font-medium">
            Last left - make it yours!
          </label>
          <input
            id="quantity"
            type="number"
            className="ml-2 border border-border rounded-md w-16 p-1"
            value="1"
            min="1"
          />
        </div>
        <button className="bg-[#18181B] text-white hover:bg-[#18181bd0] mt-4 p-2 rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;

// import React, { useState } from 'react';

// const Dropdown = ({ title, items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <button className="font-semibold hover:text-gray-300">
//         {title}
//       </button>
      
//       {isOpen && (
//         <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded shadow-lg z-10 p-4">
//           <div className="grid grid-cols-2 gap-4">
//             {items.map((item, index) => (
//               <div key={index} className="mb-2">
//                 <h4 className="font-bold text-teal-500">{item.name}</h4>
//                 <ul className="mt-2 space-y-1">
//                   {item.subItems.map((subItem, idx) => (
//                     <li key={idx} className="text-sm hover:text-teal-500">
//                       {subItem}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;



import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Dropdown = ({ title, Icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Menu Button */}
      <button className="flex items-center font-semibold text-white hover:text-gray-300 px-4 py-4">
        <Icon className="mr-2 text-lg" /> {/* Icon for the menu item */}
        {title}
        <FiChevronDown className="ml-1" /> {/* Arrow icon */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 bg-white text-gray-800 rounded shadow-lg z-10">
          <div className="p-4 flex gap-4">
            {items.map((item, index) => (
              <div key={index} className="min-w-[150px]">
                <h4 className="font-bold text-teal-600 mb-2">{item.name}</h4>
                <ul className="space-y-1">
                  {item.subItems.map((subItem, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 hover:text-teal-600 cursor-pointer"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

// import React, { useState } from 'react';
// import { FiChevronDown } from 'react-icons/fi';

// const Dropdown = ({ title, Icon, items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       {/* Menu Button */}
//       <button className="flex items-center font-semibold text-white hover:text-gray-300 px-4 py-4">
//         <Icon className="mr-2 text-lg" /> {/* Icon for the menu item */}
//         {title}
//         <FiChevronDown className="ml-1" /> {/* Arrow icon */}
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute left-0 bg-white text-gray-800 rounded shadow-lg z-10">
//           <div className="p-4 flex gap-4">
//             {items.map((item, index) => (
//               <div key={index} className="min-w-[150px]">
//                 <h4 className="font-bold text-teal-600 mb-2">{item.name}</h4>
//                 <ul className="space-y-1">
//                   {item.subItems.map((subItem, idx) => (
//                     <li
//                       key={idx}
//                       className="text-sm text-gray-700 hover:text-teal-600 cursor-pointer"
//                     >
//                       {subItem}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

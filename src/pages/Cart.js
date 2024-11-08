// import React from "react";
// import "font-awesome/css/font-awesome.min.css";

// function Cart() {
//   return (
//     <>
//       <div className="min-h-screen mt-20 bg-[#f1f2f3]">
//         <div className="w-[90%] mx-auto bg-[#f1f2f3] font-['Open_Sans'] py-10">
//           <div id="cart_layout_2">
//             <h1 className="text-5xl font-bold mb-5">Shopping Cart</h1>

//             <div className="cart_details w-full border-t-2 border-b-2 border-gray-400 relative min-h-[270px] max-h-[300px] mb-5">
//               <div className="item w-[30%] float-left">
//                 <h3 className="border-b-2 border-gray-400 pl-2">Item</h3>
//                 <div className="product_image">
//                   <img
//                     className="max-h-[200px] max-w-full"
//                     src="https://i.imgur.com/OOhreHb.jpg"
//                     alt="Product"
//                   />
//                 </div>
//                 <div className="product_details block mx-auto w-[80%] mb-4">
//                   <span className="mr-2">Maxwell Frame</span>
//                   <span>Black</span>
//                 </div>
//               </div>

//               <div className="price w-[15%] float-left ml-[5%]">
//                 <h3 className="border-b-2 border-gray-400 pl-2">Price</h3>
//                 <div className="center mt-2 text-center">
//                   <span>$99.95</span>
//                 </div>
//               </div>

//               <div className="qty w-[15%] float-left ml-[5%]">
//                 <h3 className="border-b-2 border-gray-400 pl-2">Qty</h3>
//                 <div className="center mt-2 text-center">
//                   <input
//                     type="number"
//                     className="w-10 h-7 border border-gray-300 rounded"
//                   />
//                 </div>
//               </div>

//               <div className="total w-[15%] float-left ml-[5%]">
//                 <h3 className="border-b-2 border-gray-400 pl-2">Total</h3>
//                 <div className="center mt-2 text-center">
//                   <span>$99.95</span>
//                 </div>
//               </div>

//               <div className="remove w-[10%] float-left text-center text-crimson">
//                 <div className="center mt-2 text-center">
//                   <i className="fa fa-times-circle text-2xl hover:text-3xl transition-all duration-500"></i>
//                 </div>
//               </div>
//             </div>

//             <div className="complete_cart w-full float-left">
//               <div className="update w-[50%] float-left mr-[5%]">
//                 <div className="coupon w-full float-left border-b border-gray-300">
//                   <h2 className="w-[35%] float-left text-lg">Coupon Code</h2>
//                   <input
//                     type="text"
//                     className="w-[28%] ml-2 float-left mt-2 border border-gray-300 rounded h-8"
//                   />
//                   <a
//                     className="w-[28%] ml-2 float-left inline-block mt-2 rounded bg-[#a9e200] text-white text-center py-1 no-underline"
//                     href="#"
//                   >
//                     Update Cart
//                   </a>
//                 </div>

//                 <div className="shipping w-full float-left mt-4">
//                   <h3 className="text-lg">Estimate Shipping</h3>
//                   <div className="state w-[50%] float-left h-9 overflow-hidden bg-white border border-gray-300 rounded">
//                     <select
//                       id="state"
//                       className="w-full h-full p-2 appearance-none"
//                     >
//                       <option value="1">Alabama</option>
//                       <option value="2">Alaska</option>
//                       <option value="3">Arizona</option>
//                       <option value="4">Etc.</option>
//                     </select>
//                   </div>
//                   <input
//                     type="text"
//                     className="zip w-[45%] ml-[5%] border border-gray-300 rounded h-9 box-border"
//                   />
//                   <div className="est_btn w-full float-left mt-4">
//                     <a
//                       className="w-[50%] mx-auto block bg-[#a9e200] text-white text-center py-1 no-underline"
//                       href="#"
//                     >
//                       Estimate
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="checkout w-[45%] float-left">
//                 <div className="subtotal mb-5">
//                   <h2 className="w-[50%] float-left">Subtotal:</h2>
//                   <span className="finalprice w-[40%] float-left text-xl">
//                     $99.95
//                   </span>
//                   <a className="refresh w-[10%] float-left">
//                     <i className="fa fa-refresh transition-all duration-1000"></i>
//                   </a>
//                 </div>
//                 <div className="complete w-full float-left text-3xl mt-5">
//                   <a
//                     className="block w-full bg-[#a9e200] text-white text-center py-2 no-underline"
//                     href="#"
//                   >
//                     Checkout
//                   </a>
//                 </div>
//               </div>

//               <div className="update mobile hidden">
//                 <div className="coupon w-full float-left border-b border-gray-300 py-4">
//                   <h2 className="w-[50%] float-left text-lg">Coupon Code</h2>
//                   <input
//                     type="text"
//                     className="w-[48%] ml-1 float-left mt-2 border border-gray-300 rounded h-8"
//                   />
//                   <a
//                     className="w-full bg-[#a9e200] text-white text-center py-1 no-underline mt-4"
//                     href="#"
//                   >
//                     Update Cart
//                   </a>
//                 </div>
//                 <div className="shipping w-full float-left mt-4">
//                   <h3 className="text-lg">Estimate Shipping</h3>
//                   <div className="state w-[50%] float-left h-9 overflow-hidden bg-white border border-gray-300 rounded">
//                     <select
//                       id="state"
//                       className="w-full h-full p-2 appearance-none"
//                     >
//                       <option value="1">Alabama</option>
//                       <option value="2">Alaska</option>
//                       <option value="3">Arizona</option>
//                       <option value="4">Etc.</option>
//                     </select>
//                   </div>
//                   <input
//                     type="text"
//                     className="zip w-[45%] ml-[5%] border border-gray-300 rounded h-9 box-border"
//                   />
//                   <div className="est_btn w-full float-left mt-4">
//                     <a
//                       className="w-[50%] mx-auto block bg-[#a9e200] text-white text-center py-1 no-underline"
//                       href="#"
//                     >
//                       Estimate
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item, onRemove, onEdit }) => {
  return (
    <div className="flex p-6 border border-gray-300 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover mr-6 rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 text-lg">
          {item.name}{" "}
          <span
            className="text-pink-600 ml-2 cursor-pointer hover:underline"
            onClick={() => onEdit(item)}
          >
            Edit
          </span>
        </h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
        <p className="text-gray-600 text-sm mt-1">
          Size: {item.size} • Qty {item.quantity}
        </p>
        <button
          className="text-gray-600 text-sm mt-3 hover:text-red-500"
          onClick={() => onRemove(item)}
        >
          ✖ Remove
        </button>
        <div className="text-gray-600 text-sm mt-2">
          Sold By: {item.seller} •{" "}
          <span className="text-green-500">Free Delivery</span>
        </div>
      </div>
      <p className="font-semibold text-gray-800 text-lg">₹{item.price}</p>
    </div>
  );
};

const PriceDetails = ({ totalPrice, onProceed }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
      <h3 className="font-semibold text-gray-800 text-xl mb-6">Price Details</h3>
      <div className="flex justify-between mb-3">
        <span className="text-gray-700">Total Product Price</span>
        <span className="font-semibold text-gray-800">+₹{totalPrice}</span>
      </div>
      <div className="flex justify-between border-t border-gray-300 pt-3 mb-6">
        <span className="text-gray-700">Order Total</span>
        <span className="font-semibold text-gray-800">₹{totalPrice}</span>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Clicking on 'Continue' will not deduct any money.
      </p>
      <Link
      to={"/payment"}
        className="w-full block text-center bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-700 transition-colors"
        onClick={onProceed}
      >
        Continue
      </Link>
      <div className="mt-6 bg-blue-100 p-4 rounded-lg flex items-center">
        <img
          src="https://images.meesho.com/images/marketing/1588578650850.webp"
          alt="MeeSho Safe"
          className="w-8 h-8 mr-3"
        />
        <p className="text-sm text-gray-600">
          Your Safety, Our Priority
          <br />
          We make sure that your package is safe at every point of contact.
        </p>
      </div>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Super Eazzy Shampoo F...",
      description: "All issue easy return allowed",
      size: "Free Size",
      quantity: 1,
      seller: "Vcare herbal conc...",
      price: 423,
      image: "https://images.meesho.com/images/products/7955630/go1jh_64.webp",
    },
    {
      id: 2,
      name: "Adivasi Neelambri Medic...",
      description: "",
      size: "Free Size",
      quantity: 1,
      seller: "Vcare herbal conc...",
      price: 161,
      image:
        "https://images.meesho.com/images/products/167284141/blllv_512.webp",
    },
  ]);
  const [editItem, setEditItem] = useState(null);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemove = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleQuantityChange = (e) => {
    setEditItem({ ...editItem, quantity: e.target.value });
  };

  const handleSave = () => {
    setCartItems(
      cartItems.map((item) =>
        item.id === editItem.id ? { ...item, quantity: editItem.quantity } : item
      )
    );
    setEditItem(null); // Close the modal
  };

  const handleCancel = () => {
    setEditItem(null); // Close the modal without saving
  };

  return (
    <div className="bg-gray-100 pt-24 min-h-screen">
      {/* Cart Steps */}
      <div className="flex items-center justify-center w-full p-5 ">
        <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
          <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#4e66ec]" />
          <div className="text-royalblue">Cart</div>
        </div>
        <hr className="w-[5%] relative -top-[5px] h-[3px] bg-[#e1dddd] border-none" />
        <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
          <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
          <div>Address</div>
        </div>
        <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
        <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
          <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
          <div>Payment</div>
        </div>
        <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
        <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
          <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
          <div>Summary</div>
        </div>
      </div>

      {/* Cart Items & Price Details */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Cart | {cartItems.length} items
          </h2>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onEdit={handleEdit}
            />
          ))}
        </div>
        <PriceDetails totalPrice={totalPrice} onProceed={() => {}} />
      </div>

      {/* Edit Modal */}
      {editItem && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Item</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="number"
                min="1"
                value={editItem.quantity}
                onChange={handleQuantityChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-pink-600 text-white py-2 px-6 rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;











// import React from "react";

// const CartItem = ({ item }) => {
//   return (
//     <div className="flex p-4 border rounded-lg mb-4">
//       <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
//       <div className="flex-1">
//         <h3 className="font-semibold text-gray-700">
//           {item.name}{" "}
//           <span className="text-pink-600 ml-2 cursor-pointer">Edit</span>
//         </h3>
//         <p className="text-gray-500">{item.description}</p>
//         <p className="text-gray-500">
//           Size: {item.size} • Qty {item.quantity}
//         </p>
//         <button className="text-gray-500 text-sm mt-2">✖ Remove</button>
//         <div className="text-gray-500 mt-2">
//           Sold By: {item.seller} •{" "}
//           <span className="text-green-500">Free Delivery</span>
//         </div>
//       </div>
//       <p className="font-semibold text-gray-700">₹{item.price}</p>
//     </div>
//   );
// };

// const PriceDetails = ({ totalPrice }) => {
//   return (
//     <div className="p-4 border rounded-lg bg-gray-50">
//       <h3 className="font-semibold text-gray-700 mb-4">Price Details</h3>
//       <div className="flex justify-between mb-2">
//         <span>Total Product Price</span>
//         <span className="font-semibold text-gray-700">+₹{totalPrice}</span>
//       </div>
//       <div className="flex justify-between border-t border-gray-300 pt-2 mb-4">
//         <span>Order Total</span>
//         <span className="font-semibold text-gray-700">₹{totalPrice}</span>
//       </div>
//       <p className="text-sm text-gray-500 mb-4">
//         Clicking on 'Continue' will not deduct any money
//       </p>
//       <button className="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg">
//         Continue
//       </button>
//       <div className="mt-4 bg-blue-100 p-2 rounded-lg flex items-center">
//         <img
//           src="https://images.meesho.com/images/marketing/1588578650850.webp"
//           alt="MeeSho Safe"
//           className="w-6 h-6 mr-2"
//         />
//         <p className="text-sm text-gray-600">
//           Your Safety, Our Priority
//           <br />
//           We make sure that your package is safe at every point of contact.
//         </p>
//       </div>
//     </div>
//   );
// };

// const Cart = () => {
//   const cartItems = [
//     {
//       name: "Super Eazzy Shampoo F...",
//       description: "All issue easy return allowed",
//       size: "Free Size",
//       quantity: 1,
//       seller: "Vcare herbal conc...",
//       price: 423,
//       image: "https://images.meesho.com/images/products/7955630/go1jh_64.webp",
//     },
//     {
//       name: "Adivasi Neelambri Medic...",
//       description: "",
//       size: "Free Size",
//       quantity: 1,
//       seller: "Vcare herbal conc...",
//       price: 161,
//       image:
//         "https://images.meesho.com/images/products/167284141/blllv_512.webp",
//     },
//   ];

//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <>
//       <div className="flex items-center justify-center w-full p-5">
//         <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
//           <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#4e66ec]" />
//           <div className="text-royalblue">Cart</div>
//         </div>
//         <hr className="w-[5%] relative -top-[5px] h-[3px] bg-[#e1dddd] border-none" />
//         <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
//           <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
//           <div>Address</div>
//         </div>
//         <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
//         <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
//           <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
//           <div>Payment</div>
//         </div>
//         <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
//         <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
//           <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
//           <div>Summary</div>
//         </div>
//       </div>
//       <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             Cart | {cartItems.length} items
//           </h2>
//           {cartItems.map((item, index) => (
//             <CartItem key={index} item={item} />
//           ))}
//         </div>
//         <PriceDetails totalPrice={totalPrice} />
//       </div>
//     </>
//   );
// };

// export default Cart;



















{
  /* <body className="m-0 p-0 box-border font-sans">
  <header className="flex items-center w-full p-5 shadow-[2px_2px_12px_0.7px_rgb(200,198,198)]">
    <img className="w-[10%] mx-[15%]" src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="Logo" />
    <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
      <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
      <div className="text-royalblue">Cart</div>
    </div>
    <hr className="w-[5%] relative -top-[5px] h-[3px] bg-[#e1dddd] border-none" />
    <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
      <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
      <div>Address</div>
    </div>
    <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
    <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
      <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
      <div>Payment</div>
    </div>
    <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
    <div className="text-xs text-gray-500 flex flex-col items-center gap-[2px]">
      <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-[3px] border-[#e1dddd]" />
      <div>Summary</div>
    </div>
  </header>

  <main className="flex mt-5 justify-center sm:flex-col sm:mt-0 sm:bg-[#e1f3fe]">
    <section className="flex flex-col gap-[10px] mr-5 sm:w-full sm:m-auto">
      <div className="mobile-hid mb-2.5 font-bold">
        Cart | 2 items
      </div>
      <div className="product flex gap-[5px] border p-[10px] border-[#e1dddd] rounded-t-lg w-full">
        <img className="h-[70px] p-[5px] border-[2px] border-[#e1dddd] rounded-lg" src="https://images.meesho.com/images/products/7955630/go1jh_64.webp" alt="Product Image" />
        <div>
          <p className="flex justify-between w-[210px] font-bold">
            Super Eazzy Shampoo F ... <span className="text-[#f43397]">Edit</span>
          </p>
          <p className="text-sm text-[#656565]">₹423</p>
          <p className="text-sm text-[#656565]">All issue easy return allowed</p>
          <p className="flex items-center gap-[2px] text-sm text-[#656565]">
            Size: Free Size <span className="text-[#656565]">·</span> Qty 1
          </p>
          <p className="font-bold flex items-center gap-[2px] p-[10px]">
            <span className="text-[22px]">×</span> Remove
          </p>
        </div>
      </div>
      <div className="seller flex justify-around p-[10px] border-t-0 border border-[#e1dddd] rounded-b-lg text-sm">
        <span>Sold By: Vcare herbal conc...</span>
        <span>Free Delivery</span>
      </div>
    </section>

    <div className="divider w-[2px] h-[420px] bg-[#c8c6c6] sm:hidden" />

    <div className="mobile-only wishlist flex justify-between font-bold p-[10px] border border-[#e1dddd] bg-white mt-[10px]">
      Wishlist <span>&gt;</span>
    </div>

    <section className="flex flex-col w-max ml-[10px] sm:mx-0 sm:w-full sm:flex-col sm:gap-[10px] sm:bg-white">
      <p className="text-sm font-bold p-[10px]">Price Details</p>
      <p className="flex justify-between text-sm border-b-[2px] border-[#e1dddd] p-[10px]">
        <span className="underline decoration-dotted">Total Product Price</span>
        <span>+₹584</span>
      </p>
      <p className="flex justify-between text-sm font-bold p-[10px]">
        Order Total <span>₹584</span>
      </p>
      <p className="mobile-hid text-xs m-auto p-0">Clicking on 'Continue' will not deduct any money</p>
      <button className="mobile-hid bg-[#9f2089] text-white text-lg p-[10px] rounded-lg">Continue</button>
      <img className="mt-[10px] h-[120px] sm:py-[10px] sm:mb-[80px] sm:bg-[#e1f3fe]" src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="Promotional Image" />
      <p className="checkout-1 mobile-only text-xs font-light p-[10px] fixed bg-[#e7f0f7] bottom-[60px] w-full">
        Clicking on 'Continue' will not deduct any money
      </p>
      <div className="checkout-2 mobile-only fixed bottom-0 flex w-full items-center justify-around p-[10px] bg-white">
        <div className="leading-[10px]">
          <p>₹584</p>
          <p className="text-[#9f2089] font-bold">View Price Details</p>
        </div>
        <button className="w-[40%]">Continue</button>
      </div>
    </section>
  </main>
</body> */
}

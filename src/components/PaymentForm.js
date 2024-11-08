// import React from 'react';

// function PaymentForm() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#e5f3ff]">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 flex w-[850px]">
//         {/* Left Side - Payment Form */}
//         <div className="w-2/3 pr-10">
//           {/* Header with Logo and Timer */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="text-2xl font-semibold text-gray-800">
//               <span className="text-blue-600">AceCoin</span>Pay
//             </div>
//             <div className="flex space-x-1 text-blue-800 font-mono text-lg">
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">3</span>
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">0</span>
//               <span>:</span>
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">0</span>
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">0</span>
//             </div>
//           </div>

//           {/* Card Number */}
//           <div className="mb-4 flex justify-between items-center">
//             <div className='flex flex-col'>
//               <strong className="text-lg">Card Number</strong>
//               <span className="text-sm text-gray-500">Enter 16-digit card number</span>
//             </div>
//             <div className="text-blue-600 cursor-pointer">
//             <i className="fa fa-pen text-4xl text-blue-500"></i> {/* Simple pen icon */}
//             Edit
//             </div>
//           </div>
//           <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-100 rounded-lg">
//             <div className="text-red-500 text-2xl">💳</div>
//             <input
//               type="text"
//               className="w-full bg-transparent outline-none font-mono text-lg tracking-wider text-gray-700 placeholder-gray-500"
//               placeholder="0000  -  0000  -  0000  -  0000"
//             />

//             <i className="fa fa-check-circle text-blue-600 text" style={{fontSize:"22px"}}></i>

//           </div>

//           <div className="mb-6 flex justify-between items-center">
//             <div className='flex flex-col flex-1'>
//               <strong className="text-base">Expiry Date</strong>
//               <span className="text-sm text-gray-500">Enter the expiration date of the card</span>
//             </div>
//             <div className="flex items-center flex-1">
//               <input className="w-1/2 text-center bg-gray-100 border border-gray-300 rounded-lg outline-none p-2" type="number" min="1" max="12" placeholder="MM"/>
//               <span className='m-4'>/</span>
//               <input className="w-1/2 text-center bg-gray-100 border border-gray-300 rounded-lg outline-none p-2" type="number" min="23" max="99" placeholder="YY"/>
//             </div>
//           </div>

//           {/* CVC Number */}
//           <div className="mb-6 flex justify-between items-center">
//             <div className='flex flex-col flex-1 '>
//               <strong className="text-lg">CVC Number</strong>
//               <span className="text-sm text-gray-500">Enter the card verification code from the back of the card</span>
//             </div>
//             <div className="relative flex-1 ">
//               <input className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg outline-none" id="cvc" type="password"/>
//               <i id="cvc_toggler" className="ai-eye-open absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"></i>
//             </div>
//           </div>

//           {/* Cardholder Name */}
//           <div className="mb-6 flex justify-between items-center">
//             <div className='flex flex-col flex-1 '>
//               <strong className="text-lg">Cardholder Name</strong>
//               <span className="text-sm text-gray-500">Enter the cardholder's name</span>
//             </div>
//             <div className="relative flex-1 ">
//               <input className="p-2 w-full bg-gray-100 border border-gray-300 rounded-lg outline-none uppercase" id="name" type="text" placeholder="CARDHOLDER NAME"/>
//               <i className="ai-person absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
//             </div>
//           </div>

//           {/* Pay Now Button */}
//           <button className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
//             Pay Now
//           </button>
//         </div>

//         {/* Right Side - Order Summary */}
//         <div className="w-1/3 bg-gray-50 p-6 rounded-2xl shadow-lg">
//           {/* Card Display */}
//           <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-2">
//               <div className="bg-gray-200 p-2 rounded-full">💳</div>
//               <div>
//                 <p className="text-gray-600 text-sm">MR. CARDHOLDER</p>
//                 <p className="text-lg font-semibold text-gray-800">•••• 0000</p>
//               </div>
//             </div>
//             <div className="text-gray-600 text-2xl">🔒</div>
//           </div>

//           {/* Order Details */}
//           <div className="mb-4">
//             <div className="flex justify-between text-sm text-gray-600 mb-1">
//               <span>Company</span>
//               <span className="font-semibold text-gray-700">Apple</span>
//             </div>
//             <div className="flex justify-between text-sm text-gray-600 mb-1">
//               <span>Order number</span>
//               <span className="font-semibold text-gray-700">429252965</span>
//             </div>
//             <div className="flex justify-between text-sm text-gray-600 mb-1">
//               <span>Product</span>
//               <span className="font-semibold text-gray-700">MacBook Air</span>
//             </div>
//             <div className="flex justify-between text-sm text-gray-600 mb-1">
//               <span>VAT (20%)</span>
//               <span className="font-semibold text-gray-700">$100.00</span>
//             </div>
//           </div>

//           {/* Total Amount */}
//           <div className="mt-6 pt-4 border-t border-gray-200">
//             <div className="flex items-center justify-between text-lg font-bold">
//               <span>You have to Pay</span>
//               <span className="text-blue-600">$549.99 <span className="text-sm">USD</span></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentForm;

//                                                                            BEST CODE
import React, { useEffect, useState } from "react";

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [holderName, setHolderName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const handleCardNumberChange = (index, value) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = value.slice(0, 4); // Limit input to 4 digits per field
    setCardNumber(newCardNumber);
  };
  const formattedCardNumber = cardNumber[3] || "0000";

  const [isVisible, setIsVisible] = useState(false); // State to toggle visibility
  const [cvc, setCvc] = useState(""); // State to store the CVC value

  const handleCvcChange = (e) => {
    // Only allow numbers in the CVC field
    const numberOnly = e.target.value.replace(/[^0-9]/g, "");
    setCvc(numberOnly);
  };

  const toggleVisibility = () => {
    // Toggle the CVC visibility
    setIsVisible(!isVisible);
  };

  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up the interval to update the countdown every second
    const timer = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        // Timeout reached, show pop-up and reset timer
        alert("Sorry, Timeout!");
        resetTimer();
      } else {
        if (seconds === 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const resetTimer = () => {
    setMinutes(30);
    setSeconds(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#e5f3ff]">
      <div className="bg-white relative rounded-2xl shadow-2xl p-8 flex w-[850px]">
        <div className="close-btn pointer flex-center p-sm absolute top-0 right-0 p-4">
          <i className="fa fa-xmark text-gray-500 fa-lg"></i>
        </div>
        {/* Left Side - Payment Form */}
        <div className="w-2/3">
          {/* Header with Logo and Timer */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-semibold text-gray-800">
              <span className="text-blue-600">AceCoin</span>Pay
            </div>
            <div className="flex space-x-1 text-blue-800 font-mono text-lg">
              {/* Display each digit separately */}
              <span className="bg-blue-900 text-white px-2 py-1 rounded">
                {String(minutes).padStart(2, "0")[0]}{" "}
                {/* Display first digit of minutes */}
              </span>
              <span className="bg-blue-900 text-white px-2 py-1 rounded">
                {String(minutes).padStart(2, "0")[1]}{" "}
                {/* Display second digit of minutes */}
              </span>
              <span>:</span>
              <span className="bg-blue-900 text-white px-2 py-1 rounded">
                {String(seconds).padStart(2, "0")[0]}{" "}
                {/* Display first digit of seconds */}
              </span>
              <span className="bg-blue-900 text-white px-2 py-1 rounded">
                {String(seconds).padStart(2, "0")[1]}{" "}
                {/* Display second digit of seconds */}
              </span>
            </div>
          </div>

          {/* Card Number */}
          <div className="mb-4 flex justify-between items-center">
            <div className="flex flex-col">
              <strong className="text-lg">Card Number</strong>
              <span className="text-sm text-gray-500">
                Enter 16-digit card number
              </span>
            </div>
            <div className="text-blue-600 cursor-pointer">
              <i className="fa fa-pen text-4xl text-blue-500"></i>{" "}
              {/* Simple pen icon */}
              Edit
            </div>
          </div>
          <div className="flex items-center space-x-3 mb-6 px-[1em] py-[0.5em] bg-gray-100 rounded-lg">
            <div className="flex items-center flex-1">
              <div className="text-red-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="24px"
                  height="24px"
                >
                  <path
                    fill="#ff9800"
                    d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                  />
                  <path
                    fill="#d50000"
                    d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                  />
                  <path
                    fill="#ff3d00"
                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                  />
                </svg>
              </div>
              {cardNumber.map((num, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-[4em] h-full py-[0.5em] mx-[0.75em] border-none text-[#888888] bg-transparent text-center font-inherit font-medium"
                  placeholder="0000"
                  value={num}
                  onChange={(e) => {
                    // Allow only numbers (0-9)
                    const numericValue = e.target.value.replace(/[^0-9]/g, "");
                    handleCardNumberChange(index, numericValue); // Update state with numeric value
                  }}
                />
              ))}
            </div>

            <i
              className="fa fa-check-circle text-blue-600 text"
              style={{ fontSize: "22px" }}
            ></i>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <div className="flex flex-col flex-1">
              <strong className="text-base">Expiry Date</strong>
              <span className="text-sm text-gray-500">
                Enter the expiration date of the card
              </span>
            </div>
            <div className="flex items-center flex-1">
              <input
                className="w-1/2 text-center bg-gray-100 border border-gray-300 rounded-lg outline-none p-2"
                type="number"
                min="1"
                max="12"
                placeholder="MM"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value.slice(0, 2))}
              />
              <span className="m-4">/</span>
              <input
                className="w-1/2 text-center bg-gray-100 border border-gray-300 rounded-lg outline-none p-2"
                type="number"
                min="23"
                max="99"
                placeholder="YY"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value.slice(0, 2))}
              />
            </div>
          </div>

          {/* CVC Number */}
          <div className="mb-6 flex justify-between items-center">
            <div className="flex flex-col flex-1">
              <strong className="text-lg">CVC Number</strong>
              <span className="text-sm text-gray-500">
                Enter the card verification code from the back of the card
              </span>
            </div>
            <div className="relative flex-1">
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg outline-none"
                id="cvc"
                type={isVisible ? "text" : "password"} // Toggle input type based on visibility state
                value={cvc}
                onChange={handleCvcChange} // Handle input change to restrict to numbers
                maxLength="3" // Limit input to 3 characters (common length for CVC)
              />
              {/* Show or hide based on visibility state */}
              <i
                className={`fas fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer ${
                  isVisible ? "hidden" : ""
                }`}
                onClick={toggleVisibility}
              ></i>
              <i
                className={`fas fa-eye-slash absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer ${
                  isVisible ? "" : "hidden"
                }`}
                onClick={toggleVisibility}
              ></i>
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="mb-6 flex justify-between items-center">
            <div className="flex flex-col flex-1">
              <strong className="text-lg">Cardholder Name</strong>
              <span className="text-sm text-gray-500">
                Enter the cardholder's name
              </span>
            </div>
            <div className="relative flex-1">
              <input
                className="p-2 w-full bg-gray-100 border border-gray-300 rounded-lg outline-none uppercase"
                id="name"
                type="text"
                placeholder="CARDHOLDER NAME"
                value={holderName}
                onChange={(e) => {
                  // Restrict input to alphabetic characters and spaces
                  const alphabetOnly = e.target.value
                    .replace(/[^a-zA-Z\s]/g, "")
                    .toUpperCase();
                  setHolderName(alphabetOnly); // Update state with sanitized value
                }}
              />
              <i className="fas fa-user absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
            </div>
          </div>

          {/* Pay Now Button */}
          <button className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Pay Now
          </button>
        </div>

        {/* Right Side - Order Summary */}
        <div className="sidebar w-[16.5em] pt-[5em] pl-[2em]">
          <div className="purchase-section flex flex-col relative bg-[#F1F1F1] rounded-t-[.8em] px-[1em] pb-[1em]">
            <div className="flex flex-col justify-between card-mockup relative mx-[1em] mt-[-5em] mb-[1.5em] py-[1.5em] px-[1.1em] h-[15em] bg-white rounded-md shadow-lg">
              <div className="flex justify-between">
                <i className="fa-brands fa-bitcoin text-[#aaaaaa] text-3xl"></i>
                <i
                  className="fa fa-wifi text-[#aaaaaa]"
                  style={{ fontSize: "1.7em" }}
                ></i>
              </div>
              <div>
                <div
                  id="name_mock"
                  className="text-[.85em] pb-[.5em] uppercase truncate"
                >
                  {holderName || "mr. Cardholder"}
                </div>
                <div className="text-[.85em] pb-[1em]">
                  <strong>
                    <span className="pr-[.5em] text-xl font-extrabold">
                      ••••
                    </span>
                    <span id="carddigits_mock">{formattedCardNumber}</span>
                  </strong>
                </div>
                <div className="flex justify-between items-center">
                  <strong className="text-[.85em]">
                    <span id="mm_mock">{expiryMonth || "00"}</span>/
                    <span id="yy_mock">{expiryYear || "01"}</span>
                  </strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <path
                      fill="#ff9800"
                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                    />
                    <path
                      fill="#d50000"
                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                    />
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <ul className="purchase-props list-none p-0 text-[.8em]">
              <li className="flex justify-between py-[1em]">
                <span className="text-[#aaaaaa] font-semibold">Company</span>
                <strong>Apple</strong>
              </li>
              <li className="flex justify-between py-[1em]">
                <span className="text-[#aaaaaa] font-semibold">
                  Order number
                </span>
                <strong>429252965</strong>
              </li>
              <li className="flex justify-between py-[1em]">
                <span className="text-[#aaaaaa] font-semibold">Product</span>
                <strong>MacBook Air</strong>
              </li>
              <li className="flex justify-between py-[1em]">
                <span className="text-[#aaaaaa] font-semibold">VAT (20%)</span>
                <strong>$100.00</strong>
              </li>
            </ul>
          </div>
          <div className="separation-line border-t border-dashed border-[#aaaaaa] mx-[.8em]"></div>
          <div className="total-section relative bg-[#F1F1F1] rounded-b-[.8em] p-[1em] flex justify-between items-center">
            <div className="flex flex-col flex-1">
              <div className="text-[#aaaaaa] text-[.8em] pb-[.5em]">
                You have to Pay
              </div>
              <div>
                <strong className="text-[1.5em] font-extrabold">549</strong>
                <small className="font-semibold">
                  .99 <span className="text-[#aaaaaa]">USD</span>
                </small>
              </div>
            </div>
            <i className="fa-solid fa-wallet text-[1.5em]"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;

// import React, { useState } from "react";

// function PaymentForm() {
//   // State for form fields
//   const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
//   const [expiryMonth, setExpiryMonth] = useState("");
//   const [expiryYear, setExpiryYear] = useState("");
//   const [cvc, setCVC] = useState("");
//   const [password, setPassword] = useState("");

//   // Function to handle card number input
//   const handleCardNumberChange = (index, value) => {
//     const newCardNumber = [...cardNumber];
//     newCardNumber[index] = value.slice(0, 4); // Limit input to 4 digits per field
//     setCardNumber(newCardNumber);
//   };

//   // Format card number for display in order summary (last 4 digits only)
//   const formattedCardNumber = cardNumber[3] || "0000";

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#e5f3ff]">
//       <div className="bg-white relative rounded-2xl shadow-2xl p-8 flex w-[850px]">
//         <div className="close-btn pointer flex-center p-sm absolute top-0 right-0 p-4">
//           <i className="fa fa-xmark text-gray-500 fa-lg"></i>
//         </div>

//         {/* Left Side - Payment Form */}
//         <div className="w-2/3">
//           {/* Header with Logo and Timer */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="text-2xl font-semibold text-gray-800">
//               <span className="text-blue-600">AceCoin</span>Pay
//             </div>
//             <div className="flex space-x-1 text-blue-800 font-mono text-lg">
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">3</span>
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">0</span>
//               <span>:</span>
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">0</span>
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">0</span>
//             </div>
//           </div>

//           {/* Card Number */}
//           <div className="mb-4 flex justify-between items-center">
//             <div className="flex flex-col">
//               <strong className="text-lg">Card Number</strong>
//               <span className="text-sm text-gray-500">Enter 16-digit card number</span>
//             </div>
//             <div className="text-blue-600 cursor-pointer">
//               <i className="fa fa-pen text-4xl text-blue-500"></i> Edit
//             </div>
//           </div>
//           <div className="flex items-center space-x-3 mb-6 px-[1em] py-[0.5em] bg-gray-100 rounded-lg">
//             {cardNumber.map((num, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 className="w-[4em] h-full py-[0.5em] mx-[0.75em] border-none text-[#888888] bg-transparent text-center font-inherit font-medium"
//                 placeholder="0000"
//                 value={num}
//                 onChange={(e) => handleCardNumberChange(index, e.target.value)}
//               />
//             ))}
//           </div>

//           {/* Expiry Date */}
//           <div className="mb-4 flex justify-between">
//             <div className="flex flex-col">
//               <strong className="text-lg">Expiry Date</strong>
//               <span className="text-sm text-gray-500">Enter the expiration date of your card</span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3 mb-6">
//             <input
//               type="text"
//               className="w-[4em] py-2 px-4 text-center bg-gray-100 rounded"
//               placeholder="MM"
//               value={expiryMonth}
//               onChange={(e) => setExpiryMonth(e.target.value.slice(0, 2))}
//             />
//             <span>/</span>
//             <input
//               type="text"
//               className="w-[4em] py-2 px-4 text-center bg-gray-100 rounded"
//               placeholder="YY"
//               value={expiryYear}
//               onChange={(e) => setExpiryYear(e.target.value.slice(0, 2))}
//             />
//           </div>

//           {/* Security Code */}
//           <div className="mb-4 flex justify-between">
//             <div className="flex flex-col">
//               <strong className="text-lg">Security Code</strong>
//               <span className="text-sm text-gray-500">Enter your card’s security code</span>
//             </div>
//           </div>
//           <input
//             type="text"
//             className="w-full py-2 px-4 text-center bg-gray-100 rounded mb-6"
//             placeholder="CVC"
//             value={cvc}
//             onChange={(e) => setCVC(e.target.value.slice(0, 3))}
//           />

//           {/* Password */}
//           <div className="mb-4 flex justify-between">
//             <div className="flex flex-col">
//               <strong className="text-lg">Password</strong>
//               <span className="text-sm text-gray-500">Enter your dynamic password</span>
//             </div>
//           </div>
//           <input
//             type="password"
//             className="w-full py-2 px-4 text-center bg-gray-100 rounded mb-6"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
//             Pay Now
//           </button>
//         </div>

//         {/* Right Side - Order Summary */}
//         <div className="sidebar w-[16.5em] pt-[5em] pl-[2em]">
//           <div className="purchase-section flex flex-col relative bg-[#F1F1F1] rounded-t-[.8em] px-[1em] pb-[1em]">
//             <div className="flex flex-col justify-between card-mockup relative mx-[1em] mt-[-5em] mb-[1.5em] py-[1.5em] px-[1.2em] h-[15em] bg-white rounded-md shadow-lg">
//               <div className="flex justify-between">
//                 <i className="fa-brands fa-bitcoin text-[#aaaaaa] text-3xl"></i>
//                 <i className="fa fa-wifi text-[#aaaaaa]" style={{ fontSize: "1.7em" }}></i>
//               </div>
//               <div>
//                 <div id="name_mock" className="text-[.85em] pb-[.5em] uppercase truncate">
//                   mr. Cardholder
//                 </div>
//                 <div className="text-[.85em] pb-[1em]">
//                   <strong>
//                     <span className="pr-[.5em]">•</span>
//                     <span id="carddigits_mock">{formattedCardNumber}</span>
//                   </strong>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <strong className="text-[.85em]">
//                     <span id="mm_mock">{expiryMonth || "00"}</span>/
//                     <span id="yy_mock">{expiryYear || "00"}</span>
//                   </strong>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 48 48"
//                     width="24px"
//                     height="24px"
//                   >
//                     <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
//                     <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
//                     <path
//                       fill="#ff3d00"
//                       d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Order details */}
//             <div className="flex justify-between mt-2 mb-2">
//               <span className="text-gray-500">Company</span>
//               <span className="font-semibold">HealthMate</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-500">Order Number</span>
//               <span className="font-semibold">123456</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-500">Product</span>
//               <span className="font-semibold">Medicine Pack</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-500">VAT (20%)</span>
//               <span className="font-semibold">$20.00</span>
//             </div>

//             {/* Total Amount */}
//             <div className="flex justify-between mt-4 border-t pt-2 font-semibold">
//               <span>Total</span>
//               <span>$120.00</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentForm;

// import React, { useState, useEffect } from "react";

// function PaymentForm() {
//   const [timeLeft, setTimeLeft] = useState(5 * 60 + 1); // Timer state

//   // Effect for the timer countdown
//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       if (timeLeft > 0) {
//         setTimeLeft(prevTime => prevTime - 1);
//       }
//     }, 1000);

//     return () => clearInterval(timerInterval);
//   }, [timeLeft]);

//   // Effect for copying input values to card mockup
//   useEffect(() => {
//     const bounds = document.querySelectorAll('[data-bound]');
//     bounds.forEach(bound => {
//       const targetId = bound.getAttribute('data-bound');
//       const defValue = bound.getAttribute('data-def');
//       const targetEl = document.getElementById(targetId);
//       bound.addEventListener('keyup', () => {
//         targetEl.innerText = bound.value || defValue;
//       });
//     });
//   }, []);

//   // Effect for toggling CVC display mode
//   useEffect(() => {
//     const cvc_toggler = document.getElementById('cvc_toggler');
//     if (cvc_toggler) {
//       cvc_toggler.addEventListener('click', () => {
//         const target = cvc_toggler.getAttribute('data-target');
//         const el = document.getElementById(target);
//         el.setAttribute('type', el.type === 'text' ? 'password' : 'text');
//       });
//     }
//   }, []);

//   const formatTime = (time) => {
//     const date = new Date('2000-01-01 00:00:00');
//     date.setSeconds(time);
//     const str = date.toISOString();
//     return {
//       minutes: str[14],
//       seconds: str[17] + str[18]
//     };
//   };

//   const { minutes, seconds } = formatTime(timeLeft);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#e5f3ff]">
//       <div className="bg-white relative rounded-2xl shadow-2xl p-8 flex w-[850px]">
//         <div className="close-btn pointer flex-center p-sm absolute top-0 right-0 p-4">
//           <i className="fa fa-xmark text-gray-500 fa-lg"></i>
//         </div>
//         {/* Left Side - Payment Form */}
//         <div className="w-2/3">
//           {/* Header with Logo and Timer */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="text-2xl font-semibold text-gray-800">
//               <span className="text-blue-600">AceCoin</span>Pay
//             </div>
//             <div className="flex space-x-1 text-blue-800 font-mono text-lg" data-id="timer">
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">{minutes}</span>
//               <span>:</span>
//               <span className="bg-blue-900 text-white px-2 py-1 rounded">{seconds}</span>
//             </div>
//           </div>

//           {/* Card Number */}
//           <div className="mb-4 flex justify-between items-center">
//             <div className="flex flex-col">
//               <strong className="text-lg">Card Number</strong>
//               <span className="text-sm text-gray-500">
//                 Enter 16-digit card number
//               </span>
//             </div>
//             <div className="text-blue-600 cursor-pointer">
//               <i className="fa fa-pen text-4xl text-blue-500"></i>{" "}
//               {/* Simple pen icon */}
//               Edit
//             </div>
//           </div>
//           <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-100 rounded-lg">
//             <div className="text-red-500 text-2xl">💳</div>
//             <input
//               type="text"
//               className="w-full bg-transparent outline-none font-mono text-lg tracking-wider text-gray-700 placeholder-gray-500"
//               placeholder="0000  -  0000  -  0000  -  0000"
//               data-bound="carddigits_mock"
//               data-def="0000"
//             />
//             <i
//               className="fa fa-check-circle text-blue-600 text"
//               style={{ fontSize: "22px" }}
//             ></i>
//           </div>

//           <div className="mb-6 flex justify-between items-center">
//             <div className="flex flex-col flex-1">
//               <strong className="text-base">Expiry Date</strong>
//               <span className="text-sm text-gray-500">
//                 Enter the expiration date of the card
//               </span>
//             </div>
//             <div className="flex items-center flex-1">
//               <input
//                 className="w-1/2 text-center bg-gray-100 border border-gray-300 rounded-lg outline-none p-2"
//                 type="number"
//                 min="1"
//                 max="12"
//                 placeholder="MM"
//                 data-bound="mm_mock"
//                 data-def="00"
//               />
//               <span className="m-4">/</span>
//               <input
//                 className="w-1/2 text-center bg-gray-100 border border-gray-300 rounded-lg outline-none p-2"
//                 type="number"
//                 min="23"
//                 max="99"
//                 placeholder="YY"
//                 data-bound="yy_mock"
//                 data-def="01"
//               />
//             </div>
//           </div>

//           {/* CVC Number */}
//           <div className="mb-6 flex justify-between items-center">
//             <div className="flex flex-col flex-1 ">
//               <strong className="text-lg">CVC Number</strong>
//               <span className="text-sm text-gray-500">
//                 Enter the card verification code from the back of the card
//               </span>
//             </div>
//             <div className="relative flex-1 ">
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg outline-none"
//                 id="cvc"
//                 type="password"
//                 data-bound="cvc_mock"
//                 data-def="***"
//               />
//               <i
//                 id="cvc_toggler"
//                 className="ai-eye-open absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
//                 data-target="cvc"
//               ></i>
//             </div>
//           </div>

//           {/* Cardholder Name */}
//           <div className="mb-6 flex justify-between items-center">
//             <div className="flex flex-col flex-1 ">
//               <strong className="text-lg">Cardholder Name</strong>
//               <span className="text-sm text-gray-500">
//                 Enter the cardholder's name
//               </span>
//             </div>
//             <div className="relative flex-1 ">
//               <input
//                 className="p-2 w-full bg-gray-100 border border-gray-300 rounded-lg outline-none uppercase"
//                 id="name"
//                 type="text"
//                 placeholder="CARDHOLDER NAME"
//                 data-bound="name_mock"
//                 data-def="Mr. Cardholder"
//               />
//               <i className="ai-person absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
//             </div>
//           </div>

//           {/* Pay Now Button */}
//           <button className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
//             Pay Now
//           </button>
//         </div>

//         {/* Right Side - Order Summary */}
//         <div className="sidebar w-[16.5em] pt-[5em] pl-[2em]">
//           <div className="purchase-section flex flex-col relative bg-[#F1F1F1] rounded-t-[.8em] px-[1em] pb-[1em]">
//             <div className="flex flex-col justify-between card-mockup relative mx-[1em] mt-[-5em] mb-[1.5em] py-[1.5em] px-[1.2em] h-[15em] bg-white rounded-md shadow-lg">
//               <div className="flex justify-between">
//                 <i className="fa-brands fa-bitcoin text-[#aaaaaa] text-3xl"></i>
//                 <i
//                   className="fa fa-wifi text-[#aaaaaa]"
//                   style={{ fontSize: "1.7em" }}
//                 ></i>
//               </div>
//               <div>
//                 <div
//                   id="name_mock"
//                   className="text-[.85em] pb-[.5em] uppercase truncate"
//                 >
//                   mr. Cardholder
//                 </div>
//                 <div className="text-[.85em] pb-[1em]">
//                   <strong>
//                     <span className="pr-[.5em]">•</span>
//                     <span id="carddigits_mock">0000</span>
//                   </strong>
//                 </div>
//                 <div className="flex justify-between">
//                   <span id="mm_mock">00</span>/
//                   <span id="yy_mock">01</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentForm;

// import React from 'react';

// const PaymentForm = () => {
//   return (
//     <div className="screen flex justify-center items-center absolute inset-0 bg-[#E3F2FD]">
//       <form className="popup flex p-8 bg-white w-[50em] h-[35em] overflow-y-auto rounded-lg shadow-lg relative">
//         {/* Close Button */}
//         <div className="close-btn pointer flex justify-center items-center p-2 absolute top-4 right-4 bg-[#FCFCFC] rounded-md hover:bg-[#EF5350] transition-all">
//           <i className="ai-cross text-xl text-[#FF3D00]"></i>
//         </div>

//         <div className="flex w-full">
//           {/* Card Form Section */}
//           <div className="flex-1 p-4 flex flex-col space-y-6">
//             <div className="header flex justify-between items-center mb-6">
//               <div className="flex items-center space-x-2">
//                 <i className="ai-bitcoin-fill text-[#FF9800] text-xl"></i>
//                 <span className="title text-lg font-semibold">AceCoin Pay</span>
//               </div>
//               <div className="timer text-xl font-semibold text-[#2962FF]">
//                 <span>00</span>:<span>00</span>
//               </div>
//             </div>

//             {/* Card Number */}
//             <div className="card-field mb-6">
//               <label className="block text-sm font-semibold text-gray-700">Card Number</label>
//               <p className="text-xs text-gray-500 mb-2">Enter the 16-digit card number from the card</p>
//               <div className="grid grid-cols-4 gap-2">
//                 <input className="numbers p-3 text-center text-gray-600 bg-transparent border border-gray-300 rounded-md" type="number" placeholder="0000" />
//                 <input className="numbers p-3 text-center text-gray-600 bg-transparent border border-gray-300 rounded-md" type="number" placeholder="0000" />
//                 <input className="numbers p-3 text-center text-gray-600 bg-transparent border border-gray-300 rounded-md" type="number" placeholder="0000" />
//                 <input className="numbers p-3 text-center text-gray-600 bg-transparent border border-gray-300 rounded-md" type="number" placeholder="0000" />
//               </div>
//             </div>

//             {/* Expiry Date */}
//             <div className="expiry-date flex space-x-4 mb-6">
//               <div className="w-1/2">
//                 <label className="block text-sm font-semibold text-gray-700">Expiry Date</label>
//                 <div className="flex space-x-2">
//                   <input className="numbers p-3 text-center text-gray-600 bg-transparent border border-gray-300 rounded-md w-full" type="number" placeholder="MM" />
//                   <span className="text-2xl font-semibold">/</span>
//                   <input className="numbers p-3 text-center text-gray-600 bg-transparent border border-gray-300 rounded-md w-full" type="number" placeholder="YY" />
//                 </div>
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-sm font-semibold text-gray-700">CVC</label>
//                 <input className="p-3 text-center text-gray-600 bg-transparent border border-gray-300 rounded-md w-full" type="password" placeholder="CVC" />
//               </div>
//             </div>

//             {/* Name */}
//             <div className="name mb-6">
//               <label className="block text-sm font-semibold text-gray-700">Cardholder Name</label>
//               <input className="p-3 text-center text-gray-600 bg-transparent border border-gray-300 rounded-md w-full uppercase" type="text" placeholder="CARDHOLDER NAME" />
//             </div>

//             {/* Pay Now Button */}
//             <div className="action flex justify-center mt-6">
//               <button type="submit" className="b-main-color cursor-pointer py-3 px-8 bg-[#2962FF] text-white rounded-md hover:bg-[#2979FF] transition-all">
//                 Pay Now
//               </button>
//             </div>
//           </div>

//           {/* <div className="header flex justify-between items-center mb-6">
//           <div className="flex items-center">
//             <i className="ai-bitcoin-fill text-orange-500 text-2xl"></i>
//             <span className="text-lg font-semibold ml-2">
//               <strong>AceCoin</strong>
//               <span className="font-normal">Pay</span>
//             </span>
//           </div>
//           <div className="timer text-sm">
//             <span>0</span>
//             <span>5</span>
//             <em>:</em>
//             <span>0</span>
//             <span>0</span>
//           </div>
//         </div> */}

//           {/* Sidebar Section */}
//           <div className="sidebar flex-1 p-6 bg-[#F1F1F1] rounded-lg ml-6 shadow-lg">
//             <div className="card-mockup flex flex-col items-center mb-8">
//               <div className="flex justify-between w-full mb-4">
//                 <i className="ai-bitcoin-fill text-[#FF9800] text-xl"></i>
//                 <i className="ai-wifi text-lg text-[#FF9800]"></i>
//               </div>
//               <div className="w-full text-center">
//                 <div className="text-lg font-semibold text-[#2962FF]">Mr. Cardholder</div>
//                 <div className="text-md font-semibold text-[#2962FF] mt-2">
//                   <span>• • • •</span><span className="pl-2">0000</span>
//                 </div>
//                 <div className="flex justify-between items-center mt-6">
//                   <span className="text-md font-semibold">08/25</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                     <circle cx="12" cy="12" r="9" fill="#FF9800" />
//                     <path d="M16 18H8V10H16V18Z" fill="white" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <ul className="purchase-props space-y-3 mb-6">
//               <li className="flex justify-between">
//                 <span className="text-sm font-medium text-gray-600">Company</span>
//                 <span className="text-sm font-semibold text-gray-800">Apple</span>
//               </li>
//               <li className="flex justify-between">
//                 <span className="text-sm font-medium text-gray-600">Order Number</span>
//                 <span className="text-sm font-semibold text-gray-800">429252965</span>
//               </li>
//               <li className="flex justify-between">
//                 <span className="text-sm font-medium text-gray-600">Product</span>
//                 <span className="text-sm font-semibold text-gray-800">MacBook Air</span>
//               </li>
//               <li className="flex justify-between">
//                 <span className="text-sm font-medium text-gray-600">VAT (20%)</span>
//                 <span className="text-sm font-semibold text-gray-800">$100.00</span>
//               </li>
//             </ul>

//             <div className="separation-line border-t border-dashed border-[#aaa] my-4"></div>

//             <div className="total-section flex justify-between items-center">
//               <div className="flex flex-col">
//                 <div className="total-label text-[#FF9800] text-lg font-semibold">You have to Pay</div>
//                 <div className="flex items-center text-xl font-bold">
//                   <span>$549</span><span className="text-sm text-[#FF9800] ml-2">.99</span>
//                   <span className="text-sm ml-2 text-[#FF9800]">USD</span>
//                 </div>
//               </div>
//               <i className="ai-coin text-3xl text-[#FF9800]"></i>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default PaymentForm;

// import React from "react";

// const PaymentForm = () => {
//   return (
//     <div className="screen flex justify-center items-center min-h-screen bg-gray-100">
//       <form className="popup relative flex flex-col p-6 bg-white rounded-xl shadow-2xl">
//         {/* Close Button */}
//         <div className="close-btn absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer flex items-center justify-center">
//           <i className="ai-cross"></i>
//         </div>

//         {/* Header */}
//         <div className="header flex justify-between items-center mb-6">
//           <div className="flex items-center">
//             <i className="ai-bitcoin-fill text-orange-500 text-2xl"></i>
//             <span className="text-lg font-semibold ml-2">
//               <strong>AceCoin</strong>
//               <span className="font-normal">Pay</span>
//             </span>
//           </div>
//           <div className="timer text-sm">
//             <span>0</span>
//             <span>5</span>
//             <em>:</em>
//             <span>0</span>
//             <span>0</span>
//           </div>
//         </div>

//         {/* Card Form */}
//         <div className="card-data flex flex-col">

//           {/* Card Number */}
//           <div className="mb-6 flex justify-between items-center">
//             <div>
//               <strong className="text-lg">Card Number</strong>
//               <span className="text-sm text-gray-500">Enter 16-digit card number</span>
//             </div>
//             <div className="text-blue-600 cursor-pointer">
//               <i className="ai-pencil"></i> Edit
//             </div>
//           </div>

//           {/* Card Field */}
//           <div className="mb-6 flex items-center space-x-2">
//             <div className="card-number flex-1 flex items-center border border-gray-300 rounded-lg p-2">
//               <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
//                 <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
//                 <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
//                 <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"/>
//               </svg>
//               <input className="flex-1 text-center bg-transparent outline-none p-2" type="number" min="1" max="9999" placeholder="0000"/>
//               <span>-</span>
//               <input className="flex-1 text-center bg-transparent outline-none p-2" type="number" placeholder="0000"/>
//               <span>-</span>
//               <input className="flex-1 text-center bg-transparent outline-none p-2" type="number" placeholder="0000"/>
//               <span>-</span>
//               <input className="flex-1 text-center bg-transparent outline-none p-2" type="number" placeholder="0000"/>
//             </div>
//             <i className="ai-circle-check-fill text-green-500 text-2xl"></i>
//           </div>

//           {/* Expiry Date */}
//           <div className="mb-6 flex justify-between items-center">
//             <div>
//               <strong className="text-lg">Expiry Date</strong>
//               <span className="text-sm text-gray-500">Enter the expiration date of the card</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <input className="w-16 text-center bg-gray-100 border border-gray-300 rounded-lg outline-none p-2" type="number" min="1" max="12" placeholder="MM"/>
//               <span>/</span>
//               <input className="w-16 text-center bg-gray-100 border border-gray-300 rounded-lg outline-none p-2" type="number" min="23" max="99" placeholder="YY"/>
//             </div>
//           </div>

//           {/* CVC Number */}
//           <div className="mb-6 flex justify-between items-center">
//             <div>
//               <strong className="text-lg">CVC Number</strong>
//               <span className="text-sm text-gray-500">Enter the card verification code from the back of the card</span>
//             </div>
//             <div className="relative">
//               <input className="w-24 p-2 bg-gray-100 border border-gray-300 rounded-lg outline-none" id="cvc" type="password"/>
//               <i id="cvc_toggler" className="ai-eye-open absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"></i>
//             </div>
//           </div>

//           {/* Cardholder Name */}
//           <div className="mb-6 flex justify-between items-center">
//             <div>
//               <strong className="text-lg">Cardholder Name</strong>
//               <span className="text-sm text-gray-500">Enter the cardholder's name</span>
//             </div>
//             <div className="relative">
//               <input className="p-2 w-full bg-gray-100 border border-gray-300 rounded-lg outline-none uppercase" id="name" type="text" placeholder="CARDHOLDER NAME"/>
//               <i className="ai-person absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
//             </div>
//           </div>

//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-6">
//           <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Pay Now
//           </button>
//         </div>

//         {/* Sidebar */}
//         <div className="sidebar bg-gray-100 p-6 rounded-lg shadow-md">
//           <div className="purchase-section space-y-4">
//             <div className="card-mockup flex flex-col space-y-4">
//               <div className="flex justify-between items-center">
//                 <i className="ai-bitcoin-fill text-orange-500 text-2xl"></i>
//                 <i className="ai-wifi text-gray-600 text-lg"></i>
//               </div>
//               <div>
//                 <div id="name_mock" className="text-md pb-2 uppercase text-ellipsis overflow-hidden whitespace-nowrap">mr. Cardholder</div>
//                 <div className="text-md pb-4">
//                   <strong>
//                     <span className="pr-2">•</span><span id="carddigits_mock">0000</span>
//                   </strong>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <strong className="text-md">
//                     <span id="mm_mock">00</span>/<span id="yy_mock">01</span>
//                   </strong>
//                   <svg className="w-6 h-6 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
//                     <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
//                     <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
//                     <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Purchase Details */}
//             <ul className="purchase-props space-y-2">
//               <li className="flex justify-between text-sm text-gray-600">
//                 <span>Company</span>
//                 <span className="font-medium">Apple</span>
//               </li>
//               <li className="flex justify-between text-sm text-gray-600">
//                 <span>Order number</span>
//                 <span className="font-medium">429252965</span>
//               </li>
//               <li className="flex justify-between text-sm text-gray-600">
//                 <span>Product</span>
//                 <span className="font-medium">MacBook Air</span>
//               </li>
//               <li className="flex justify-between text-sm text-gray-600">
//                 <span>VAT (20%)</span>
//                 <span className="font-medium">$100.00</span>
//               </li>
//             </ul>

//             {/* Divider */}
//             <div className="border-t border-gray-300 my-4"></div>

//             {/* Total */}
//             <div className="total flex justify-between items-center">
//               <div>
//                 <span className="text-gray-500">You have to Pay</span>
//                 <h2 className="text-2xl font-bold text-gray-800">549.99 <span className="text-sm">USD</span></h2>
//               </div>
//               <i className="ai-coin text-yellow-500 text-2xl"></i>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;

//                                                                                             html to react code
// import React from "react";

// const PaymentForm = () => {
//   return (
//     <div className="screen flex-center">
//       <form className="popup flex p-lg">
//         <div className="close-btn pointer flex-center p-sm">
//           <i className="ai-cross"></i>
//         </div>

//         {/* CARD FORM */}
//         <div className="flex-fill flex-vertical">
//           <div className="header flex-between flex-vertical-center">
//             <div className="flex-vertical-center">
//               <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
//               <span className="title">
//                 <strong>AceCoin</strong><span>Pay</span>
//               </span>
//             </div>
//             <div className="timer" data-id="timer">
//               <span>0</span><span>5</span>
//               <em>:</em>
//               <span>0</span><span>0</span>
//             </div>
//           </div>
//           <div className="card-data flex-fill flex-vertical">

//             {/* Card Number */}
//             <div className="flex-between flex-vertical-center">
//               <div className="card-property-title">
//                 <strong>Card Number</strong>
//                 <span>Enter 16-digit card number on the card</span>
//               </div>
//               <div className="f-main-color pointer">
//                 <i className="ai-pencil"></i> Edit
//               </div>
//             </div>

//             {/* Card Field */}
//             <div className="flex-between">
//               <div className="card-number flex-vertical-center flex-fill">
//                 <div className="card-number-field flex-vertical-center flex-fill">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
//                     <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
//                     <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
//                     <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"/>
//                   </svg>
//                   <input className="numbers" type="number" min="1" max="9999" placeholder="0000"/>-
//                   <input className="numbers" type="number" placeholder="0000"/>-
//                   <input className="numbers" type="number" placeholder="0000"/>-
//                   <input className="numbers" type="number" placeholder="0000" data-bound="carddigits_mock" data-def="0000"/>
//                 </div>
//                 <i className="ai-circle-check-fill size-lg f-main-color"></i>
//               </div>
//             </div>

//             {/* Expiry Date */}
//             <div className="flex-between">
//               <div className="card-property-title">
//                 <strong>Expiry Date</strong>
//                 <span>Enter the expiration date of the card</span>
//               </div>
//               <div className="card-property-value flex-vertical-center">
//                 <div className="input-container half-width">
//                   <input className="numbers" data-bound="mm_mock" data-def="00" type="number" min="1" max="12" step="1" placeholder="MM"/>
//                 </div>
//                 <span className="m-md">/</span>
//                 <div className="input-container half-width">
//                   <input className="numbers" data-bound="yy_mock" data-def="01" type="number" min="23" max="99" step="1" placeholder="YY"/>
//                 </div>
//               </div>
//             </div>

//             {/* CCV Number */}
//             <div className="flex-between">
//               <div className="card-property-title">
//                 <strong>CVC Number</strong>
//                 <span>Enter card verification code from the back of the card</span>
//               </div>
//               <div className="card-property-value">
//                 <div className="input-container">
//                   <input id="cvc" type="password"/>
//                   <i id="cvc_toggler" data-target="cvc" className="ai-eye-open pointer"></i>
//                 </div>
//               </div>
//             </div>

//             {/* Name */}
//             <div className="flex-between">
//               <div className="card-property-title">
//                 <strong>Cardholder Name</strong>
//                 <span>Enter cardholder's name</span>
//               </div>
//               <div className="card-property-value">
//                 <div className="input-container">
//                   <input id="name" data-bound="name_mock" data-def="Mr. Cardholder" type="text" className="uppercase" placeholder="CARDHOLDER NAME"/>
//                   <i className="ai-person"></i>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div className="action flex-center">
//             <button type="submit" className="b-main-color pointer">Pay Now</button>
//           </div>
//         </div>

//         {/* SIDEBAR */}
//         <div className="sidebar flex-vertical">
//           <div className="purchase-section flex-fill flex-vertical">
//             <div className="card-mockup flex-vertical">
//               <div className="flex-fill flex-between">
//                 <i className="ai-bitcoin-fill size-xl f-secondary-color"></i>
//                 <i className="ai-wifi size-lg f-secondary-color"></i>
//               </div>
//               <div>
//                 <div id="name_mock" className="size-md pb-sm uppercase ellipsis">mr. Cardholder</div>
//                 <div className="size-md pb-md">
//                   <strong>
//                     <span className="pr-sm">
//                       &#x2022;&#x2022;&#x2022;&#x2022;
//                     </span>
//                     <span id="carddigits_mock">0000</span>
//                   </strong>
//                 </div>
//                 <div className="flex-between flex-vertical-center">
//                   <strong className="size-md">
//                     <span id="mm_mock">00</span>/<span id="yy_mock">01</span>
//                   </strong>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
//                     <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
//                     <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
//                     <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <ul className="purchase-props">
//               <li className="flex-between">
//                 <span>Company</span>
//                 <strong>Apple</strong>
//               </li>
//               <li className="flex-between">
//                 <span>Order number</span>
//                 <strong>429252965</strong>
//               </li>
//               <li className="flex-between">
//                 <span>Product</span>
//                 <strong>MacBook Air</strong>
//               </li>
//               <li className="flex-between">
//                 <span>VAT (20%)</span>
//                 <strong>$100.00</strong>
//               </li>
//             </ul>
//           </div>
//           <div className="separation-line"></div>
//           <div className="total-section flex-between flex-vertical-center">
//             <div className="flex-fill flex-vertical">
//               <div className="total-label f-secondary-color">You have to Pay</div>
//               <div>
//                 <strong>549</strong>
//                 <small>.99 <span className="f-secondary-color">USD</span></small>
//               </div>
//             </div>
//             <i className="ai-coin size-lg"></i>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;

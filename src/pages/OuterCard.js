import React, { useState } from 'react';
import Cart from "../components/Cart";
import Address from "../components/Address";
import Payment from "../components/PaymentForm";
import Summary from "../components/Summary";

function OuterCard() {
  const [currentStep, setCurrentStep] = useState("cart"); // Default step is 'cart'

  // Function to handle step change
  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full p-5 bg-[#e5f3ff] pt-32">
        <div
          onClick={() => handleStepChange("cart")}
          className="text-xs text-gray-500 flex flex-col items-center gap-1 cursor-pointer"
        >
          <div className={`w-[18px] h-[18px] rounded-full border-[3px] ${currentStep === 'cart' ? 'border-[#4e66ec]' : 'border-[#e1dddd]'}`} />
          <div className={currentStep === 'cart' ? 'text-royalblue' : ''}>Cart</div>
        </div>
        <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
        <div
          onClick={() => handleStepChange("address")}
          className="text-xs text-gray-500 flex flex-col items-center gap-1 cursor-pointer"
        >
          <div className={`w-[18px] h-[18px] rounded-full border-[3px] ${currentStep === 'address' ? 'border-[#4e66ec]' : 'border-[#e1dddd]'}`} />
          <div className={currentStep === 'address' ? 'text-royalblue' : ''}>Address</div>
        </div>
        <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
        <div
          onClick={() => handleStepChange("payment")}
          className="text-xs text-gray-500 flex flex-col items-center gap-1 cursor-pointer"
        >
          <div className={`w-[18px] h-[18px] rounded-full border-[3px] ${currentStep === 'payment' ? 'border-[#4e66ec]' : 'border-[#e1dddd]'}`} />
          <div className={currentStep === 'payment' ? 'text-royalblue' : ''}>Payment</div>
        </div>
        <hr className="w-[5%] h-[3px] bg-[#e1dddd] border-none" />
        <div
          onClick={() => handleStepChange("summary")}
          className="text-xs text-gray-500 flex flex-col items-center gap-1 cursor-pointer"
        >
          <div className={`w-[18px] h-[18px] rounded-full border-[3px] ${currentStep === 'summary' ? 'border-[#4e66ec]' : 'border-[#e1dddd]'}`} />
          <div className={currentStep === 'summary' ? 'text-royalblue' : ''}>Summary</div>
        </div>
      </div>

      {/* Conditionally render components based on the current step */}
      {currentStep === "cart" && <Cart handleStepChange={handleStepChange} />}
      {currentStep === "address" && <Address handleStepChange={handleStepChange} />}
      {currentStep === "payment" && <Payment handleStepChange={handleStepChange} />}
      {currentStep === "summary" && <Summary handleStepChange={handleStepChange} />}
    </>
  );
}

export default OuterCard;

import React, { useState } from "react";

const Address = ({handleStepChange}) => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSaveAddress = () => {
    // Handle saving address logic
    console.log("Address saved:", address);
  };

  return (
    <div className="bg-[#e5f3ff] pt-24 min-h-screen">

      <div className="container mx-auto p-6 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shipping Address</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Street</label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Street address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="City"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="State"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={address.postalCode}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Postal Code"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Country"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg"
              onClick={() => {}}
            >
              Cancel
            </button>
            <button
              className="bg-pink-600 text-white py-2 px-6 rounded-lg"
              onClick={() => handleStepChange("payment")}
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({ item, onRemove, onEdit }) => {
  return (
    <div className="flex p-6 border border-gray-300 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow">
      <img
        src={item.imageLink[0]}
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
          Type: {item.type} • Qty {item.ordered}
        </p>
        <button
          className="text-gray-600 text-sm mt-3 hover:text-red-500"
          onClick={() => onRemove(item)}
        >
          ✖ Remove
        </button>
        <div className="text-gray-600 text-sm mt-2">
          Sold By: {item.brand} •{" "}
          <span className="text-green-500">Free Delivery</span>
        </div>
      </div>
      <p className="font-semibold text-gray-800 text-lg">
        ₹{(item.price * item.ordered).toFixed(2)}
      </p>
    </div>
  );
};

const PriceDetails = ({ totalPrice, onProceed ,handleStepChange }) => {
  const discount = totalPrice * 0.05; // Assuming a 5% discount
  const finalPrice = totalPrice - discount;

  return (
    <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
      <h3 className="font-semibold text-gray-800 text-xl mb-6">Price Details</h3>
      <div className="flex justify-between mb-3">
        <span className="text-gray-700">Total Product Price</span>
        <span className="font-semibold text-gray-800">₹{totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-3">
        <span className="text-gray-700">Discount (5%)</span>
        <span className="font-semibold text-green-600">-₹{discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-t border-gray-300 pt-3 mb-6">
        <span className="text-gray-700">Order Total</span>
        <span className="font-semibold text-gray-800">₹{finalPrice.toFixed(2)}</span>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Clicking on 'Continue' will not deduct any money.
      </p>
      <button
        className="w-full block text-center bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-700 transition-colors"
        onClick={() => handleStepChange("address")}
      >
        Continue
      </button>
      <div className="mt-6 bg-blue-100 p-4 rounded-lg">
        <img
          src="https://images.meesho.com/images/marketing/1588578650850.webp"
          alt="MeeSho Safe"
          className="w-full object-contain"
        />
        <p className="text-sm text-gray-600 mt-2">
          Your Safety, Our Priority
          <br />
          We ensure that your package is safe at every point of contact.
        </p>
      </div>
    </div>
  );
};

const Cart = ({handleStepChange}) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.first);
  const [cartItems, setCartItems] = useState(cart);
  const [editItem, setEditItem] = useState(null);

  const calculateTotalPrice = (items) =>
    items.reduce((total, item) => total + item.price * item.ordered, 0);
  const totalPrice = calculateTotalPrice(cartItems);

  const handleRemove = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
    dispatch({ type: 'UPDATE_CART_DATA', payload: updatedCart });
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, Math.min(e.target.value, editItem.quantity));
    setEditItem({
      ...editItem,
      ordered: newQuantity
    });
  };

  const handleSave = () => {
    const updatedCart = cartItems.map((item) =>
      item.id === editItem.id ? { ...item, ordered: editItem.ordered } : item
    );
    setCartItems(updatedCart);
    dispatch({ type: 'UPDATE_CART_DATA', payload: updatedCart });
    setEditItem(null);
  };

  const handleCancel = () => {
    setEditItem(null);
  };

  return (
    <div className="bg-[#e5f3ff] min-h-screen">

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
        <PriceDetails totalPrice={totalPrice} handleStepChange={handleStepChange} onProceed={() => {}} />
      </div>

      {editItem && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Item</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="number"
                min="1"
                max={editItem.quantity}
                value={editItem.ordered}
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
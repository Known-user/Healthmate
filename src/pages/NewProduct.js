import React, { useState } from 'react';

function NewProduct() {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleAddProduct = () => {
        console.log("Product Added:", { productName, price, description });
    };

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">Add New Product</h2>
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full p-3 border rounded"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Price"
                    className="w-full p-3 border rounded"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    className="w-full p-3 border rounded"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    onClick={handleAddProduct}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                    Add Product
                </button>
            </div>
        </div>
    );
}

export default NewProduct;

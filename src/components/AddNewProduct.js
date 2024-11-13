// import React, { useState } from 'react';

// const AddNewProduct = () => {
//     const [product, setProduct] = useState({
//         name: '',
//         description: '',
//         imageLink: [''],
//         type: '',
//         quantity: '',
//         productType: '',
//         categories: [''],
//         brand: '',
//         price: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({
//             ...product,
//             [name]: value
//         });
//     };

//     const handleImageLinkChange = (index, value) => {
//         const newImageLinks = [...product.imageLink];
//         newImageLinks[index] = value;
//         setProduct({ ...product, imageLink: newImageLinks });
//     };

//     const handleCategoryChange = (index, value) => {
//         const newCategories = [...product.categories];
//         newCategories[index] = value;
//         setProduct({ ...product, categories: newCategories });
//     };

//     const addField = (field) => {
//         setProduct({
//             ...product,
//             [field]: [...product[field], '']
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:3001/api/admin/new', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(product)
//             });
//             const result = await response.json();
//             console.log(result)
//             if (result.success) {
//                 alert('Product added successfully!');
//                 setProduct({
//                     name: '',
//                     price: '',
//                     description: '',
//                     imageLink: [''],
//                     type: '',
//                     quantity: '',
//                     productType: '',
//                     categories: [''],
//                     brand: '',
//                 });
//             } else {
//                 alert(result.message);
//             }
//         } catch (error) {
//             alert('An error occurred: ' + error.message);
//         }
//     };

//     return (
//         <section id="new-product" className="p-8 bg-white shadow-lg rounded-lg">
//             <h2 className="text-4xl font-bold mb-6 text-blue-800">Add New Product</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                     type="text"
//                     name="name"
//                     value={product.name}
//                     onChange={handleChange}
//                     placeholder="Product Name"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <textarea
//                     name="description"
//                     value={product.description}
//                     onChange={handleChange}
//                     placeholder="Description"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
                
//                 {product.imageLink.map((link, index) => (
//                     <input
//                         key={index}
//                         type="url"
//                         value={link}
//                         onChange={(e) => handleImageLinkChange(index, e.target.value)}
//                         placeholder="Image Link"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 ))}
//                 <button type="button" onClick={() => addField('imageLink')} className="text-blue-500">
//                     + Add Image Link
//                 </button>

//                 <input
//                     type="text"
//                     name="type"
//                     value={product.type}
//                     onChange={handleChange}
//                     placeholder="Type"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="quantity"
//                     value={product.quantity}
//                     onChange={handleChange}
//                     placeholder="Quantity"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="productType"
//                     value={product.productType}
//                     onChange={handleChange}
//                     placeholder="Product Type"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />

//                 {product.categories.map((category, index) => (
//                     <input
//                         key={index}
//                         type="text"
//                         value={category}
//                         onChange={(e) => handleCategoryChange(index, e.target.value)}
//                         placeholder="Category"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 ))}
//                 <button type="button" onClick={() => addField('categories')} className="text-blue-500">
//                     + Add Category
//                 </button>

//                 <input
//                     type="text"
//                     name="brand"
//                     value={product.brand}
//                     onChange={handleChange}
//                     placeholder="Brand"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />

//                 <input
//                     type="number"
//                     name="price"
//                     value={product.price}
//                     onChange={handleChange}
//                     placeholder="Price"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
                
//                 <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
//                     Submit
//                 </button>
//             </form>
//         </section>
//     );
// };

// export default AddNewProduct;

// import React, { useState } from 'react';

// const AddNewProduct = () => {
//     const [product, setProduct] = useState({
//         name: '',
//         description: '',
//         imageLink: [''],
//         type: '',
//         quantity: '',
//         productType: '',
//         categories: [''],
//         brand: '',
//         price: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({
//             ...product,
//             [name]: value
//         });
//     };

//     const handleImageLinkChange = (index, value) => {
//         const newImageLinks = [...product.imageLink];
//         newImageLinks[index] = value;
//         setProduct({ ...product, imageLink: newImageLinks });
//     };

//     const handleCategoryChange = (index, value) => {
//         const newCategories = [...product.categories];
//         newCategories[index] = value;
//         setProduct({ ...product, categories: newCategories });
//     };

//     const addField = (field) => {
//         setProduct({
//             ...product,
//             [field]: [...product[field], '']
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Ensure price and quantity are numbers before submitting
//         const updatedProduct = {
//             ...product,
//             price: parseFloat(product.price),
//             quantity: parseInt(product.quantity, 10),
//         };

//         try {
//             const response = await fetch('http://localhost:3001/api/admin/new', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(updatedProduct)
//             });
//             const result = await response.json();
//             if (result.success) {
//                 alert('Product added successfully!');
//                 setProduct({
//                     name: '',
//                     description: '',
//                     imageLink: [''],
//                     type: '',
//                     quantity: '',
//                     productType: '',
//                     categories: [''],
//                     brand: '',
//                     price: ''
//                 });
//             } else {
//                 alert(result.message);
//             }
//         } catch (error) {
//             alert('An error occurred: ' + error.message);
//         }
//     };

//     return (
//         <section id="new-product" className="p-8 bg-white shadow-lg rounded-lg">
//             <h2 className="text-4xl font-bold mb-6 text-blue-800">Add New Product</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                     type="text"
//                     name="name"
//                     value={product.name}
//                     onChange={handleChange}
//                     placeholder="Product Name"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <textarea
//                     name="description"
//                     value={product.description}
//                     onChange={handleChange}
//                     placeholder="Description"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
                
//                 {product.imageLink.map((link, index) => (
//                     <input
//                         key={index}
//                         type="url"
//                         value={link}
//                         onChange={(e) => handleImageLinkChange(index, e.target.value)}
//                         placeholder="Image Link"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 ))}
//                 <button type="button" onClick={() => addField('imageLink')} className="text-blue-500">
//                     + Add Image Link
//                 </button>

//                 <input
//                     type="text"
//                     name="type"
//                     value={product.type}
//                     onChange={handleChange}
//                     placeholder="Type"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="quantity"
//                     value={product.quantity}
//                     onChange={handleChange}
//                     placeholder="Quantity"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="productType"
//                     value={product.productType}
//                     onChange={handleChange}
//                     placeholder="Product Type"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />

//                 {product.categories.map((category, index) => (
//                     <input
//                         key={index}
//                         type="text"
//                         value={category}
//                         onChange={(e) => handleCategoryChange(index, e.target.value)}
//                         placeholder="Category"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 ))}
//                 <button type="button" onClick={() => addField('categories')} className="text-blue-500">
//                     + Add Category
//                 </button>

//                 <input
//                     type="text"
//                     name="brand"
//                     value={product.brand}
//                     onChange={handleChange}
//                     placeholder="Brand"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />

//                 <input
//                     type="number"
//                     name="price"
//                     value={product.price}
//                     onChange={handleChange}
//                     placeholder="Price"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     required
//                 />
                
//                 <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
//                     Submit
//                 </button>
//             </form>
//         </section>
//     );
// };

// export default AddNewProduct;





import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddNewProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        imageLink: [''],
        type: '',
        quantity: '',
        productType: '',
        categories: [''],
        brand: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleImageLinkChange = (index, value) => {
        const newImageLinks = [...product.imageLink];
        newImageLinks[index] = value;
        setProduct({ ...product, imageLink: newImageLinks });
    };

    const handleCategoryChange = (index, value) => {
        const newCategories = [...product.categories];
        newCategories[index] = value;
        setProduct({ ...product, categories: newCategories });
    };

    const addField = (field) => {
        setProduct({
            ...product,
            [field]: [...product[field], '']
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Ensure price and quantity are numbers before submitting
        const updatedProduct = {
            ...product,
            price: parseFloat(product.price),
            quantity: parseInt(product.quantity, 10),
        };

        try {
            const response = await fetch('http://localhost:3001/api/admin/new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProduct)
            });
            const result = await response.json();
            if (result.success) {
                toast.success('Product added successfully!');
                setProduct({
                    name: '',
                    description: '',
                    imageLink: [''],
                    type: '',
                    quantity: '',
                    productType: '',
                    categories: [''],
                    brand: '',
                    price: ''
                });
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error('An error occurred: ' + error.message);
        }
    };

    return (
        <section id="new-product" className="p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                
                {product.imageLink.map((link, index) => (
                    <input
                        key={index}
                        type="url"
                        value={link}
                        onChange={(e) => handleImageLinkChange(index, e.target.value)}
                        placeholder="Image Link"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                ))}
                <button type="button" onClick={() => addField('imageLink')} className="text-blue-500">
                    + Add Image Link
                </button>

                <select
                    name="type"
                    value={product.type}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                >
                    <option value="">Select Type</option>
                    <option value="Meds">Meds</option>
                    <option value="Supplement">Supplement</option>
                    <option value="Cosmetic">Cosmetic</option>
                    <option value="Food">Food</option>
                </select>

                <select
                    name="productType"
                    value={product.productType}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                >
                    <option value="">Select Product Type</option>
                    <option value="capsule">Capsule</option>
                    <option value="tablet">Tablet</option>
                    <option value="powder">Powder</option>
                    <option value="sachet">Sachet</option>
                    <option value="other">Other</option>
                </select>

                {product.categories.map((category, index) => (
                    <select
                        key={index}
                        value={category}
                        onChange={(e) => handleCategoryChange(index, e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Category</option>
                        <option value="Hair_Care">Hair Care</option>
                        <option value="Oral_Care">Oral Care</option>
                        <option value="Sexual_Wellness">Sexual Wellness</option>
                        <option value="Skin_Care">Skin Care</option>
                        <option value="Feminine_Care">Feminine Care</option>
                        <option value="Baby_Care">Baby Care</option>
                        <option value="Elderly_Care">Elderly Care</option>
                        <option value="Men_Grooming">Men Grooming</option>
                        <option value="Vitamin_And_Nutrition">Vitamin And Nutrition</option>
                        <option value="Fitness_Supplements">Fitness Supplements</option>
                        <option value="Nutritional_Drinks">Nutritional Drinks</option>
                        <option value="Healthy_Snacks">Healthy Snacks</option>
                        <option value="Herbal_Juice">Herbal Juice</option>
                        <option value="Monitoring_Devices">Monitoring Devices</option>
                        <option value="Rehydration_Beverages">Rehydration Beverages</option>
                        <option value="Immunity_Boosters">Immunity Boosters</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Stomach_Care">Stomach Care</option>
                        <option value="Cold_And_Cough">Cold And Cough</option>
                        <option value="Pain_Relief">Pain Relief</option>
                        <option value="First_Aid">First Aid</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Eye_And_Ear_Care">Eye And Ear Care</option>
                        <option value="Skin_Infection">Skin Infection</option>
                        <option value="Supports_And_Braces">Supports And Braces</option>
                    </select>
                ))}
                <button type="button" onClick={() => addField('categories')} className="text-blue-500">
                    + Add Category
                </button>

                <input
                    type="number"
                    name="quantity"
                    value={product.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                
                <input
                    type="text"
                    name="brand"
                    value={product.brand}
                    onChange={handleChange}
                    placeholder="Brand"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />

                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default AddNewProduct;

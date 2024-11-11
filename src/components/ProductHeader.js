import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductHeader({ head, shead, type }) {
  const [currCategory, setCurrCategory] = useState(type);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  const fetchBrands = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/brand/all");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setBrands(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/category/all");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };
  const fetchCategoryData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/category/${type}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategoryData(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  function formatHeaderName(name) {
    return name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  useEffect(() => {
    fetchCategories();
    fetchCategoryData();
    fetchBrands();
  }, []);
  const sortedCategories = categories.slice().sort((a, b) => {
    return a.name === currCategory ? -1 : b.name === currCategory ? 1 : 0;
  });
  // const categories = [
  //   { name: "Prescription Medications", count: 25 },
  //   { name: "Over-the-Counter (OTC)", count: 15 },
  //   { name: "Vitamins & Supplements", count: 10 },
  //   { name: "First Aid", count: 8 },
  //   { name: "Personal Care", count: 12 },
  //   { name: "Health Monitoring Devices", count: 4 },
  //   { name: "Skin Care", count: 7 },
  //   { name: "Digestive Health", count: 5 },
  //   { name: "Cold & Allergy", count: 6 },
  //   { name: "Pain Relief", count: 9 },
  // ];

  // const brands = [
  //   { name: "Pfizer", count: 20 },
  //   { name: "Johnson & Johnson", count: 15 },
  //   { name: "Merck", count: 10 },
  //   { name: "Bristol-Myers Squibb", count: 5 },
  //   { name: "AbbVie", count: 8 },
  //   { name: "GSK", count: 12 },
  //   { name: "Roche", count: 6 },
  //   { name: "AstraZeneca", count: 7 },
  //   { name: "Sanofi", count: 4 },
  //   { name: "Novartis", count: 11 },
  // ];

  const producttype = [
    { name: "capsule" },
    { name: "tablet" },
    { name: "powder" },
    { name: "sachet " },
    { name: "other" },
  ];
  const products = [
    {
      id: 1,
      image:
        "https://aforehand.in/wp-content/uploads/2023/10/PAIN-ALL-TABLET-1.jpg",
      name: "Pain Relief Tablet",
      description: "Fast-acting pain relief for headaches and migraines.",
      price: 12.99,
      originalPrice: 15.99,
      rating: 4,
    },
    {
      id: 2,
      image:
        "https://demazin.com.au/wp-content/uploads/2021/08/9310160822840-1-Demazin-Kids-6-Cough-Cold-Relief-1200x1200-1.png",
      name: "Cold and Flu Syrup",
      description: "Relieves cold and flu symptoms, soothing your throat.",
      price: 8.5,
      originalPrice: null,
      rating: 5,
    },
    {
      id: 3,
      image:
        "https://www.sasa.com/cdn/shop/products/106338203001-1.jpg?v=1656042009",
      name: "Vitamin C 500mg",
      description: "Boosts immunity and supports overall health.",
      price: 9.99,
      originalPrice: 11.99,
      rating: 4,
    },
    {
      id: 4,
      image:
        "https://careallproducts.com/wp-content/uploads/2021/10/LOR1030-Allergy-Relief-Loratadine.png",
      name: "Allergy Relief Tablets",
      description:
        "Provides relief from allergy symptoms like sneezing and itching.",
      price: 10.5,
      originalPrice: 12.5,
      rating: 4,
    },
    {
      id: 5,
      image:
        "https://images.apollo247.in/pub/media/catalog/product/D/E/DET0242_1-JULY23_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
      name: "Antiseptic Cream",
      description: "Helps prevent infection in minor cuts and scrapes.",
      price: 6.75,
      originalPrice: 8.0,
      rating: 5,
    },
    {
      id: 6,
      image:
        "https://images.ctfassets.net/umpxkz97ty8t/2XrKHGn4SHLh50qnPXXFBi/1df1a75ab4ff0fabc607c44a5282277b/Vicks3in1_HoneyLemon_NS_813x813.png",
      name: "Cough Lozenges",
      description: "Soothing lozenges to relieve cough and throat irritation.",
      price: 4.99,
      originalPrice: null,
      rating: 3,
    },
    // Add more products as needed
  ];

  return (
    // <div className="px-8 py-6 bg-white">
    //   {/* Breadcrumbs */}
    //   <div className="text-sm text-gray-500 mb-1">
    //     Home &gt; OTC &gt; <span className="text-green-600 font-medium">OneTouch Select Test Strips, 50 Count</span>
    //   </div>

    //   {/* Purchase Details */}
    //   <div className="text-sm text-green-600 font-semibold mb-4 flex items-center">
    //     <svg className="w-4 h-4 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //       <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    //     </svg>
    //     21 people bought in last 7 days
    //   </div>

    //   <div className="flex">
    //     {/* Left Section - Thumbnail Images */}
    //     <div className="flex flex-col items-center mr-6">
    //       <button className="mb-2 p-1 border border-gray-300 rounded-md">
    //         <img src="https://via.placeholder.com/64" alt="Thumbnail 1" className="w-16 h-16" />
    //       </button>
    //       <button className="mb-2 p-1 border border-gray-300 rounded-md">
    //         <img src="https://via.placeholder.com/64" alt="Thumbnail 2" className="w-16 h-16" />
    //       </button>
    //       <button className="p-1 border border-gray-300 rounded-md">
    //         <img src="https://via.placeholder.com/64" alt="Thumbnail 3" className="w-16 h-16" />
    //       </button>
    //     </div>

    //     {/* Center Section - Main Product Image */}
    //     <div className="flex flex-col items-center mr-6">
    //       <img src="https://via.placeholder.com/150" alt="Main Product" className="w-48 h-48 object-contain" />
    //     </div>

    //     {/* Right Section - Product Details */}
    //     <div className="ml-6 flex-grow max-w-md">
    //       {/* Product Title */}
    //       <h2 className="text-3xl font-bold mb-2">OneTouch Select Test Strips, 50 Count</h2>

    //       {/* Pack Sizes */}
    //       <div className="flex space-x-4 mb-4">
    //         <button className="px-4 py-2 border border-gray-300 rounded-md text-center">
    //           <div className="font-semibold">10</div>
    //           <div className="text-gray-600">₹395</div>
    //           <div className="text-xs text-gray-500">(₹39.5 per unit)</div>
    //           <div className="text-green-600 text-sm">In Stock</div>
    //         </button>
    //         <button className="px-4 py-2 border border-gray-300 rounded-md text-center">
    //           <div className="font-semibold">25</div>
    //           <div className="text-gray-600">₹672</div>
    //           <div className="text-xs text-gray-500">(₹26.88 per unit)</div>
    //           <div className="text-green-600 text-sm">In Stock</div>
    //         </button>
    //         <button className="px-4 py-2 border border-green-500 bg-green-50 rounded-md text-center">
    //           <div className="font-semibold">50</div>
    //           <div className="text-gray-600">₹1229.5</div>
    //           <div className="text-xs text-gray-500">(₹24.59 per unit)</div>
    //           <div className="text-green-600 text-sm">In Stock</div>
    //         </button>
    //       </div>

    //       {/* Product Meta Details */}
    //       <div className="text-sm text-gray-700">
    //         <p className="mb-1">
    //           Manufacturer/Marketer: <span className="text-blue-600 font-semibold">LIFESCAN MEDICAL DEVICES INDIA PVT LTD</span>
    //         </p>
    //         <p className="mb-1">Consume Type: NON CONSUMABLE</p>
    //         <p>
    //           Return Policy: <span className="text-blue-600 font-semibold">NOT RETURNABLE</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      {/* Header Section */}
      <div className="py-8 w-full mt-24 border-y bg-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-800">{head}</h1>
          <div className="text-lg py-3 flex">
            <Link to="/home" className="text-blue-600 hover:underline">
              Home
            </Link>
            <p className="px-2">/</p>
            <a href="" className="text-blue-600 hover:underline">
              {head}
            </a>
            <p className="px-2">/</p>
            <a href="" className="text-blue-600 hover:underline">
              {shead}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Deal Section */}
        <div className="grid grid-cols-4">
          {" "}
          <div className="col-span-1 h-full p-4 bg-card">
            {" "}
            {/* First div */}
            <div className="border">
              <h2 className="text-lg font-semibold border p-4 bg-gray-100">
                Categories
              </h2>

              <ul className="h-[630px] overflow-y-auto">
                {sortedCategories.map((category, index) => (
                  <li
                    key={index}
                    className={`p-4 border-b ${
                      category.name === currCategory
                        ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold shadow-lg"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <Link
                      to={`/${formatHeaderName(category.name)}`}
                      className="block"
                    >
                      {formatHeaderName(category.name)} {category.count}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border mt-4">
              <h2 className="text-lg font-semibold border p-4 bg-gray-100">
                Filter
              </h2>
              <div className="px-2">
                <h2 className="text-lg font-semibold border-b p-4">Brand</h2>
                <ul className="h-56 overflow-y-auto">
                  {brands.map((category, index) => (
                    <div
                      key={index}
                      className="flex justify-between p-4 border-b"
                    >
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        {category.name}
                      </label>
                      <div className="rounded-full text-center text-sm text-white h-fit w-7 bg-gray-600">
                        {category.count}
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="px-2">
                <h2 className="text-lg font-semibold border-b mt-2 p-4">
                  Product Type
                </h2>
                <ul className="h-56 overflow-y-auto">
                  {producttype.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center p-4 border-b"
                    >
                      <input type="checkbox" className="mr-2" />
                      {category.name}
                    </label>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-3 p-4 h-full flex flex-col">
            {" "}
            {/* Second div */}
            <div className="flex justify-between items-center px-4 py-4 bg-gray-200 border border-gray-300 rounded shadow-md">
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                  Product Compare (0)
                </button>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="sort"
                  className="mr-2 text-gray-700 font-semibold"
                >
                  Sort By:
                </label>
                <select
                  id="sort"
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="default">Default</option>
                  <option value="price">Price</option>
                </select>
                <label
                  htmlFor="show"
                  className="ml-4 mr-2 text-gray-700 font-semibold"
                >
                  Show:
                </label>
                <select
                  id="show"
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="15">15</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>
            <div className="bg-white rounded border flex-grow flex flex-col justify-between">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {categoryData.map((product, index) => (
                    <Link to="/description" onClick={() => dispatch({ type: 'PRODUCT', payload: product })} key={index} className="flex flex-col mb-4">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                        <img
                          className="w-full h-64 object-cover transition-transform transform hover:scale-105"
                          src={product.imageLink[0]}
                          alt="Product Image"
                        />
                        <div className="p-5 flex-grow flex flex-col">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {product.description}
                          </p>
                          <div className="flex-grow">
                            <p className="m-0">
                              {[...Array(product.rating)].map((_, index) => (
                                <i
                                  key={index}
                                  className="far fa-star text-xs text-yellow-500"
                                ></i>
                              ))}
                            </p>
                          </div>
                          <p className="text-lg m-0 text-gray-900">
                            ${product.price.toFixed(2)}
                          </p>
                          {product.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              ${product.originalPrice.toFixed(2)}
                            </p>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex justify-around">
                            <button
                              type="button"
                              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                            >
                              <i className="fas fa-cart-plus"></i>{" "}
                              <span>Add Cart</span>
                            </button>
                            <button
                              type="button"
                              className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition"
                            >
                              <i className="fas fa-shopping-cart"></i>
                            </button>
                            <button
                              type="button"
                              className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition"
                            >
                              <i className="fas fa-heart"></i>
                            </button>
                            <button
                              type="button"
                              className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition"
                            >
                              <i className="fas fa-sync-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pagination Section */}
              <div className="p-6 border-t bg-gray-100">
                <div className="flex justify-between">
                  <div>
                    <ul className="flex list-none p-0">
                      <li className="disabled">
                        <a
                          className="px-4 py-2 border rounded text-gray-400 bg-white cursor-not-allowed"
                          href="#"
                          tabIndex="-1"
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li>
                        <a
                          className="px-4 py-2 border rounded text-gray-800 bg-white"
                          href="#"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          className="px-4 py-2 border rounded text-gray-800 bg-white"
                          href="#"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          className="px-4 py-2 border rounded text-gray-800 bg-white"
                          href="#"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          className="px-4 py-2 border rounded text-gray-800 bg-white"
                          href="#"
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-right mb-0 mt-1">
                      Showing 1 to 12 of 12 (1 Pages)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 pt-10">
          <div className="w-full">
            <div className="bg-white rounded shadow-lg">
              <div className="p-6">
                {" "}
                {/* Increased padding for a larger feel */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {" "}
                  {/* Increased gap */}
                  <div className="flex items-center">
                    {" "}
                    {/* Added flex for better alignment */}
                    <i className="fas fa-shipping-fast text-4xl float-left mr-4"></i>{" "}
                    {/* Increased icon size */}
                    <p className="text-lg">
                      {" "}
                      {/* Increased font size */}
                      Free shipping & Return <br />
                      <small className="text-muted text-base">
                        {" "}
                        {/* Increased small text size */}
                        For all orders over $500
                      </small>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-thumbs-up text-4xl float-left mr-4"></i>
                    <p className="text-lg">
                      Customer Protection <br />
                      <small className="text-muted text-base">
                        From click to delivery.
                      </small>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-umbrella text-4xl float-left mr-4"></i>
                    <p className="text-lg">
                      Safe Payment <br />
                      <small className="text-muted text-base">
                        Use world’s most secure payment methods.
                      </small>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-life-ring text-4xl float-left mr-4"></i>
                    <p className="text-lg">
                      Support 24/7 <br />
                      <small className="text-muted text-base">
                        We answer for questions all the time.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-5">
          <div className="w-full">
            <div className="bg-white rounded shadow">
              <div className="py-6 px-6">
                <p className="text-lg text-blue-600">
                  We’ll never share your email address with a third-party.
                </p>
                <div className="flex pt-7 pb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-500 text-white py-3 px-4 rounded-l border text-lg">
                      Sign Up For Newsletter
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control w-full border-gray-300 border-y text-lg px-3 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your email address"
                  />
                  <div>
                    <button className="bg-blue-500 text-white px-4 rounded-r border border-blue-500 text-lg py-3 hover:bg-blue-600 transition duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHeader;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = localStorage.getItem("searchQuery");
  const dispatch = useDispatch();

  const searchResult = async () => {
    try {
      console.log("searchQuery: " + searchQuery);
      const response = await fetch(
        `http://localhost:3001/api/product/search?query=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.data);
      console.log(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    searchResult();
  }, []);

  return (
    <>
      <div>
      <div className="py-8 w-full mt-24 border-y bg-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-800">Search Results For - {searchQuery}</h1>
        </div>
      </div>
        <div className="flex justify-between items-center px-4 py-4 bg-gray-200 border border-gray-300 rounded shadow-md">
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
              Product Compare (0)
            </button>
          </div>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-gray-700 font-semibold">
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
              {searchResults.map((product, index) => (
                <Link
                  to="/description"
                  onClick={() =>
                    dispatch({ type: "PRODUCT", payload: product })
                  }
                  key={index}
                  className="flex flex-col mb-4"
                >
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
    </>
  );
}

export default Search;

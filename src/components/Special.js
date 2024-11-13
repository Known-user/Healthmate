import React, { useState, useEffect } from 'react';
import Products from './Products';
import Slider from '../components/Slider';
import Spline3D from './Spline3D';

const trending = [
  "https://mercury.akamaized.net/i/324b967d8a8c788adb862aaae380be36_286304_0.jpg",
  "https://mercury.akamaized.net/i/7b4ed388a4d96f1ab9da1eb6a0d096fe_269807_0.jpg",
  "https://mercury.akamaized.net/i/fc4a54c68dbff609f2e178c0ed1c0eb9_275176_0.jpg",
  "https://mercury.akamaized.net/i/ada1a9b18729c3f8bb28d1076e5aada4_58415_0.jpg",
  "https://mercury.akamaized.net/i/91544f70f0302ddeca232a2e9e098666_250935_0.jpg",
  "https://mercury.akamaized.net/i/e36ec136a1f09a4a4f1dc3171819ec85_233062_0.jpg",
  "https://mercury.akamaized.net/i/de37aadf1118f218b7a39283c13d278e_222071_0.jpg",
  "https://mercury.akamaized.net/i/0bc1628efd2f8f0ccec5441b188e2ac1_271448_0.jpg"
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/product/all');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="products"  className="bg-[#EEEEEE] px-24 py-8 max-lg:px-8 max-md:px-6 relative">
        <h2 className="text-center text-4xl font-semibold p-2 mb-14">Featured Products</h2>
        <div>Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="bg-[#EEEEEE] px-24 py-8 max-lg:px-8 max-md:px-6 relative">
        <h2 className="text-center text-4xl font-semibold p-2 mb-14">Featured Products</h2>
        <div>Error: {error}</div>
      </section>
    );
  }

  return (
    <section id="products" className="bg-blue-50 px-24 py-8 max-lg:px-8 max-md:px-6 relative">
      <h2 className="text-center text-4xl font-semibold p-2 mb-14">Featured Products</h2>
      <Products products={products} />
    </section>
  );
};



function Special() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/category/all');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data.data);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <Slider heading={"Categories"} slide={4} type="card"  arr={categories} />
      <FeaturedProducts />
      <Spline3D/>
      <Slider heading={"Trending Today"} slide={3} type="img" arr={trending} />
    </>
  );
}

export default Special;












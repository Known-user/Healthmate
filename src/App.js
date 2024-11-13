import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast, { Toaster } from "react-hot-toast";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import ProductHeader from "./components/ProductHeader";
import AuthPage from "./pages/AuthPage";
import Chatbot from "./pages/Chatbot";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Search from "./pages/Search";
import OuterCard from "./pages/OuterCard";

const products = [
  {
    id: 1,
    category: "Women",
    title: "Women's Top",
    price: 75.99,
    salePrice: null,
    image1:
      "https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765a2eb222b1851840a4a157780fb487&auto=format&fit=crop&w=1534&q=80",
    image2:
      "https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765a2eb222b1851840a4a157780fb487&auto=format&fit=crop&w=1534&q=80",
  },
  {
    id: 2,
    category: "Men",
    title: "Men's Blazer",
    price: 86.33,
    salePrice: 71.55,
    image1:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60",
    image2:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    category: "Men",
    title: "Men's Blazer",
    price: 86.33,
    salePrice: 71.55,
    image1:
      "https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60",
    image2:
      "https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    category: "Men",
    title: "Men's Blazer",
    price: 86.33,
    salePrice: 71.55,
    image1:
      "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60",
    image2:
      "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60",
  },
];

const App = () => {
  const [categories, setCategories] = useState([]);

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
  function formatRouteName(name) {
    return name.replace(/_/g, " ").toLowerCase();
  }

  function formatHeaderName(name) {
    return name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <Router>
        <Navbar title="HealthMate" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<OuterCard />} />
          <Route exact path="/description" element={<ProductDetails />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/admindashboard" element={<AdminDashboard />} />
          <Route exact path="/login" element={<AuthPage />} />
          <Route exact path="/search" element={<Search />} />
          {categories.map((category, index) => (
            <Route
              key={index}
              path={`/${formatRouteName(category.name)}`}
              element={
                <ProductHeader
                  key={category.name}
                  head={formatHeaderName(category.name)}
                  type={category.name}
                />
              }
            />
          ))}
        </Routes>
        <Footer />
        <Toaster/>
      </Router>
      <Chatbot/>
    </>
  );
};

export default App;

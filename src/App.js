
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Cart from "./pages/Cart";
import 'font-awesome/css/font-awesome.min.css';
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Spline3D  from "./components/Spline3D";
import ProductGallery from "./components/ProducyGallery";
import ProductHeader from "./components/ProductHeader";
import PaymentForm from "./components/PaymentForm";
const products = [
  {
    id: 1,
    category: 'Women',
    title: "Women's Top",
    price: 75.99,
    salePrice: null,
    image1: "https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765a2eb222b1851840a4a157780fb487&auto=format&fit=crop&w=1534&q=80",
    image2: "https://images.unsplash.com/photo-1539840093138-9b3e230e5206?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765a2eb222b1851840a4a157780fb487&auto=format&fit=crop&w=1534&q=80"
  },
  {
    id: 2,
    category: 'Men',
    title: "Men's Blazer",
    price: 86.33,
    salePrice: 71.55,
    image1: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60",
    image2: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04aebe9a22884efa1a5f61e434215597&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    category: 'Men',
    title: "Men's Blazer",
    price: 86.33,
    salePrice: 71.55,
    image1: "https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60",
    image2: "https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74065eec3c2f6a8284bbe30402432f1d&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    category: 'Men',
    title: "Men's Blazer",
    price: 86.33,
    salePrice: 71.55,
    image1: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60",
    image2: "https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e725946a3f177dce83a705d4b12019c2&auto=format&fit=crop&w=500&q=60"
  }
];


const App = () => {
  return (
    <>
      <Router>
          <Navbar title="HealthMate" />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/woman care' element={<ProductHeader key="woman" head="Woman Care"/>} />
            <Route exact path='/baby care' element={<ProductHeader key="baby" head="Baby Care"/>} />
            <Route exact path='/payment' element={<PaymentForm />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/description' element={<ProductDetails />} />
          </Routes>
          <Footer />
      </Router>
    </>
  );
};

export default App;

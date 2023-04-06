import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/shop" element={<Shop/>}>
        </Route>
        <Route path="/reviews" element={<Reviews/>}>
        </Route>
        <Route path="/aboutus" element={<AboutUs/>}>
        </Route>
        <Route path="/faqs" element={<Faqs/>}>
        </Route>
        <Route path="/contactus" element={<ContactUs/>}>
        </Route>
      </Routes>
      <Footer />
      </div>
    </Router>

  );
}

export default App;

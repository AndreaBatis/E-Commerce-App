import { Routes, Route } from "react-router-dom";
import Navbar from './Tools/Navbar';
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import ProductDetail from "./pages/Productdet";
import Cart from "./pages/Cartpage";
import Favorites from "./pages/Fav";
import Checkout from "./Tools/Checkout";
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:category" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
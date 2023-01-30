import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/Home"
import ProductPage from "./pages/Product";
import Contact from "./pages/Contact"
import './style.css';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/Home"
import ProductPage from "./pages/Product";
import './style.css';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch
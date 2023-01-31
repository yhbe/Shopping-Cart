import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";
import HomePage from "./pages/Home"
import ProductPage from "./pages/Product";
import Contact from "./pages/Contact"
import './style.css';

const RouteSwitch = () => {
  let [itemsInCart, setItemsInCart] = React.useState([])
  console.log(itemsInCart)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage itemsInCart={itemsInCart} />} />
        <Route
          path="/product"
          element={
            <ProductPage
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            />
          }
        />
        <Route
          path="/contact"
          element={<Contact itemsInCart={itemsInCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch
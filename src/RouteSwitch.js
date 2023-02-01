import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";
import HomePage from "./pages/Home"
import ProductPage from "./pages/Product";
import Contact from "./pages/Contact"
import './style.css';

const RouteSwitch = () => {
  let [itemsInCart, setItemsInCart] = React.useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/ShoppingCart"
          element={
            <HomePage
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            />
          }
        />
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
          element={
            <Contact
              itemsInCart={itemsInCart}
              setItemsInCart={setItemsInCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch
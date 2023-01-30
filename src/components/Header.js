import { Navigate, useNavigate } from "react-router-dom";

export default function Header(){
  let navigate = useNavigate()
  function navigateHome(){
    navigate("../")
  }

  function navigateContact() {
    navigate("../contact");
  }

  function navigateProduct() {
    navigate("../product");
  }

  return (
    <div className="header--container">
      <h1 className="header--container-title" onClick={navigateHome}>FakeStore</h1>
      <ul className="header--items">
        <li onClick={navigateHome}>Home</li>
        <li onClick={navigateProduct}>Products</li>
        <li onClick={navigateContact}>Contact</li>
        <li className="header--items-shopping-cart-li">
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </div>
  );
}
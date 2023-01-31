import { useNavigate } from "react-router-dom";

export default function Header(props){
  let navigate = useNavigate()
  console.log(props.itemsInCart, "Items in cart Header")
  function navigateHome(){
    navigate("../")
  }

  function navigateContact() {
    navigate("../contact");
  }

  function navigateProduct() {
    navigate("../product");
  }

  function toggleCheckout(){
    console.log("Helo")
    let modal = document.querySelector(".checkout--modal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex"
  }

  function createCheckoutItems(item){
    return (
      <div className="item--main-container">
      <img src={item.image} alt={item.category}></img>
      <div className="checkout--items-text-container">
      <p>{item.title.slice(0, 25).concat("...")}</p>
      <p>${item.price}</p>
      <p>- {item.quantity} +</p>
      </div>
      </div>
    )
  }

  let items 
  if (props.itemsInCart){
    items = props.itemsInCart
    items = items.map(item => createCheckoutItems(item))
  }

  return (
    <div className="header--container">
      <h1 className="header--container-title" onClick={navigateHome}>
        FakeStore
      </h1>
      <ul className="header--items">
        <li onClick={navigateHome}>Home</li>
        <li onClick={navigateProduct}>Products</li>
        <li onClick={navigateContact}>Contact</li>
        <li onClick={toggleCheckout} className="header--items-shopping-cart-li">
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
      <div className="checkout--modal">
        <div className="checkout--container">
          <h3>Your shopping cart</h3>
          <div className="checkout--items">
            {items[0] && items}
          </div>
          <p>Total: $0.00</p>
          <div className="checkout--buttons-container">
            <button className="checkout--checkout-button">Checkout</button>
            <button onClick={toggleCheckout} className="checkout--close-button">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
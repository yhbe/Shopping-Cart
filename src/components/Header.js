import { useNavigate } from "react-router-dom";

export default function Header(props){
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

  function toggleCheckout(){
    let modal = document.querySelector(".checkout--modal");
    modal.style.display = modal.style.display === "flex" ? "none" : "flex"
  }
  
  function decrementQuantity(item){
    props.setItemsInCart(prevState => {
      let indexToRemove = undefined
      let newState = prevState.map((state, index) => {
        if (state.title === item.title){
          if (state.quantity === 1){
            indexToRemove = index
          } else {
            return {...state, quantity: state.quantity - 1, price: Math.round((state.price - state.price /state.quantity)*100 )/ 100}
          }
        } else return state
      })
      if (indexToRemove !== undefined){
       newState.splice(indexToRemove, 1)
      }
      return newState
    })
  }

  function incrementQuantity(item) {
    props.setItemsInCart((prevState) => {
      return prevState.map((state, index) => {
        if (state.title === item.title) {
            return {
              ...state,
              price: Math.round((state.price + state.price / state.quantity)*100)/100,
              quantity: (state.quantity + 1),
            };
        } else return state
      });
    });
  }

  function createCheckoutItems(item){
    return (
      <div className="item--main-container" key={item.title}>
        <img src={item.image} alt={item.category}></img>
        <div className="checkout--items-text-container">
          <p>{item.title.slice(0, 25).concat("...")}</p>
          <p>${item.price}</p>
          <p>
            <span
              className="handlequantity"
              onClick={() => decrementQuantity(item)}
            >
              -
            </span>{" "}
            {item.quantity}{" "}
            <span
              className="handlequantity"
              onClick={() => incrementQuantity(item)}
            >
              +
            </span>
          </p>
        </div>
      </div>
    );
  }

  let items 
  let totalCount = 0
  let totalItemsInCheckout = 0
  if (props.itemsInCart){
    items = props.itemsInCart
    items.map(item => {
      totalCount = Math.round((totalCount + item.price) * 100) /100
      totalItemsInCheckout = totalItemsInCheckout + item.quantity
      return ""
    })
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
          <div className="header-itemcount-div">
            <i className="fa-solid fa-cart-shopping"></i>
            {totalItemsInCheckout > 0 && <p className="header--total-items-count">{totalItemsInCheckout}</p>}
          </div>
        </li>
      </ul>
      <div className="checkout--modal">
        <div className="checkout--container">
          <h3>Your shopping cart</h3>
          <div className="checkout--items">{items[0] && items}</div>
          <p>Total: ${totalCount && totalCount}</p>
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
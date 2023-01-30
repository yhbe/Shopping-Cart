export default function Header(){
  return (
    <div className="header--container">
      <h1 className="header--container-title">FakeStore</h1>
      <ul className="header--items">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
        <li className="header--items-shopping-cart-li">
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </div>
  );
}
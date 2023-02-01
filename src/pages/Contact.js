import Header from "../components/Header";

export default function Contact (props) {
  return (
    <>
      <Header
        setItemsInCart={props.setItemsInCart}
        itemsInCart={props.itemsInCart}
      />
      <ul className="contact--icons-ul">
        <li>
          <i className="fa-brands fa-github"></i>
        </li>
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i className="fa-brands fa-facebook-messenger"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
      </ul>
    </>
  );
}
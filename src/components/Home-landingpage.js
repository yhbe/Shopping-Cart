import image from "../images/golfimage.jpg";
import { useNavigate } from "react-router-dom";

export default function LandingPage(){
   let navigate = useNavigate();

   function navigateProduct() {
     navigate("../product");
   }

  return (
    <div className="landingpage--bkg-container">
      <div className="landingpage--container">
        <div className="landingpage--main-text">
        <p className="landingpage-text">BEST ONLINE STORE OF THE YEAR</p>
        <h2 className="landingpage-h2">We don't do fashion, we are fashion</h2>
        <button onClick={navigateProduct} className="landingpage-button">Shop now</button>
        </div>
        <img src={image} alt="women on golf course"></img>
      </div>
    </div>
  );
}
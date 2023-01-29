import image from "../golfimage.jpg"

export default function LandingPage(){
  return (
    <div className="landingpage--bkg-container">
      <div className="landingpage--container">
        <div className="landingpage--main-text">
        <p className="landingpage-text">BEST ONLINE STORE OF THE YEAR</p>
        <h2 className="landingpage-h2">We don't do fashion, we are fashion</h2>
        <button className="landingpage-button">Shop now</button>
        </div>
        <img src={image} alt="women on golf course"></img>
      </div>
    </div>
  );
}
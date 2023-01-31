import Header from '../components/Header';
import LandingPage from '../components/Home-landingpage';

function App(props) {
  console.log(props.itemsInCart, "HOME")
  return (
    <div className="App">
      <Header itemsInCart={props.itemsInCart} /> 
      <LandingPage />
    </div>
  );
}

export default App;

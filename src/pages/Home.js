import Header from '../components/Header';
import LandingPage from '../components/Home-landingpage';

function App(props) {
  return (
    <div className="App">
      <Header
        setItemsInCart={props.setItemsInCart}
        itemsInCart={props.itemsInCart}
      />
      <LandingPage />
    </div>
  );
}

export default App;

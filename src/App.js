import React,{ useState }from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler=()=> setCartIsShown(true);

  const hideCartHandler=()=> setCartIsShown(false);

  return (
    <div className="App">
      
      {cartIsShown && <Cart onCloseBtn={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </div>
  );
}

export default App;

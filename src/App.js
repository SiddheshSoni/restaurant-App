import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <div className="App">
      
      <Cart/>
      <Header />
      <Meals />
    </div>
  );
}

export default App;

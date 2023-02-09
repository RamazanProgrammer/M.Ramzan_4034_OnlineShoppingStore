import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel";
// import Cardsimple from "./Cardsimple";
import Cardsprops from "./Cardsprops";
import "./css/style.css"
import Ftr from "./Ftr";

function App() {

  return (
    <>
      <Nav/>
      <Carousel/> 
      {/* <Cardsimple/> */}
      <Cardsprops/>
      <Ftr/>

  </>
  );
}

export default App;

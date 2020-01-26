import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardsArea from "./components/CardsArea/CardsArea";
import NavMenu from "./components/NavMenu/NavMenu";
import Cards from "./components/CardsArea/Cards";

function App() {
  return (
    <>
      <Header />
      <NavMenu />
      <CardsArea />
      <Cards />
    </>
  );
}

export default App;

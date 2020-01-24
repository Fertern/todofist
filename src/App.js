import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import NavMenu from "./components/NavMenu/NavMenu";

function App() {
  return (
    <>
      <Header />
      <NavMenu />
      <Cards />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";
import Cards from "./components/Cards/Cards";

const App = () => {
  return (
    <>
      <Header />
      <NavMenu />
      <Cards />
    </>
  );
};

export default App;

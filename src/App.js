import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditMenuContainer from "./components/EditMenu/EditMenuContainer";
//import EditMenu from "./components/EditMenuContainer/EditMenu/EditMenu";
//import CardTask from "./components/Cards/CardTask/CardTask";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <div className="menu">
          <Search />
          <span className="ByStatus">[all *]</span>
          <span className="ByProperty">[all *]</span>
          <EditMenuContainer />
        </div>
        <Cards />
      </div>
      <Footer />
    </Router>
  );
}

export default App;

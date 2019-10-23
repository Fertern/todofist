import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateButton from "./components/CreateButton/CreateButton";
import EditMenu from "./components/CreateButton/EditMenu/EditMenu";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <div className="menu">
          <Search />
          <span className="ByStatus">[all *]</span>
          <span className="ByProperty">[all *]</span>
          <CreateButton />
        </div>
        <EditMenu />
        <div className="CardTask">[soome card]</div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

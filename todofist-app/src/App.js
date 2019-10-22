import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Search />
        <span className="ByStatus">[all *]</span>
        <span className="ByProperty">[all *]</span>
        <span className="createButton">[Create]</span>
      </div>
      <div className="CardTask">[soome card]</div>
      <Footer />
    </Router>
  );
}

export default App;

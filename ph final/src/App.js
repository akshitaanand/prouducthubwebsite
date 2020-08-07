import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Terms from "./terms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import history from './history';
import Routes from './Routes';


export default function App() {
  return (
    <div id="container">
        <div id="header" className="sticky">
          <Header />
        </div>
        <Routes />
        <div id="body" />
        <div id="footer">
          <Footer />
        </div>
    </div>
  );
}
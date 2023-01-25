import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Footer from "./components/Footer/Fotter";

const App = () => { 
  return (
    <div className="App">
      <Router>
        <Header />
        <Main/>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import NFTCollection from "./components/collection";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <NFTCollection />
      <Footer />
    </React.Fragment>
  );
}

export default App;

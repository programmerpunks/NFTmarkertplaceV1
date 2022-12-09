import React from "react";
import "./App.css";
import NFTCollection from "./components/collection";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
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

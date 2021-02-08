import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/navbar"

function App() {
  return (
    <div className="App">
        <Navbar />
      <Header />
    </div>
  );
}

export default App;

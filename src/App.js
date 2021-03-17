import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/navbar";
import PropertySearch from "./components/PropertySearch/propertySearch";
import Biography from "./components/Biography/bio";
import FeaturedProps from "./components/FeaturedProps/featuredProps";
import ContactForm from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <PropertySearch />
        <Biography />
        <FeaturedProps />
        <ContactForm />
    </div>
  );
}

export default App;

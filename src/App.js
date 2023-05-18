import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

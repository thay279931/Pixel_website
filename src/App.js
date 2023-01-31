import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/Pixel_website/" element={<Homepage />} />
        <Route path="/Pixel_website/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

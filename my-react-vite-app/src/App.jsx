import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import CreativeLab from "./components/sections/CreativeLab";
import CreativePreview from "./components/sections/CreativePreview";


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={
        <>
          <Home />
          <About />
          <Projects />
          <CreativePreview />
          <Contact />
        </>
      } />
      <Route path="/creative-lab" element={<CreativeLab />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

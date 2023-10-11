import React from 'react'
import Navbar from './Componenets/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Componenets/Footer/Footer';
import About from './Componenets/About/About';
import Home from './Componenets/Home/Home';
import Services from './Componenets/Services/Services';
import Contact from './Componenets/Contact/Contact';

const App = () => {
  return (
    <div>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/About" exact Component={About} />
          <Route path="/Home" exact Component={Home} />
          <Route path="/Services" exact Component={Services} />
          <Route path="/Contact" exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App;
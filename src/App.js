import React, { useEffect } from "react";
import ReactGA from 'react-ga'
import Header from './Components/Header/Header'
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
ReactGA.initialize('G-5S1DRMNP03')

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[])
  return (

    <Router>
     <Header/>
     
    

    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>

    </Router>
  );
}

export default App;

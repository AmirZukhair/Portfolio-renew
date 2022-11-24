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
import ReactGA from 'react-ga'
ReactGA.initialize('G-5S1DRMNP03')




function App() {
  return (

    <Router>
     <Header/>
     
    

    <Routes>
          <Route path="*" element={<Home/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>

    </Router>
  );
}

export default App;

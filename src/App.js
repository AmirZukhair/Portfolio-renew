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

function App() {
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

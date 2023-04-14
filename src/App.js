//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import BioData from './pages/BioData';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> 
        <Routes>
          <Route path='/' element = {< Home />} />
          <Route path='/projects' element = {< Projects />} />
          <Route path="/biodata" element = {<BioData />} />
          <Route path='/project/:id' element = {< ProjectDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

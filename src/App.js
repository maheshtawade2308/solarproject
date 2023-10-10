import Navbar from './components/Navbar';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';


function App() {
  return (
   <Router>
        <Navbar/>
        <Header/>
        <About/>
        <Footer/>
        
   </Router>
  );
}

export default App;

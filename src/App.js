import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import Feature from './components/Feature';

function App() {
  return (
   <Router> 
    <Routes>
        <Route path='/solarproject' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/feature' element={<Feature/>}/> */}
    </Routes>
   </Router>
  );
}

export default App;

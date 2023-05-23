import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
   <>
   <Routes>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<h1> Error 69 Not found</h1>}/>
      
    

   </Routes>
   
   </>
  );
}

export default App;

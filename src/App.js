import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import {Route,NavLink,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import AddCourse from './Components/AddCourse';
import Notes from './Components/Notes';
import Contact from './Components/Contact';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/addcourse' element={<AddCourse/>}/>
        <Route path='/note' element={<Notes/>} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;

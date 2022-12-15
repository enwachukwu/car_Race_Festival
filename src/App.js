import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import Events from './components/pages/Events';

function App() {
  return (

    <>
    <Router>
    <Navbar />
   <Routes>
 
      <Route exact path='/' element={ <Home/> }></Route>
      <Route exact path='/Events' element={ <Events/> }></Route>
      <Route exact path='/AboutUs' element={ <AboutUs/> }></Route>
      <Route exact path='/Login' element={ <Login/> }></Route>
      <Route exact path='/SignUp' element={ <SignUp/> }></Route>
     
  </Routes>
    </Router>
    </>
  

  );
}

export default App;

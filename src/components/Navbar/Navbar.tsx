import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Menu from '../Menu/Menu';


 const Navbar = () => {
return (
  <div>
    <Router>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
)
 }

 export default Navbar;
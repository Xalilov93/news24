import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="" className="logo">NEWS24</Link>
      <ul>
        <li><Link to="/car">Car</Link></li>
        <li><Link to="/sport">Sport</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </header>
  )
}

export default Navbar
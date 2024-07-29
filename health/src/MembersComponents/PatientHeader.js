import React, { useState } from 'react';
// import './Header.css';
import { Link } from 'react-router-dom';

function PatientHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className={showMenu ? 'nav active' : 'nav'}>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/patient_dashboard" className="nav-link">Dashboard</Link>
      <Link to="/symptom-checker" className="nav-link">Symptom Checker</Link>
      <Link to="/sign-in" className="nav-link">Sign In</Link>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
}

export default PatientHeader;

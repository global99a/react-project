import React, { useState } from 'react';
// import './Header.css';
import { Link } from 'react-router-dom';

function AdminHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className={showMenu ? 'nav active' : 'nav'}>
      <Link to="/" className="nav-link">Home</Link>
        <Link to="/admin" className="nav-link">Dashboard</Link>
        <Link to="/user-management" className="nav-link">User management</Link>
        <Link to="/sign-in" className="nav-link">Logout</Link>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
}

export default AdminHeader;

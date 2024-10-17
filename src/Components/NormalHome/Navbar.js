import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file
import loginIcon from '../Images/logopack.png';
import loginIcons from '../Images/Profile-11.png';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();  // React Router's useNavigate hook

  const handleScroll = () => {
    const sections = ['home', 'aboutus', 'contact'];
    let current = '';
  
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          current = section;
        }
      }
    });
    setActiveSection(current);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    const navbarHeight = 60; // Adjust this height according to the navbar
    const offsetTop = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  const handleNavigation = () => {
    const url = `${window.location.origin}/register`;  // Construct the full URL
  window.open(url, '_blank');  // Open in a new tab
  };

  const handleNavigations = () => {
    navigate('/login');
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <img src={loginIcon} className='max-w-48'/>
      <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 'X' : '☰'} {menuOpen && 'Menu'}
      </div>
      <div className={`nav-links-container ${menuOpen ? 'nav-links-open' : ''}`}>
        <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
        <button onClick={() => scrollToSection('aboutus')} className={activeSection === 'aboutus' ? 'active' : ''}>About Us</button>
        <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>

        {/* Update the Expert Registration button to use navigate */}
        <button onClick={handleNavigation}>Expert Registration</button>
      </div>
      
      <button className="login-button" onClick={handleNavigations}>
        <img src={loginIcons} alt="Login" className="login-icon" /> Login
      </button>
    </nav>
  );
}

export default Navbar;

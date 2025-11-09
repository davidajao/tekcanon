import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOfferExpanded, setIsOfferExpanded] = useState(false);
  const [isOfferDropdownOpen, setIsOfferDropdownOpen] = useState(false);
  const [isResourcesExpanded, setIsResourcesExpanded] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsOfferExpanded(false);
  };

  const toggleOfferMenu = () => {
    setIsOfferExpanded(!isOfferExpanded);
  };

  const toggleResourcesMenu = () => {
    setIsResourcesExpanded(!isResourcesExpanded);
  };

  return (
    <div className="header-frame">
      <div className="header">
        <Link to="/">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/737a40c51a450af6b567666c04737a9615de39f5?width=350"
            alt="Tekcanon logo"
            className="tekcanon-logo"
          />
        </Link>
        
        <div className="navigation-options">
          <div className="nav-links">
            <Link to="/about" className="nav-item">
              <span className="nav-text">About us</span>
            </Link>
            <div
              className="nav-item nav-item-dropdown"
              onMouseEnter={() => setIsOfferDropdownOpen(true)}
              onMouseLeave={() => setIsOfferDropdownOpen(false)}
            >
              <span className="nav-text">What we Offer</span>
              <svg
                className={`nav-dropdown-arrow ${isOfferDropdownOpen ? 'open' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={`nav-dropdown ${isOfferDropdownOpen ? 'open' : ''}`}>
                <Link to="/mentorship" className="nav-dropdown-item">
                  <span className="nav-dropdown-text">Mentorship</span>
                </Link>
                <Link to="/career-development" className="nav-dropdown-item">
                  <span className="nav-dropdown-text">Career Development</span>
                </Link>
              </div>
            </div>
            <Link to="/who-we-serve" className="nav-item">
              <span className="nav-text">Who we serve</span>
            </Link>
            <div
              className="nav-item nav-item-dropdown"
              onMouseEnter={() => setIsResourcesDropdownOpen(true)}
              onMouseLeave={() => setIsResourcesDropdownOpen(false)}
            >
              <span className="nav-text">Our Resources</span>
              <svg
                className={`nav-dropdown-arrow ${isResourcesDropdownOpen ? 'open' : ''}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={`nav-dropdown ${isResourcesDropdownOpen ? 'open' : ''}`}>
                <Link to="/courses" className="nav-dropdown-item">
                  <span className="nav-dropdown-text">Courses</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#011A20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="get-started-button-container">
          <button className="get-started-button">
            <span className="button-text">Get Started</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close menu">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L1 13M1 1L13 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8d597988f6549b66f1314ac8cd3d4ca7f491f760?width=254"
          alt="Tekcanon logo"
          className="mobile-menu-logo"
        />

        <nav className="mobile-nav">
          <Link to="/about" className="mobile-nav-item" onClick={toggleMobileMenu}>
            <span className="mobile-nav-text">About Us</span>
          </Link>

          <div className="mobile-nav-item-expandable">
            <button className="mobile-nav-item-button" onClick={toggleOfferMenu}>
              <span className="mobile-nav-text">What we Offer</span>
              <svg
                className={`mobile-nav-arrow ${isOfferExpanded ? 'expanded' : ''}`}
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_513_3724)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8096 7.26774C13.0631 7.01001 13.0631 6.59319 12.8096 6.3361L7.43795 0.886918C7.31955 0.764941 7.17704 0.667814 7.01909 0.601445C6.86115 0.535076 6.69106 0.500851 6.51918 0.500851C6.3473 0.500851 6.17721 0.535076 6.01927 0.601445C5.86132 0.667814 5.71881 0.764941 5.6004 0.886918L0.189154 6.37555C0.06822 6.50012 0.000247051 6.66508 -0.000960203 6.83693C-0.00216746 7.00879 0.0634815 7.17464 0.182654 7.30083C0.241505 7.36334 0.312837 7.41335 0.392233 7.44778C0.471629 7.4822 0.557398 7.5003 0.644229 7.50096C0.73106 7.50161 0.817104 7.48481 0.897033 7.45159C0.976962 7.41837 1.04907 7.36944 1.1089 7.30783L6.05995 2.28437C6.11916 2.22333 6.19044 2.17473 6.26944 2.14151C6.34844 2.1083 6.43352 2.09117 6.5195 2.09117C6.60548 2.09117 6.69057 2.1083 6.76957 2.14151C6.84857 2.17473 6.91985 2.22333 6.97905 2.28437L11.8911 7.26774C11.9503 7.32876 12.0215 7.37735 12.1004 7.41056C12.1794 7.44377 12.2644 7.46089 12.3503 7.46089C12.4363 7.46089 12.5213 7.44377 12.6002 7.41056C12.6792 7.37735 12.7504 7.32876 12.8096 7.26774Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_513_3724">
                    <rect width="7" height="13" fill="white" transform="matrix(0 -1 1 0 0 7.5)"/>
                  </clipPath>
                </defs>
              </svg>
            </button>

            <div className={`mobile-submenu ${isOfferExpanded ? 'expanded' : ''}`}>
              <Link to="/mentorship" className="mobile-nav-subitem" onClick={toggleMobileMenu}>
                <span className="mobile-nav-text">Mentorship</span>
              </Link>
              <Link to="/career-development" className="mobile-nav-subitem" onClick={toggleMobileMenu}>
                <span className="mobile-nav-text">Career Development</span>
              </Link>
            </div>
          </div>

          <Link to="/who-we-serve" className="mobile-nav-item" onClick={toggleMobileMenu}>
            <span className="mobile-nav-text">Who we Serve</span>
          </Link>

          <div className="mobile-nav-item-expandable">
            <button className="mobile-nav-item-button" onClick={toggleResourcesMenu}>
              <span className="mobile-nav-text">Our Resources</span>
              <svg
                className={`mobile-nav-arrow ${isResourcesExpanded ? 'expanded' : ''}`}
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_513_3724)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8096 7.26774C13.0631 7.01001 13.0631 6.59319 12.8096 6.3361L7.43795 0.886918C7.31955 0.764941 7.17704 0.667814 7.01909 0.601445C6.86115 0.535076 6.69106 0.500851 6.51918 0.500851C6.3473 0.500851 6.17721 0.535076 6.01927 0.601445C5.86132 0.667814 5.71881 0.764941 5.6004 0.886918L0.189154 6.37555C0.06822 6.50012 0.000247051 6.66508 -0.000960203 6.83693C-0.00216746 7.00879 0.0634815 7.17464 0.182654 7.30083C0.241505 7.36334 0.312837 7.41335 0.392233 7.44778C0.471629 7.4822 0.557398 7.5003 0.644229 7.50096C0.73106 7.50161 0.817104 7.48481 0.897033 7.45159C0.976962 7.41837 1.04907 7.36944 1.1089 7.30783L6.05995 2.28437C6.11916 2.22333 6.19044 2.17473 6.26944 2.14151C6.34844 2.1083 6.43352 2.09117 6.5195 2.09117C6.60548 2.09117 6.69057 2.1083 6.76957 2.14151C6.84857 2.17473 6.91985 2.22333 6.97905 2.28437L11.8911 7.26774C11.9503 7.32876 12.0215 7.37735 12.1004 7.41056C12.1794 7.44377 12.2644 7.46089 12.3503 7.46089C12.4363 7.46089 12.5213 7.44377 12.6002 7.41056C12.6792 7.37735 12.7504 7.32876 12.8096 7.26774Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_513_3724">
                    <rect width="7" height="13" fill="white" transform="matrix(0 -1 1 0 0 7.5)"/>
                  </clipPath>
                </defs>
              </svg>
            </button>

            <div className={`mobile-submenu ${isResourcesExpanded ? 'expanded' : ''}`}>
              <Link to="/courses" className="mobile-nav-subitem" onClick={toggleMobileMenu}>
                <span className="mobile-nav-text">Courses</span>
              </Link>
            </div>
          </div>

          <div className="mobile-nav-item">
            <span className="mobile-nav-text">Newsletter</span>
          </div>
        </nav>

        <button className="mobile-get-started-button">
          <span className="mobile-button-text">Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default Header;

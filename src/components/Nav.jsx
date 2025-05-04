import { useState, useEffect } from 'react';
import logos from '../assets/img/logos/logo.svg'

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar navbar-expand-md fixed-top ${scrolled ? 'bg-dark shadow-lg' : 'bg-transparent'}`}
      style={{
        transition: 'all 0.3s ease-in-out',
        ...(!scrolled && { boxShadow: 'none' })
      }}
    >
      <div className="container-fluid px-0">
        <a href="/" className="navbar-brand">
          <img 
            src={logos} 
            alt="Brainwave.io logo" 
            className={`w-75 d-md-none ${scrolled ? '' : 'invert'}`} 
          />
          <span className={`fw-bold d-none d-md-block ${scrolled ? 'text-white' : 'text-white'}`}>
            Brainwave.io
          </span>
        </a>

        <a 
          href="#" 
          className={`btn ${scrolled ? 'btn-primary' : 'btn-primary'} btn-sm ms-md-x1 mt-lg-0 order-md-1 ms-auto`}
        >
          Get Started Now
        </a>

        <button
          className={`navbar-toggler ${scrolled ? '' : 'navbar-toggler-white'} border-0 pe-0`}
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-md-end ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav gap-md-2 gap-lg-3 pt-x1 pb-1 pt-md-0 pb-md-0">
            {['Home', 'About', 'Service', 'Pricing', 'Contact'].map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${scrolled ? 'text-white' : 'text-white'}`}
                  onClick={() => setExpanded(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
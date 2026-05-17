import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home', exact: true },
  { to: '/#features', label: 'Features', hash: true },
  { to: '/#ai', label: 'AI Assistant', hash: true },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Always show solid bg on non-home pages
  const showSolid = scrolled || !isHome;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleHashLink = (e, hash) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${showSolid ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon">🐾</div>
            <div className="nav-logo-text">Furrever<span> AI</span></div>
          </Link>

          <div className="nav-links">
            {NAV_LINKS.map(link => (
              link.hash ? (
                <a
                  key={link.to}
                  href={isHome ? link.to.replace('/', '') : `/${link.to}`}
                  onClick={e => handleHashLink(e, link.to.replace('/', ''))}
                  className="nav-link"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.exact}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </NavLink>
              )
            ))}
          </div>

          <div className="nav-actions">
            <Link to="/#download" className="btn-nav-cta" onClick={e => handleHashLink(e, '#download')}>
              Download Free
            </Link>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        {NAV_LINKS.map(link => (
          link.hash ? (
            <a
              key={link.to}
              href={link.to}
              className="mobile-link"
              onClick={e => handleHashLink(e, link.to.replace('/', ''))}
            >
              {link.label}
            </a>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          )
        ))}
        <Link to="/#download" className="btn-nav-cta mobile-cta" onClick={e => handleHashLink(e, '#download')}>
          Download Free
        </Link>
      </div>
    </>
  );
}

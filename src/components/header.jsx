import { useEffect, useState } from 'react';
import NavLinks from './nav-links';
import ThemeToggle from './theme-toggle';
import './header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="site-header__logo" href="/" aria-label="Go to home page">
          <span className="site-header__mark">IGB</span>
          <span className="site-header__name text-h3">INGRID BURGER</span>
        </a>

        <div className="site-header__right">
          <div className="site-header__desktop-nav">
            <NavLinks />
            <ThemeToggle />
          </div>

          <button
            className="site-header__menu-button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={`site-header__menu-icon ${isMenuOpen ? 'is-open' : ''}`} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
      >
        <aside
          className="mobile-menu__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mobile-menu__top">
            <ThemeToggle />

            <button className="mobile-menu__close" aria-label="Close menu" onClick={closeMenu}>
              <span />
              <span />
            </button>
          </div>

          <NavLinks className="nav-links--mobile" includeHome onNavigate={closeMenu} />
        </aside>
      </div>
    </>
  );
}
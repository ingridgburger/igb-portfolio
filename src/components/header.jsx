import NavLinks from './nav-links';
import ThemeToggle from './theme-toggle';
import './header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__logo">
        <span className="site-header__mark">IGB</span>
        <span className="site-header__name text-h3">INGRID BURGER</span>
      </div>

      <div className="site-header__right">
        <NavLinks />
        <ThemeToggle />
      </div>
    </header>
  );
}
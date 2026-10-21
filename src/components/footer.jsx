import NavLinks from './nav-links';
import SocialLinks from './social-links';
import logoLight from '../assets/images/igb-logo-light.png';
import './footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__left">
        <img className="site-footer__logo-image" src={logoLight} alt="IGB" />
        <SocialLinks />
      </div>

      <div className="site-footer__right">
        <NavLinks />
      </div>
    </footer>
  );
}
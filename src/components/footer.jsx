import { useTheme } from '../context/theme-context';
import NavLinks from './nav-links';
import SocialLinks from './social-links';
import './footer.css';

export default function Footer() {
  const { theme } = useTheme();

  const iconVariant = theme === 'light' ? 'light' : 'dark';

  return (
    <footer className="site-footer site-footer--dark">
      <div className="site-footer__left">
        <span className="site-footer__mark">IGB</span>
        <SocialLinks variant={iconVariant} />
      </div>

      <div className="site-footer__right">
        <NavLinks enableDropdowns={false} />
      </div>
    </footer>
  );
}
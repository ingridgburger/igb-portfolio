import { useTheme } from '../context/theme-context';
import './theme-toggle.css';

import sunIconLight from '../assets/images/icons/sun-icon-light.png';
import sunIconDark from '../assets/images/icons/sun-icon-dark.png';
import moonIconLight from '../assets/images/icons/moon-icon-light.png';
import moonIconDark from '../assets/images/icons/moon-icon-dark.png';

export default function ThemeToggle({ surface }) {
  const { theme, toggleTheme } = useTheme();
  const activeSurface = surface || theme;

  const circleColor = activeSurface === 'light' ? 'dark' : 'light';

  const iconSuffix = circleColor === 'dark' ? 'light' : 'dark';

  const iconType = theme === 'light' ? 'sun' : 'moon';

  const icons = {
    'sun-light': sunIconLight,
    'sun-dark': sunIconDark,
    'moon-light': moonIconLight,
    'moon-dark': moonIconDark,
  };

  const icon = icons[`${iconType}-${iconSuffix}`];

  return (
    <button
      className={`theme-toggle theme-toggle--${activeSurface} theme-toggle--${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="theme-toggle__circle">
        <img src={icon} alt="" />
      </span>
    </button>
  );
}
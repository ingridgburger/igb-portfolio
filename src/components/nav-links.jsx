import './nav-links.css';

const links = [
  { label: 'CASE STUDIES', href: '/case-studies' },
  { label: 'VISUAL ARTS', href: '/visual-arts' },
  { label: 'RESUME', href: '/resume' },
  { label: 'ABOUT ME', href: '/about' },
];

export default function NavLinks({
  className = '',
  includeHome = false,
  onNavigate,
}) {
  const allLinks = includeHome ? [{ label: 'HOME', href: '/' }, ...links] : links;
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  return (
    <nav className={`nav-links ${className}`.trim()}>
      {allLinks.map((link) => {
        const isActive = currentPath === link.href;
        const filterId = `nav-rough-underline-${link.label.toLowerCase().replaceAll(' ', '-')}`;

        return (
          <a
            key={link.href}
            href={link.href}
            className={`text-h4 nav-links__item ${isActive ? 'is-active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
            onClick={onNavigate}
          >
            <span className="nav-links__label">{link.label}</span>
            <svg className="nav-links__underline" viewBox="0 0 160 18" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <filter id={filterId}>
                  <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="7" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
                </filter>
              </defs>
              <path
                d="M2 12C38 8 86 15 158 9"
                pathLength="1"
                style={{ filter: `url("#${filterId}")` }}
              />
            </svg>
          </a>
        );
      })}
    </nav>
  );
}
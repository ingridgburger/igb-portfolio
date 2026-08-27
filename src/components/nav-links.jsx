import './nav-links.css';

const links = [
  { label: 'CASE STUDIES', href: '/case-studies' },
  {
    label: 'VISUAL ARTS',
    href: '/visual-arts',
    children: [
      { label: 'FINE ARTS', href: '/fine-arts' },
      { label: 'EDITORIAL DESIGN', href: '/editorial-design' },
      { label: 'POSTER DESIGN', href: '/poster-design' },
    ],
  },
  { label: 'RESUME', href: '/resume' },
  { label: 'ABOUT ME', href: '/about' },
];

export default function NavLinks({
  className = '',
  includeHome = false,
  onNavigate,
  enableDropdowns = true,
}) {
  const allLinks = includeHome ? [{ label: 'HOME', href: '/' }, ...links] : links;

  return (
    <nav className={`nav-links ${className}`.trim()}>
      {allLinks.map((link) => {
        if (!link.children || !enableDropdowns) {
          return (
            <a
              key={link.href}
              href={link.href}
              className="text-h4 nav-links__item"
              onClick={onNavigate}
            >
              {link.label}
            </a>
          );
        }

        return (
          <div key={link.href} className="nav-links__group">
            <a href={link.href} className="text-h4 nav-links__item" onClick={onNavigate}>
              {link.label}
            </a>

            <div className="nav-links__dropdown" role="menu" aria-label="Visual Arts submenu">
              {link.children.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  className="text-h4 nav-links__dropdown-item"
                  role="menuitem"
                  onClick={onNavigate}
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
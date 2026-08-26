import './nav-links.css';

const links = [
  { label: 'CASE STUDIES', href: '/case-studies' },
  { label: 'VISUAL ARTS', href: '/visual-arts' },
  { label: 'RESUME', href: '/resume' },
  { label: 'ABOUT ME', href: '/about' },
];

export default function NavLinks({ className = '', includeHome = false, onNavigate }) {
  const allLinks = includeHome ? [{ label: 'HOME', href: '/' }, ...links] : links;

  return (
    <nav className={`nav-links ${className}`.trim()}>
      {allLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-h3 nav-links__item"
          onClick={onNavigate}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
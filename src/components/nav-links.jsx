import './nav-links.css';

const links = [
  { label: 'CASE STUDIES', href: '/case-studies' },
  { label: 'VISUAL ARTS', href: '/visual-arts' },
  { label: 'RESUME', href: '/resume' },
  { label: 'ABOUT ME', href: '/about' },
];

export default function NavLinks() {
  return (
    <nav className="nav-links">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="text-h3 nav-links__item">
          {link.label}
        </a>
      ))}
    </nav>
  );
}
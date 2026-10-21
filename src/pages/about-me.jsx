import profilePicture from '../assets/images/profile-picture.webp';
import nameArtwork from '../assets/images/ingrid-burger-name.webp';
import figmaToDev from '../assets/images/figma-to-dev.webp';
import hiking from '../assets/images/hiking.webp';
import nailArt from '../assets/images/nailart.webp';
import chainmail from '../assets/images/chainmail.webp';
import './about-me.css';

const SOCIAL_LINKS = [
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/...' },
	{ label: 'GitHub', href: 'https://github.com/...' },
	{ label: 'Instagram', href: 'https://instagram.com/...' },
];

export default function AboutMePage() {
	return (
		<section className="about-me-page">
			<div className="about-me-page__intro">
				<div className="about-me-page__portrait">
					<img src={profilePicture} alt="Ingrid Burger" />
				</div>

				<div className="about-me-page__intro-copy">
					<h1 className="about-me-page__title">
						<img src={nameArtwork} alt="Ingrid Burger" />
					</h1>
					<nav className="about-me-page__social-links" aria-label="Social links">
						{SOCIAL_LINKS.map((link) => (
							<a
								key={link.label}
								className="about-me-page__social-link button-standard"
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label}
							</a>
						))}
					</nav>
					<p className="about-me-page__copy">
						I&apos;m a UX/UI Design student with a Computer Science minor at Drexel University. I
						came to UX through fine arts, and that background still shapes how I approach a
						screen: composition, visual hierarchy, and how something feels before it even
						functions. Working to become a designer-developer, I&apos;m someone who can take a
						product from concept in Figma to a fully built, functioning software.
					</p>
				</div>
			</div>

			<div className="about-me-page__design-section">
				<p className="about-me-page__copy">
					I do my best work at the intersection of design and development. I start in Figma and
					follow a product through to production, so I can design things that are ready to be
					built, and then build them myself. This very site is a good example: designed in
					Figma, then built by hand. Good design shouldn&apos;t sacrifice usability, and good code
					shouldn&apos;t sacrifice aesthetics.
				</p>
				<div className="about-me-page__design-image">
					<img src={figmaToDev} alt="Design and development workflow" loading="lazy" />
				</div>
			</div>

			<div className="about-me-page__hobbies">
				<p className="about-me-page__copy">
					Outside of UX, I love to create and craft. Lately it&apos;s been chainmail, but I also
					paint, sew, make jewelry, and I&apos;m a self-taught nail artist. When I&apos;m not making,
					I&apos;m exploring, whether that&apos;s new spots around my city or hiking. I&apos;m working
					toward visiting every National Park (nine down so far!).
				</p>
				<div className="about-me-page__hobby-grid">
					<img src={hiking} alt="Hiking in a canyon" loading="lazy" />
					<img src={nailArt} alt="Hand-painted nail art" loading="lazy" />
					<img src={chainmail} alt="Chainmail craft" loading="lazy" />
				</div>
			</div>
		</section>
	);
}
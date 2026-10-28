import { useEffect, useState } from 'react';
import { useTheme } from '../context/theme-context';
import Button from '../components/button';
import ContactForm from '../components/contact-form';
import portraitImage from '../assets/images/igb-portrait.webp';
import productImage from '../assets/images/figma-to-dev.webp';
import chainmailedImage from '../assets/images/chainmailed.webp';
import mosaicImage from '../assets/images/mosaic-nailart.webp';
import narrowsImage from '../assets/images/narrows.webp';
import eyeOpeningImage from '../assets/images/eye-opening.webp';
import linkedinLight from '../assets/images/icons/linkedin-icon-light.png';
import linkedinDark from '../assets/images/icons/linkedin-icon-dark.png';
import githubLight from '../assets/images/icons/github-icon-light.png';
import githubDark from '../assets/images/icons/github-icon-dark.png';
import emailLight from '../assets/images/icons/email-icon-light.png';
import emailDark from '../assets/images/icons/email-icon-dark.png';
import './about.css';

const galleryImages = [
	{ src: narrowsImage, alt: 'People swimming in a narrow canyon' },
	{ src: chainmailedImage, alt: 'Chainmail texture study' },
	{ src: mosaicImage, alt: 'Blue and pink nail art' },
	{ src: eyeOpeningImage, alt: 'A black and white visual study' },
];

const ROLE_TITLES = ['UX / UI DESIGNER.', 'FRONT-END DEVELOPER.'];

export default function AboutPage() {
	const [roleIndex, setRoleIndex] = useState(0);
	const [typedText, setTypedText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const { theme } = useTheme();
	const icons = theme === 'light'
		? { linkedin: linkedinDark, github: githubDark, email: emailDark }
		: { linkedin: linkedinLight, github: githubLight, email: emailLight };

	useEffect(() => {
		const currentRole = ROLE_TITLES[roleIndex];
		const typingSpeed = 95;
		const deletingSpeed = 60;
		const holdAfterTyping = 1100;
		const holdAfterDeleting = 250;
		const isTypingDone = typedText === currentRole;
		const isDeletingDone = typedText.length === 0;
		let delay = isDeleting ? deletingSpeed : typingSpeed;

		if (!isDeleting && isTypingDone) {
			delay = holdAfterTyping;
		}

		if (isDeleting && isDeletingDone) {
			delay = holdAfterDeleting;
		}

		const timeoutId = window.setTimeout(() => {
			if (!isDeleting && !isTypingDone) {
				setTypedText(currentRole.slice(0, typedText.length + 1));
				return;
			}

			if (!isDeleting && isTypingDone) {
				setIsDeleting(true);
				return;
			}

			if (isDeleting && !isDeletingDone) {
				setTypedText(currentRole.slice(0, typedText.length - 1));
				return;
			}

			setIsDeleting(false);
			setRoleIndex((index) => (index + 1) % ROLE_TITLES.length);
		}, delay);

		return () => window.clearTimeout(timeoutId);
	}, [typedText, isDeleting, roleIndex]);

	return (
		<section className="about-page">
			<div className="about-page__intro">
				<div className="about-page__portrait-wrap">
					<img className="about-page__portrait" src={portraitImage} alt="Ingrid Burger" />
				</div>

				<div className="about-page__intro-copy">
					<h1 className="about-page__title">
						<span>I&apos;M INGRID BURGER.</span>
						<span
							className="about-page__title-light about-page__role"
							aria-label={ROLE_TITLES[roleIndex]}
						>
							{typedText}
							<span className="about-page__caret" aria-hidden="true">|</span>
						</span>
					</h1>
					<div className="about-page__socials" aria-label="Social links">
						<Button
							as="a"
							className="about-page__social-button"
							href="https://www.linkedin.com/in/ingridburger/"
							target="_blank"
							rel="noopener noreferrer"
							icon={<img src={icons.linkedin} alt="" />}
						>
							LinkedIn
						</Button>
						<Button
							as="a"
							className="about-page__social-button"
							href="https://github.com/ingridgburger"
							target="_blank"
							rel="noopener noreferrer"
							icon={<img src={icons.github} alt="" />}
						>
							GitHub
						</Button>
						<Button
							as="a"
							className="about-page__social-button"
							href="mailto:ingridgburger@gmail.com"
							icon={<img src={icons.email} alt="" />}
						>
							Email
						</Button>
					</div>
					<p>
						I&apos;m a UX/UI/Design student with a Computer Science minor at Drexel University.
						I came to UX through fine arts, and that background still shapes how I approach a screen:
						composition, visual hierarchy, and how something feels before it&apos;s even functional.
						Working to become a designer-developer, I&apos;m someone who can take a project from concept
						in Figma to fully built, functioning software.
					</p>
				</div>
			</div>

			<div className="about-page__work">
				<div className="about-page__work-copy">
					<p>
						I do my best work at the intersection of design and development. I start in Figma and
						follow a product through to production, thinking through structure, styling, and how it
						actually feels to use. A strong grip on both design tools and modern dev stacks means I
						can design things that are ready to be built, and then build them myself. Through Drexel,
						professional experience, and personal projects, I&apos;ve developed skills across experience
						design, interaction design, graphic design, front-end development, user research, and
						design thinking. This very site is a good example: designed in Figma, then built by hand.
					</p>
					<p>
						Good design shouldn&apos;t sacrifice usability, and good code shouldn&apos;t sacrifice
						aesthetics. That belief is what pushes me to keep growing as both a designer and a developer.
					</p>
				</div>
				<img className="about-page__product" src={productImage} alt="Laptop and phone interface mockups" />
			</div>

			<div className="about-page__creative">
				<p>
					Outside of my UX work, I love to create and craft. My latest fixation has been chainmail,
					but outside of that I also paint, sew, make jewelry, and I&apos;m a self-taught nail artist.
					When I&apos;m not creating, I&apos;m exploring, whether that&apos;s around new spots in my city
					or hiking. I love to hike nearby, but am also working toward my goal of visiting every
					National Park (fine down so far!).
				</p>
				<div className="about-page__gallery">
					{galleryImages.map((image) => (
						<img key={image.src} src={image.src} alt={image.alt} />
					))}
				</div>
			</div>
			<ContactForm />
		</section>
	);
}

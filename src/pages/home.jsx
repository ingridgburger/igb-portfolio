import { useEffect, useState } from 'react';
import spellCover from '../assets/images/spell-cover.webp';
import soupCover from '../assets/images/soup-cover.webp';
import petesCover from '../assets/images/petes-cover.webp';
import weckerlysCover from '../assets/images/weckerlys-cover.webp';
import nameAnimation from '../assets/images/name.gif';
import nameStatic from '../assets/images/name-static.png';
import ContactForm from '../components/contact-form';
import './home.css';

const featuredProjects = [
	{ name: 'Spell Magazine', image: spellCover, position: 'top-left' },
	{ name: 'Soup PHL', image: soupCover, position: 'top-right' },
	{ name: "Pete's Little Lunchbox", image: petesCover, position: 'bottom-left' },
	{ name: "Weckerly's Ice Cream", image: weckerlysCover, position: 'bottom-right' },
];

export default function HomePage({ animateIntro = false }) {
	const [shouldAnimateIntro] = useState(animateIntro);
	const [nameHasFinished, setNameHasFinished] = useState(!shouldAnimateIntro);

	useEffect(() => {
		if (!shouldAnimateIntro) {
			return undefined;
		}

		const animationTimer = window.setTimeout(() => {
			setNameHasFinished(true);
		}, 2600);

		return () => window.clearTimeout(animationTimer);
	}, [shouldAnimateIntro]);

	return (
		<>
			<section className="home-hero" aria-labelledby="home-title">
			<div className="home-hero__projects">
				{featuredProjects.map((project) => (
					<a
						key={project.name}
						className={`home-project home-project--${project.position} ${
							shouldAnimateIntro ? 'is-visible' : 'is-static'
						}`}
						href="/case-studies"
						aria-label={`View ${project.name} case study`}
					>
						<span className="home-project__glow" aria-hidden="true" />
						<svg
							className="home-project__ring"
							viewBox="0 0 120 120"
							aria-hidden="true"
						>
							<defs>
								<filter id="rough-ring">
									<feTurbulence
										type="fractalNoise"
										baseFrequency="0.045"
										numOctaves="3"
										seed="7"
										result="noise"
									/>
									<feDisplacementMap
										in="SourceGraphic"
										in2="noise"
										scale="2.5"
									/>
								</filter>
							</defs>
							<path
								d="M60 7C88 7 111 28 113 57C115 86 93 110 62 113C32 116 8 94 7 63C5 34 29 9 60 7Z"
							/>
						</svg>
						<img src={project.image} alt={`${project.name} project preview`} />
					</a>
				))}
			</div>

			<div className="home-hero__intro">
				<div id="home-title" className="home-hero__name-stage">
					<img className="home-hero__name" src={nameStatic} alt="Ingrid Burger" />
					{shouldAnimateIntro && (
						<img
							className={`home-hero__name home-hero__name--animated ${
								nameHasFinished ? 'is-finished' : ''
							}`}
							src={nameAnimation}
							alt=""
							aria-hidden="true"
						/>
					)}
				</div>
				<p className="home-hero__roles">UX/UI DESIGNER<br />FRONT-END DEV</p>
				<a className="home-hero__cta button-standard button-standard--arrow" href="/case-studies">
					<span>EXPLORE WORK</span>
					<span className="button-standard__arrow" aria-hidden="true">→</span>
				</a>
			</div>
			</section>
			<ContactForm />
		</>
	);
}

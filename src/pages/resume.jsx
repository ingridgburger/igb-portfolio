import { useState } from 'react';
import newTabIcon from '../assets/images/icons/new-tab-icon.png';
import ContactForm from '../components/contact-form';
import './resume.css';

const EDUCATION_POINTS = [
	'Minor in Computer Science',
	'Minor in Graphic Design',
	'Cumulative GPA: 3.86',
	'Anticipated Graduation: June 2028',
];

const COURSEWORK = [
	'User Experience Design I & II',
	'User Interface Design I & II',
	'Web Scripting I & II',
	'Web Authoring I & II',
	'Storytelling for UX Design',
	'Microinteractions',
	'Human Computer Interaction',
	'Design Thinking in Product Design',
	'Computer Programming',
];

const EXPERIENCE = [
	{
		company: 'SPELL Magazine',
		role: 'UX Designer & Co-Creative Director',
		location: 'Philadelphia, PA',
		dates: 'October 2024 - Present',
		bullets: [
			'Design and maintain the SPELL Magazine website',
			'Co-lead creative direction across all touch points',
			'Design and produce editorial spreads, balancing typography, layout, and imagery',
			'Curate and showcase submissions across digital and print platforms',
			'Organize and support community events',
		],
	},
	{
		company: 'Intealth',
		role: 'Full Stack Developer & UX Designer',
		location: 'Philadelphia, PA',
		dates: 'March 2026 - September 2026',
		bullets: [
			'Collaborated in Agile sprints to develop application features using React, TypeScript, and GraphQL to enhance medical credential verification systems used by thousands of international healthcare professionals',
			'Consulted with SMEs and QA analysts to identify user needs and resolve functional issues, translating these insights into responsive Figma prototypes and implementing them as responsive, accessible interfaces',
		],
	},
	{
		company: "Weckerly's Ice Cream",
		role: 'UX Strategy & Marketing',
		location: 'Philadelphia, PA',
		dates: 'March 2026 - January 2026',
		bullets: [
			'Redesigned and optimized website to improve flow, accessibility, and UX',
			'Used SEO to boost discoverability and engagement',
			'Implemented consistent brand guidelines across web, social, and print',
			'Built analytics systems to streamline planning and track performance',
			'Executed campaigns and loyalty programs to increase engagement and sales',
		],
	},
	{
		company: 'Patchwork Zine',
		role: 'Web & Editorial Design',
		location: 'Philadelphia, PA',
		dates: 'March 2026 - January 2026',
		bullets: [
			'Designed and maintained the Patchwork Zine website',
			'Led all creative efforts across digital and print',
			'Developed and managed social media content',
			'Oversaw overall creative direction, ensuring consistency across all platforms',
		],
	},
];

const TECHNICAL_SKILLS = [
	{
		category: 'Design & Production',
		values: 'Figma, Adobe Creative Suite, Storybook, Canva, Readymag',
	},
	{
		category: 'Development & Web',
		values: 'React, TypeScript, JavaScript, HTML, CSS, PHP, MySQL, Apollo GraphQL, GitHub, VS Code',
	},
	{
		category: 'Other Tools',
		values: 'PowerPoint, Excel, Google Analytics, Google Search Console, Meta Business Suite',
	},
];

const AWARDS = [
	"Dean's List, continuous",
	'AJ Drexel Scholarship',
	'Westphal Portfolio Scholarship',
];

export default function ResumePage() {
	const [activeSectionId, setActiveSectionId] = useState('experience');
	const sections = [
		{ id: 'experience', title: 'Experience' },
		{ id: 'education', title: 'Education' },
		{ id: 'skills', title: 'Skills' },
		{ id: 'awards', title: 'Awards' },
	];

	return (
		<>
			<section className="resume-page">
				<header className="resume-page__header">
					<h1 className="resume-page__title">
						<span className="text-h1">INGRID BURGER</span>{' '}
						<span className="text-h2">⚲ Philadelphia, PA</span>
					</h1>
				</header>

				<div className="resume-page__tab-row">
					<nav className="resume-page__tabs" role="tablist" aria-label="Resume sections">
						{sections.map((section) => (
							<button
								key={section.id}
								type="button"
								role="tab"
								id={`resume-tab-${section.id}`}
								aria-selected={activeSectionId === section.id}
								aria-controls={`resume-panel-${section.id}`}
								className={`resume-page__tab ${
									activeSectionId === section.id ? 'is-active' : ''
								}`}
								onClick={() => setActiveSectionId(section.id)}
							>
								<span className="resume-page__tab-background" aria-hidden="true" />
								<svg
									className="resume-page__tab-oval"
									viewBox="0 0 160 56"
									preserveAspectRatio="none"
									aria-hidden="true"
								>
									<defs>
										<filter id={`resume-tab-rough-oval-${section.id}`}>
											<feTurbulence
												type="fractalNoise"
												baseFrequency="0.045"
												numOctaves="3"
												seed="7"
												result="noise"
											/>
											<feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
										</filter>
									</defs>
									<path
										d="M2 28C2 12 36 5 80 5C124 5 158 12 158 28C158 44 124 51 80 51C36 51 2 44 2 28Z"
										pathLength="1"
										style={{ filter: `url("#resume-tab-rough-oval-${section.id}")` }}
									/>
								</svg>
								<span className="resume-page__tab-label">{section.title}</span>
							</button>
						))}
					</nav>

					<a
						className="resume-page__pdf-button button-standard text-h4"
						href="https://example.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>View as PDF</span>
						<img src={newTabIcon} alt="" aria-hidden="true" />
					</a>
				</div>

				<div
					className="resume-page__panel"
					id={`resume-panel-${activeSectionId}`}
					role="tabpanel"
					aria-labelledby={`resume-tab-${activeSectionId}`}
				>
					{activeSectionId === 'experience' ? (
						<div className="resume-page__experience-stack">
							{EXPERIENCE.map((job) => (
								<article key={`${job.company}-${job.dates}`} className="resume-page__job">
									<div className="resume-page__job-head">
										<div className="resume-page__job-title-line">
											<span className="resume-page__job-company">{job.company}</span>
											<span className="resume-page__job-title-separator" aria-hidden="true">
												{'   '}
											</span>
											<span className="resume-page__job-role">{job.role}</span>
										</div>
										<p className="resume-page__job-location">⚲ {job.location}</p>
									</div>
									<p className="resume-page__job-dates">{job.dates}</p>
									<ul className="resume-page__list">
										{job.bullets.map((point) => (
											<li key={point}>{point}</li>
										))}
									</ul>
								</article>
							))}
						</div>
					) : null}

					{activeSectionId === 'education' ? (
						<>
							<h3 className="resume-page__entry-title">BS in User Experience & Interaction Design</h3>
							<p className="resume-page__entry-subtitle">
								Antoinette Westphal College of Art and Design, Drexel University
							</p>
							<ul className="resume-page__list">
								{EDUCATION_POINTS.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>

							<h4 className="resume-page__subheading">Relevant Coursework</h4>
							<ul className="resume-page__list resume-page__list--columns">
								{COURSEWORK.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</>
					) : null}

					{activeSectionId === 'skills' ? (
						<div className="resume-page__skills-stack">
							{TECHNICAL_SKILLS.map((group) => (
								<p key={group.category} className="resume-page__skill-line">
									<strong>{group.category}:</strong> {group.values}
								</p>
							))}
						</div>
					) : null}

					{activeSectionId === 'awards' ? (
						<ul className="resume-page__list">
							{AWARDS.map((award) => (
								<li key={award}>{award}</li>
							))}
						</ul>
					) : null}
				</div>

			</section>
			<ContactForm />
		</>
	);
}

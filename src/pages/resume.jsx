import { useState } from 'react';
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

function ResumeSection({ id, title, isOpen, onToggle, children }) {
	return (
		<section className={`resume__section ${isOpen ? 'is-open' : ''}`}>
			<h2 className="resume__section-title">
				<button
					className="resume__trigger text-h2"
					onClick={() => onToggle(id)}
					aria-expanded={isOpen}
					aria-controls={`resume-panel-${id}`}
					id={`resume-trigger-${id}`}
				>
					<span>{title}</span>
					<span className="resume__plus" aria-hidden="true" />
				</button>
			</h2>

			<div
				className="resume__panel"
				id={`resume-panel-${id}`}
				role="region"
				aria-labelledby={`resume-trigger-${id}`}
			>
				<div className="resume__panel-inner">{children}</div>
			</div>
		</section>
	);
}

export default function ResumePage() {
	const [openSectionId, setOpenSectionId] = useState('');

	const toggleSection = (id) => {
		setOpenSectionId((current) => (current === id ? '' : id));
	};

	return (
		<section className="resume-page">
			<header className="resume-page__header">
				<h1 className="resume-page__title text-h1">
					<span className="resume-page__title-name">INGRID BURGER</span>{' '}
					<span className="resume-page__title-location">⚲ Philadelphia, PA</span>
				</h1>
			</header>

			<div className="resume-page__accordion">

                <ResumeSection
					id="experience"
					title="Professional Experience"
					isOpen={openSectionId === 'experience'}
					onToggle={toggleSection}
				>
					<div className="resume__experience-stack">
						{EXPERIENCE.map((job) => (
							<article key={`${job.company}-${job.dates}`} className="resume__job">
								<div className="resume__job-head">
									<div className="resume__job-title-line">
										<span className="resume__job-company">{job.company}</span>
										<span className="resume__job-title-separator" aria-hidden="true">
											{'   '}
										</span>
										<span className="resume__job-role">{job.role}</span>
									</div>
									<p className="resume__job-location">⚲ {job.location}</p>
								</div>
								<p className="resume__job-dates">{job.dates}</p>
								<ul className="resume__list">
									{job.bullets.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</ResumeSection>
                
				<ResumeSection
					id="education"
					title="Education"
					isOpen={openSectionId === 'education'}
					onToggle={toggleSection}
				>
					<h3 className="resume__entry-title">BS in User Experience & Interaction Design</h3>
					<p className="resume__entry-subtitle">
						Antoinette Westphal College of Art and Design, Drexel University
					</p>
					<ul className="resume__list">
						{EDUCATION_POINTS.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>

					<h4 className="resume__subheading">Relevant Coursework</h4>
					<ul className="resume__list resume__list--columns">
						{COURSEWORK.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</ResumeSection>

				<ResumeSection
					id="skills"
					title="Technical Skills"
					isOpen={openSectionId === 'skills'}
					onToggle={toggleSection}
				>
					<div className="resume__skills-stack">
						{TECHNICAL_SKILLS.map((group) => (
							<p key={group.category} className="resume__skill-line">
								<strong>{group.category}:</strong> {group.values}
							</p>
						))}
					</div>
				</ResumeSection>

				<ResumeSection
					id="awards"
					title="Awards"
					isOpen={openSectionId === 'awards'}
					onToggle={toggleSection}
				>
					<ul className="resume__list">
						{AWARDS.map((award) => (
							<li key={award}>{award}</li>
						))}
					</ul>
				</ResumeSection>
			</div>
		</section>
	);
}

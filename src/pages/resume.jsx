import { useState } from 'react';
import { useTheme } from '../context/theme-context';
import newTabIconLight from '../assets/images/icons/new-tab-icon-light.png';
import newTabIconDark from '../assets/images/icons/new-tab-icon-dark.png';
import professionalImage from '../assets/images/professional.webp';
import educationImage from '../assets/images/education.webp';
import skillsImage from '../assets/images/skills.webp';
import awardImage from '../assets/images/award.webp';
import Button from '../components/button';
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

function ResumeExpansionCard({ id, title, preview, image, isOpen, onToggle, large = false, children }) {
	return (
		<article className={`resume__card ${large ? 'resume__card--large' : 'resume__card--regular'} ${isOpen ? 'is-open' : ''}`}>
			<button
				className="resume__card-summary"
				type="button"
				onClick={() => onToggle(id)}
				aria-expanded={isOpen}
				aria-controls={`resume-panel-${id}`}
				id={`resume-trigger-${id}`}
			>
				<img className="resume__card-image" src={image} alt="" />
				<h2 className="text-h2">{title}</h2>
				<span className="resume__card-preview">{preview}</span>
			</button>
			<div
				className="resume__card-content-wrap"
				id={`resume-panel-${id}`}
				role="region"
				aria-labelledby={`resume-trigger-${id}`}
			>
				<div className="resume__card-content">{children}</div>
			</div>
			<button
				className="resume__card-expand"
				type="button"
				onClick={() => onToggle(id)}
				aria-expanded={isOpen}
				aria-controls={`resume-panel-${id}`}
			>
				{isOpen ? 'COLLAPSE' : 'EXPAND'} <span aria-hidden="true">⌄</span>
			</button>
		</article>
	);
}

export default function ResumePage() {
	const [openSectionId, setOpenSectionId] = useState('');
	const { theme } = useTheme();
	const newTabIcon = theme === 'light' ? newTabIconDark : newTabIconLight;

	const toggleSection = (id) => {
		setOpenSectionId((current) => (current === id ? '' : id));
	};

	return (
		<section className="resume-page">
			<header className="resume-page__header">
				<h1 className="resume-page__title">
					<span className="resume-page__title-name text-h1">INGRID BURGER</span>{' '}
					<span className="resume-page__title-location text-h1--unbold">⚲ Philadelphia, PA</span>
				</h1>
				<Button
					as="a"
					className="resume-page__pdf-button text-h4"
					href="https://example.com"
					target="_blank"
					rel="noopener noreferrer"
					icon={<img src={newTabIcon} alt="" />}
					iconPosition="right"
				>
					View as PDF
				</Button>
			</header>

			<div className="resume-page__cards">
				<ResumeExpansionCard
					id="experience"
					title="Professional Experience"
					preview="UX design, development, and creative direction"
					image={professionalImage}
					large
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
				</ResumeExpansionCard>
                
				<ResumeExpansionCard
					id="education"
					title="Education"
					preview="User Experience & Interaction Design at Drexel University"
					image={educationImage}
					large
					isOpen={openSectionId === 'education'}
					onToggle={toggleSection}
				>
					<h2 className="resume__entry-title">BS in User Experience & Interaction Design</h2>
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
				</ResumeExpansionCard>

				<ResumeExpansionCard
					id="skills"
					title="Technical Skills"
					image={skillsImage}
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
				</ResumeExpansionCard>

				<ResumeExpansionCard
					id="awards"
					title="Awards"
					image={awardImage}
					isOpen={openSectionId === 'awards'}
					onToggle={toggleSection}
				>
						<ul className="resume__list">
							{AWARDS.map((award) => (
								<li key={award}>{award}</li>
							))}
						</ul>
				</ResumeExpansionCard>
			</div>

			<form
				className="resume__contact-form"
				action="https://script.google.com/macros/s/AKfycby6FpxZZA20aeqSHw4sbt7KAILOu5_mmXSUUmnmAF-c6Iu32qTDm0e8FQ_Obgc4Jahh/exec"
				method="post"
			>
				<h2 className="text-h2">Get in touch</h2>
				<p className="resume__contact-intro">
					Feel free to reach out about potential projects, work opportunities, questions, or just to connect!
				</p>
				<div className="resume__contact-fields">
					<label className="resume__contact-field">
						<span>Name</span>
						<input type="text" name="name" placeholder="Your name" autoComplete="name" required />
					</label>
					<label className="resume__contact-field">
						<span>Email</span>
						<input type="email" name="email" placeholder="you@gmail.com" autoComplete="email" required />
					</label>
					<label className="resume__contact-field resume__contact-field--message">
						<span>Message <em>(optional)</em></span>
						<textarea name="message" placeholder="Write your message" rows="5" />
					</label>
				</div>
				<Button type="submit">Send message</Button>
			</form>
		</section>
	);
}

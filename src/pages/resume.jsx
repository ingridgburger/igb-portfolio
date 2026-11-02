import { useTheme } from '../context/theme-context';
import newTabIconLight from '../assets/images/icons/new-tab-icon-light.png';
import newTabIconDark from '../assets/images/icons/new-tab-icon-dark.png';
import professionalImage from '../assets/images/professional.webp';
import educationImage from '../assets/images/education.webp';
import skillsImage from '../assets/images/skills.webp';
import awardImage from '../assets/images/award.webp';
import Button from '../components/button';
import ContactForm from '../components/contact-form';
import './resume.css';

const EDUCATION_POINTS = [
	'GPA: 3.86',
	'Anticipated graduation: June 2028',
	"Dean's List (continuous)",
	'A.J. Drexel Scholarship',
	'Westphal Portfolio Scholarship',
];

const EXPERIENCE = [
	{
		company: 'Intealth',
		role: 'UX Design & Full Stack Development',
		location: 'Philadelphia, PA',
		dates: 'March 2026 - September 2026',
		bullets: [
			'Built React/TypeScript/GraphQL features for 6+ applicant and staff portals across 3+ projects',
			'Shipped credential verification features used by thousands of healthcare professionals worldwide',
			'Turned SME and QA feedback into responsive, accessible Figma prototypes and production interfaces',
			'Modernized legacy World Directory of Medical Schools site in Figma; implemented its rebrand',
			'Co-led a six-week style guide, DESIGN.md, and CellixJS audit agent effort; presented it to 180+ employees',
		],
	},
	{
		company: 'Spell Magazine',
		role: 'UX Design and Development & Co-Creative Direction',
		location: 'Philadelphia, PA',
		dates: 'October 2024 - Present',
		bullets: [
			"Designed and developed Spell's end-to-end React platform for readers, submitting artists, and community",
			'Built reusable components and a data-driven edition model so new editions launch with a single entry',
			'Design half the spreads across four 40+ page editions featuring 80+ artists, revising via artist feedback loops',
			"Co-lead creative direction across web, print, and community events for Philadelphia's student arts scene",
		],
	},
	{
		company: "Weckerly's Ice Cream",
		role: 'UX Strategy & Marketing',
		location: 'Philadelphia, PA',
		dates: 'March 2025 - January 2026',
		bullets: [
			'Redesigned the website for improved flow, accessibility, and task clarity; applied SEO to expand reach',
			'Built analytics systems to track user behavior and guide campaign and loyalty decisions',
			'Averaged 4.08% Instagram engagement vs. a 1-3% industry standard; top post reached 155K+ views',
			'Redefined and applied brand guidelines across web, social, and print',
		],
	},
	{
		company: 'Anthropologie',
		role: 'Sales Associate',
		location: 'Philadelphia, PA',
		dates: 'September 2024 - Present',
		bullets: [
			'Identify customer needs and deliver personalized styling using product knowledge and in-store technology',
			'Execute visual merchandising and inventory processing to uphold brand standards',
		],
	},
];

const TECHNICAL_SKILLS = [
	{
		category: 'Design',
		values: 'Figma, Design Systems, Prototyping, User Research, Photoshop, Illustrator, InDesign, After Effects',
	},
	{
		category: 'Development',
		values: 'React, TypeScript, JavaScript, Node.js, HTML, CSS, Python, PHP, Storybook, GitHub, Claude',
	},
	{
		category: 'Data',
		values: 'GraphQL, RESTful APIs, JSON, CRUD systems, MySQL, relational databases',
	},
	{
		category: 'Analytics & Marketing',
		values: 'Google Analytics, Google Search Console, SEO, Excel, brand guidelines, campaign strategy',
	},
];

const FREELANCE_PROJECTS = [
	'Soup PHL (UX/UI Design)',
	'Project Rentboy (Web Design)',
	'Assembly Pizza Co. (Menu Design)',
	'Magazine Commission (Editorial Design)',
];

function ResumeCard({ title, image, large = false, children }) {
	return (
		<article className={`resume__card ${large ? 'resume__card--large' : 'resume__card--regular'}`}>
			<div className="resume__card-summary">
				<img className="resume__card-image" src={image} alt="" />
				<h2 className="text-h2">{title}</h2>
			</div>
			<div className="resume__card-content">{children}</div>
		</article>
	);
}

export default function ResumePage() {
	const { theme } = useTheme();
	const newTabIcon = theme === 'light' ? newTabIconDark : newTabIconLight;

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
					href="https://drive.google.com/file/d/1QFmclH9uEEG7cG1lquBK5PylGyNziYUo/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					icon={<img src={newTabIcon} alt="" />}
					iconPosition="right"
				>
					View as PDF
				</Button>
			</header>

			<div className="resume-page__cards">
				<ResumeCard
					title="Professional Experience"
					image={professionalImage}
					large
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
									{job.location && <p className="resume__job-location">⚲ {job.location}</p>}
								</div>
								{job.dates && <p className="resume__job-dates">{job.dates}</p>}
								<ul className="resume__list">
									{job.bullets.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</ResumeCard>
				<ResumeCard
					title="Education"
					image={educationImage}
					large
				>
					<h2 className="resume__entry-title">B.S. in User Experience and Interaction Design, Minor in Computer Science</h2>
					<p className="resume__entry-subtitle">
						Drexel University, Antoinette Westphal College of Art and Design
					</p>
					<ul className="resume__list">
						{EDUCATION_POINTS.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</ResumeCard>

				<ResumeCard
					title="Technical Skills"
					image={skillsImage}
				>
					<div className="resume__skills-stack">
						{TECHNICAL_SKILLS.map((group) => (
							<p key={group.category} className="resume__skill-line">
								<strong>{group.category}:</strong> {group.values}
							</p>
						))}
					</div>
				</ResumeCard>

				<ResumeCard
					title="Freelance"
					image={awardImage}
				>
					<ul className="resume__list">
						{FREELANCE_PROJECTS.map((project) => (
							<li key={project}>{project}</li>
						))}
					</ul>
				</ResumeCard>
			</div>

			<ContactForm />
		</section>
	);
}

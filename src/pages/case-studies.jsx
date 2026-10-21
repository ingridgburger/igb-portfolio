import { useState } from 'react';
import CaseStudyCard from '../components/case-study-card';
import { caseStudies } from '../data/case-studies';
import './case-studies.css';

export default function CaseStudiesPage() {
	const [activeCategory, setActiveCategory] = useState('All');
	const categories = ['All', 'Professional', 'Class Projects'];
	const visibleStudies = caseStudies.filter((study) => (
		activeCategory === 'All'
			|| (activeCategory === 'Class Projects' && study.category === 'Class Project')
			|| study.category === activeCategory
	));

	return (
		<section className="case-studies-page">
			<header className="case-studies-page__header">
				<h1 className="case-studies-page__title text-h1">CASE STUDIES</h1>
				<nav className="case-studies-page__tabs" aria-label="Case study categories">
					{categories.map((category) => (
						<button
							key={category}
							type="button"
							className={`case-studies-page__tab ${activeCategory === category ? 'is-active' : ''}`}
							aria-pressed={activeCategory === category}
							onClick={() => setActiveCategory(category)}
						>
							<span className="case-studies-page__tab-background" aria-hidden="true" />
							<svg
								className="case-studies-page__tab-oval"
								viewBox="0 0 160 56"
								preserveAspectRatio="none"
								aria-hidden="true"
							>
								<defs>
									<filter id={`case-study-tab-rough-oval-${category.toLowerCase().replaceAll(' ', '-')}`}>
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
									style={{
										filter: `url("#case-study-tab-rough-oval-${category.toLowerCase().replaceAll(' ', '-')}")`,
									}}
								/>
							</svg>
							<span className="case-studies-page__tab-label">{category}</span>
						</button>
					))}
				</nav>
			</header>

			<div className="case-studies-page__grid">
				{visibleStudies.map((study) => (
					<CaseStudyCard key={study.title} study={study} />
				))}
			</div>
		</section>
	);
}

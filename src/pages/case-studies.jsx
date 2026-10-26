import { useState } from 'react';
import CaseStudyCard from '../components/case-study-card';
import { caseStudies } from '../data/case-studies';
import './case-studies.css';

export default function CaseStudiesPage() {
	const [activeCategory, setActiveCategory] = useState('All');
	const visibleCaseStudies =
		activeCategory === 'All'
			? caseStudies
			: caseStudies.filter((study) => study.category === activeCategory);

	return (
		<section className="case-studies-page">
			<header className="case-studies-page__header">
				<h1 className="case-studies-page__title text-h1">CASE STUDIES</h1>
				<div className="case-studies-page__tabs" role="tablist" aria-label="Case study categories">
					{['All', 'Professional', 'Class Project'].map((category) => (
						<button
							key={category}
							className={`case-studies-page__tab${
								activeCategory === category ? ' case-studies-page__tab--active' : ''
							}`}
							type="button"
							role="tab"
							aria-selected={activeCategory === category}
							tabIndex={activeCategory === category ? 0 : -1}
							onClick={() => setActiveCategory(category)}
						>
							{category}
						</button>
					))}
				</div>
			</header>

			<div className="case-studies-page__grid" role="tabpanel">
				{visibleCaseStudies.map((study) => (
					<CaseStudyCard key={study.title} study={study} />
				))}
			</div>
		</section>
	);
}

import CaseStudyCard from '../components/case-study-card';
import { caseStudies } from '../data/case-studies';
import './case-studies.css';

export default function CaseStudiesPage() {
	return (
		<section className="case-studies-page">
			<header className="case-studies-page__header">
				<h1 className="case-studies-page__title text-h1">CASE STUDIES</h1>
			</header>

			<div className="case-studies-page__grid">
				{caseStudies.map((study) => (
					<CaseStudyCard key={study.title} study={study} />
				))}
			</div>
		</section>
	);
}

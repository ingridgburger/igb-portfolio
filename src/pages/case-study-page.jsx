import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { caseStudies } from '../data/case-studies';
import { CaseStudyBlocks, PhotoBlock } from '../components/case-study-blocks';
import Button from '../components/button';
import './case-study-page.css';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies.find((entry) => entry.slug === slug);
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(([entry]) => setShowSecondaryNav(!entry.isIntersecting));
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [slug]);

  if (!study) {
    return (
      <section className="case-study-not-found">
        <h1 className="text-h1">CASE STUDY NOT FOUND</h1>
        <Link to="/case-studies">Back to case studies</Link>
      </section>
    );
  }

  const sectionAnchors = study.blocks
    .filter((block) => block.type === 'section-title')
    .map((block) => ({ text: block.text, id: block.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }));

  return (
    <div className="case-study-page">
      <div ref={sentinelRef} className="case-study-page__nav-sentinel" aria-hidden="true" />
      <SecondaryNav study={study} anchors={sectionAnchors} visible={showSecondaryNav} />
      <section className="case-study-page__opening">
        <section className="case-study-page__hero">
          <picture>
            <source media="(max-width: 600px)" srcSet={study.mobileHeroImage} />
            <source media="(max-width: 900px)" srcSet={study.tabletHeroImage || study.heroImage} />
            <img src={study.heroImage} alt={`${study.title} project preview`} />
          </picture>
          <Button as={Link} className="case-study-page__back-button" to="/case-studies" icon="‹">
            BACK
          </Button>
        </section>
        <div className="case-study-page__title-section">
          <div className="case-study-page__title">
            <img src={study.logo} alt="" width="64" height="64" loading="eager" />
            <div><h1>{study.title}</h1><h3 className="text-h3">{study.role}</h3></div>
          </div>
        </div>
      </section>
      <main className="case-study-page__main">
        {study.introImage && (
          <PhotoBlock block={{ src: study.introImage, alt: `${study.title} introduction` }} eager />
        )}
        <div className="case-study-page__content">
          {study.blocks.map((block, index) => {
            const anchor = sectionAnchors.find((item) => item.text === block.text);
            return <div key={`${block.type}-${index}`} id={anchor?.id}><CaseStudyBlocks blocks={[block]} /></div>;
          })}
        </div>
      </main>
    </div>
  );
}

function SecondaryNav({ study, anchors, visible }) {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav className={`case-study-secondary-nav ${visible ? 'is-visible' : ''}`} aria-label="Case study sections" aria-hidden={!visible}>
      <Button as={Link} className="case-study-secondary-nav__back" to="/case-studies" icon="‹">
        BACK
      </Button>
      <span className="case-study-secondary-nav__title text-h4">{study.title}</span>
      <div className="case-study-secondary-nav__anchors">
        {anchors.map((anchor) => (
          <a
            className="text-h4"
            key={anchor.id}
            href={`#${anchor.id}`}
            onClick={(event) => scrollToSection(event, anchor.id)}
          >
            {anchor.text}
          </a>
        ))}
      </div>
    </nav>
  );
}

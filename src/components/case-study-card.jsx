import './case-study-card.css';

export default function CaseStudyCard({ study }) {
  const coverSrc = new URL(`../assets/images/${study.coverImage}-cover.webp`, import.meta.url).href;
  const caseStudyHref = '/case-studies';

  const handleCardClick = (event) => {
    if (event.target.closest('a')) {
      return;
    }

    window.location.href = caseStudyHref;
  };

  const handleCardKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    window.location.href = caseStudyHref;
  };

  return (
    <article
      className="case-study-card"
      role="link"
      tabIndex="0"
      aria-label={`View ${study.title} case study`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >

      <div className="case-study-card__content">
        <span className="case-study-card__glow" aria-hidden="true" />
        <svg
          className="case-study-card__ring"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <defs>
            <filter id={`case-study-rough-ring-${study.coverImage}`}>
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
            style={{ filter: `url("#case-study-rough-ring-${study.coverImage}")` }}
          />
        </svg>
        <img src={coverSrc} alt={`${study.title} cover preview`} className="case-study-card__image" />
      </div>

      <div className="case-study-card__meta">
        <h2 className="case-study-card__title text-h2">{study.title}</h2>
        <p className="case-study-card__role">{study.role}</p>
        <ul className="case-study-card__skills" aria-label={`${study.title} skills`}>
          {study.skills.map((skill) => {
            const iconSrc = new URL(
              `../assets/images/icons/${skill}-icon.png`,
              import.meta.url
            ).href;

            return (
              <li key={skill} className="case-study-card__skill-item">
                <img src={iconSrc} alt="" className="case-study-card__skill-icon" />
              </li>
            );
          })}
        </ul>
        <a className="case-study-card__cta button-standard button-standard--arrow" href={caseStudyHref}>
          <span>LEARN MORE</span>
          <span className="button-standard__arrow" aria-hidden="true">→</span>
        </a>
      </div>

    </article>
  );
}

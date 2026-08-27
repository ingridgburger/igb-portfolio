import { useTheme } from '../context/theme-context';
import nextIconLight from '../assets/images/icons/next-icon-light.png';
import nextIconDark from '../assets/images/icons/next-icon-dark.png';
import './case-study-card.css';

export default function CaseStudyCard({ study }) {
  const { theme } = useTheme();
  const iconVariant = theme === 'light' ? 'dark' : 'light';
  const nextIcon = theme === 'light' ? nextIconDark : nextIconLight;
  const coverSrc = new URL(`../assets/images/${study.coverImage}-cover.webp`, import.meta.url).href;

  return (
    <article className="case-study-card">
      <div className="case-study-card__category">{study.category}</div>

      <div className="case-study-card__content">
        <ul className="case-study-card__skills" aria-label={`${study.title} skills`}>
          {study.skills.map((skill) => {
            const iconSrc = new URL(
              `../assets/images/icons/${skill}-icon-${iconVariant}.png`,
              import.meta.url
            ).href;

            return (
              <li key={skill} className="case-study-card__skill-item">
                <img src={iconSrc} alt="" className="case-study-card__skill-icon" />
              </li>
            );
          })}
        </ul>

        <img src={coverSrc} alt={`${study.title} cover preview`} className="case-study-card__image" />
      </div>

      <div className="case-study-card__meta">
        <h2 className="case-study-card__title text-h2">{study.title}</h2>
        <p className="case-study-card__role">{study.role}</p>
      </div>

      <div className="case-study-card__rail" aria-hidden="true">
        <img src={nextIcon} alt="" className="case-study-card__arrow-icon" />
      </div>
    </article>
  );
}

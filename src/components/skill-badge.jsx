import { useTheme } from '../context/theme-context';
import './skill-badge.css';

export default function SkillBadge({ skill }) {
  const { theme } = useTheme();
  const iconVariant = theme === 'light' ? 'dark' : 'light';
  const iconSrc = new URL(
    `../assets/images/icons/${skill.slug}-icon-${iconVariant}.png`,
    import.meta.url
  ).href;

  return (
    <div className="skill-badge">
      <img src={iconSrc} alt="" className="skill-badge__icon" />
      <span className="skill-badge__name">{skill.name}</span>
    </div>
  );
}
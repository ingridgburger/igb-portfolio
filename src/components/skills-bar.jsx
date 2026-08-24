import { skills } from '../data/skills';
import SkillBadge from './skill-badge';
import './skills-bar.css';

export default function SkillsBar() {
  return (
    <div className="skills-bar">
      <div className="skills-bar__track">
        {skills.map((skill) => (
          <SkillBadge key={skill.slug} skill={skill} />
        ))}
        {skills.map((skill) => (
          <SkillBadge key={`${skill.slug}-dup`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
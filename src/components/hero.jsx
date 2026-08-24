import SkillsBar from './skills-bar';
import HeroImages from './hero-images';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">
        <span className="text-h1">HI, I'M INGRID,</span>{' '}
        <span className="text-h1--unbold">UX / UI DESIGNER</span>
      </h1>

      <p className="hero__subtitle">
        Designing thoughtful experiences from concept to code.
      </p>

      <div className="hero__skills">
        <SkillsBar />
      </div>

      <div className="hero__images">
        <HeroImages />
      </div>
    </section>
  );
}
import { useEffect, useState } from 'react';
import SkillsBar from './skills-bar';
import HeroImages from './hero-images';
import './hero.css';

const ROLE_TITLES = ['UX / UI DESIGNER', 'FRONT-END DEVELOPER'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLE_TITLES[roleIndex];
    const typingSpeed = 95;
    const deletingSpeed = 60;
    const holdAfterTyping = 1100;
    const holdAfterDeleting = 250;

    const isTypingDone = typedText === currentRole;
    const isDeletingDone = typedText.length === 0;

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && isTypingDone) {
      delay = holdAfterTyping;
    }

    if (isDeleting && isDeletingDone) {
      delay = holdAfterDeleting;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && !isTypingDone) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
        return;
      }

      if (!isDeleting && isTypingDone) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isDeletingDone) {
        setTypedText(currentRole.slice(0, typedText.length - 1));
        return;
      }

      setIsDeleting(false);
      setRoleIndex((index) => (index + 1) % ROLE_TITLES.length);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section className="hero">
      <h1 className="hero__title">
        <span className="text-h1 hero__line">HI, I'M INGRID BURGER.</span>
        <span className="text-h1--unbold hero__line hero__role" aria-label={ROLE_TITLES[roleIndex]}>
          {typedText}
          <span className="hero__caret" aria-hidden="true">|</span>
        </span>
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
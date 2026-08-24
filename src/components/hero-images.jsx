import spellCover from '../assets/images/spell-cover.webp';
import weckerlysCover from '../assets/images/weckerlys-cover.webp';
import petesCover from '../assets/images/petes-cover.webp';
import './hero-images.css';

export default function HeroImages() {
  return (
    <div className="hero-images">
      <img
        src={weckerlysCover}
        alt=""
        className="hero-images__side hero-images__side--left"
      />
      <img
        src={petesCover}
        alt=""
        className="hero-images__side hero-images__side--right"
      />
      <img
        src={spellCover}
        alt="Spell Magazine website preview"
        className="hero-images__center"
      />
    </div>
  );
}
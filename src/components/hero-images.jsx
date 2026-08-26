import { useEffect, useState } from 'react';
import trailsterCover from '../assets/images/trailster-cover.webp';
import spellCover from '../assets/images/spell-cover.webp';
import petesCover from '../assets/images/petes-cover.webp';
import weckerlysCover from '../assets/images/weckerlys-cover.webp';
import soupCover from '../assets/images/soup-cover.webp';
import patchworkCover from '../assets/images/patchwork-cover.webp';
import './hero-images.css';

const HERO_IMAGE_ORDER = [
  { src: trailsterCover, alt: 'Trailster website preview' },
  { src: spellCover, alt: 'Spell Magazine website preview' },
  { src: petesCover, alt: "Pete's website preview" },
  { src: weckerlysCover, alt: 'Weckerlys website preview' },
  { src: soupCover, alt: 'Soup website preview' },
  { src: patchworkCover, alt: 'Patchwork website preview' },
];

export default function HeroImages() {
  const [mainIndex, setMainIndex] = useState(1);
  const total = HERO_IMAGE_ORDER.length;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setMainIndex((index) => (index + 1) % total);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [total]);

  const leftIndex = (mainIndex - 1 + total) % total;
  const rightIndex = (mainIndex + 1) % total;

  const getImageRole = (index) => {
    if (index === mainIndex) {
      return 'center';
    }

    if (index === leftIndex) {
      return 'left';
    }

    if (index === rightIndex) {
      return 'right';
    }

    const relative = (index - mainIndex + total) % total;
    return relative <= total / 2 ? 'off-right' : 'off-left';
  };

  return (
    <div className="hero-images">
      {HERO_IMAGE_ORDER.map((image, index) => {
        const role = getImageRole(index);
        const isCenter = role === 'center';

        return (
          <img
            key={image.src}
            src={image.src}
            alt={isCenter ? image.alt : ''}
            aria-hidden={!isCenter}
            className={`hero-images__item hero-images__item--${role}`}
          />
        );
      })}
    </div>
  );
}
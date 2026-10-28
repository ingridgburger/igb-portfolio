import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import spellCover from '../assets/images/spell-cover.webp';
import petesCover from '../assets/images/petes-cover.webp';
import weckerlysCover from '../assets/images/weckerlys-cover.webp';
import soupCover from '../assets/images/soup-cover.webp';
import intealthCover from '../assets/images/intealth-cover.webp';
import './hero-images.css';

const HERO_IMAGE_ORDER = [
  { src: spellCover, alt: 'Spell Magazine website preview', slug: 'spell-magazine' },
  { src: petesCover, alt: "Pete's website preview", slug: 'petes-little-lunchbox' },
  { src: weckerlysCover, alt: 'Weckerlys website preview', slug: 'weckerlys-ice-cream' },
  { src: soupCover, alt: 'Soup website preview', slug: 'soup-phl' },
  { src: intealthCover, alt: 'Intealth website preview', slug: 'intealth' },
];

export default function HeroImages() {
  const [mainIndex, setMainIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const total = HERO_IMAGE_ORDER.length;

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setMainIndex((index) => (index + 1) % total);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, total]);

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
          <Link
            key={image.src}
            to={`/case-studies/${image.slug}`}
            className={`hero-images__link hero-images__link--${role}`}
            aria-label={isCenter ? `View ${image.alt.replace(' website preview', '')} case study` : undefined}
            tabIndex={isCenter ? 0 : -1}
            onMouseEnter={isCenter ? () => setIsPaused(true) : undefined}
            onMouseLeave={isCenter ? () => setIsPaused(false) : undefined}
            onFocus={isCenter ? () => setIsPaused(true) : undefined}
            onBlur={isCenter ? () => setIsPaused(false) : undefined}
          >
            <img
              src={image.src}
              alt={isCenter ? image.alt : ''}
              aria-hidden={!isCenter}
              className={`hero-images__item hero-images__item--${role}`}
            />
          </Link>
        );
      })}
    </div>
  );
}
import { useEffect, useState } from 'react';
import './viewport-scroll-shadow.css';

function hasMoreContentBelow() {
  const doc = document.documentElement;
  return window.scrollY + window.innerHeight < doc.scrollHeight - 2;
}

export default function ViewportScrollShadow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const refreshVisibility = () => setIsVisible(hasMoreContentBelow());

    let frameId = null;
    const onViewportChange = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        refreshVisibility();
      });
    };

    refreshVisibility();
    window.addEventListener('scroll', onViewportChange, { passive: true });
    window.addEventListener('resize', onViewportChange);

    return () => {
      window.removeEventListener('scroll', onViewportChange);
      window.removeEventListener('resize', onViewportChange);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      className={`viewport-scroll-shadow ${isVisible ? 'is-visible' : ''}`}
      aria-hidden="true"
    />
  );
}
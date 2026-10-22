import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './back-to-top.css';

function hasMoreContentBelow() {
  return document.documentElement.scrollHeight > window.innerHeight + 2;
}

export default function BackToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const updateVisibility = () => {
      setIsVisible(window.scrollY > 120 && hasMoreContentBelow());
    };

    let frameId = null;
    const handleViewportChange = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateVisibility();
      });
    };

    updateVisibility();
    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'is-visible' : ''}`}
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

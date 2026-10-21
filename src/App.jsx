import { useEffect, useRef, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import ResumePage from './pages/resume';
import CaseStudiesPage from './pages/case-studies';
import FineArtsPage from './pages/fine-arts';
import EditorialDesignPage from './pages/editorial-design';
import PosterDesignPage from './pages/poster-design';
import VisualArtsPage from './pages/visual-arts';
import AboutMePage from './pages/about-me';
import ViewportScrollShadow from './components/viewport-scroll-shadow';
import './App.css';

function PlaceholderPage({ title }) {
  return (
    <section className="app__placeholder">
      <h1 className="text-h1">{title}</h1>
    </section>
  );
}

function getCurrentPage(pathname, options = {}) {
  const normalized = pathname.toLowerCase().replace(/\/$/, '') || '/';

  if (normalized === '/') {
    return <HomePage animateIntro={options.animateHomeIntro} />;
  }

  if (normalized === '/resume') {
    return <ResumePage />;
  }

  if (normalized === '/case-studies') {
    return <CaseStudiesPage />;
  }

  if (normalized === '/visual-arts') {
    return <VisualArtsPage />;
  }

  if (normalized === '/fine-arts') {
    return <FineArtsPage />;
  }

  if (normalized === '/editorial-design') {
    return <EditorialDesignPage />;
  }

  if (normalized === '/poster-design') {
    return <PosterDesignPage />;
  }

  if (normalized === '/about') {
    return <AboutMePage />;
  }

  return <PlaceholderPage title="Page Not Found" />;
}

function normalizePath(pathname) {
  return pathname.toLowerCase().replace(/\/$/, '') || '/';
}

function PageTransition({ pathname, animateHomeIntro }) {
  const previousPathRef = useRef(pathname);
  const isInitialRenderRef = useRef(true);
  const isInitialRender = isInitialRenderRef.current;
  const [transition, setTransition] = useState({
    currentPath: pathname,
    previousPath: null,
    isTransitioning: false,
  });

  useEffect(() => {
    isInitialRenderRef.current = false;
    const previousPath = previousPathRef.current;
    previousPathRef.current = pathname;

    if (pathname === previousPath) {
      return undefined;
    }

    setTransition({
      currentPath: pathname,
      previousPath,
      isTransitioning: true,
    });

    const timer = window.setTimeout(() => {
      setTransition((current) => ({
        ...current,
        previousPath: null,
        isTransitioning: false,
      }));
    }, 450);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`page-transition ${transition.isTransitioning ? 'is-transitioning' : ''}`}>
      {transition.previousPath && transition.previousPath !== '/visual-arts' && (
        <div className="page-transition__page page-transition__page--outgoing" aria-hidden="true">
          {getCurrentPage(transition.previousPath)}
        </div>
      )}
      <div
        key={transition.currentPath}
        className={`page-transition__page page-transition__page--incoming ${
          isInitialRender ? 'page-transition__page--initial' : ''
        }`}
      >
        {getCurrentPage(transition.currentPath, { animateHomeIntro })}
      </div>
    </div>
  );
}

function App() {
  const [pathname, setPathname] = useState(normalizePath(window.location.pathname));
  const [hasVisitedHome, setHasVisitedHome] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      setHasVisitedHome(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };

    const handleInternalNavigation = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest('a');

      if (!link || link.target === '_blank' || link.hasAttribute('download')) {
        return;
      }

      const url = new URL(link.href, window.location.href);

      if (url.origin !== window.location.origin) {
        return;
      }

      const nextPathname = normalizePath(url.pathname);

      if (nextPathname === pathname && url.hash === window.location.hash) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
      setPathname(nextPathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleInternalNavigation);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleInternalNavigation);
    };
  }, [pathname]);

  const isHomePage = pathname === '/';

  return (
    <div className="app">
      <div className={isHomePage ? 'app__hero-viewport' : undefined}>
        <Header />
        <main className={`app__content ${isHomePage ? '' : 'app__content--page'}`.trim()}>
          <PageTransition
            pathname={pathname}
            animateHomeIntro={pathname === '/' && !hasVisitedHome}
          />
        </main>
      </div>
      <Footer />
      <ViewportScrollShadow />
    </div>
  );
}

export default App;
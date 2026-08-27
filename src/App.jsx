import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import ResumePage from './pages/resume';
import CaseStudiesPage from './pages/case-studies';
import FineArtsPage from './pages/fine-arts';
import EditorialDesignPage from './pages/editorial-design';
import PosterDesignPage from './pages/poster-design';
import ViewportScrollShadow from './components/viewport-scroll-shadow';
import './app.css';

function PlaceholderPage({ title }) {
  return (
    <section className="app__placeholder">
      <h1 className="text-h1">{title}</h1>
    </section>
  );
}

function getCurrentPage(pathname) {
  const normalized = pathname.toLowerCase().replace(/\/$/, '') || '/';

  if (normalized === '/') {
    return <HomePage />;
  }

  if (normalized === '/resume') {
    return <ResumePage />;
  }

  if (normalized === '/case-studies') {
    return <CaseStudiesPage />;
  }

  if (normalized === '/visual-arts') {
    return <PlaceholderPage title="Visual Arts" />;
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
    return <PlaceholderPage title="About Me" />;
  }

  return <PlaceholderPage title="Page Not Found" />;
}

function App() {
  const page = getCurrentPage(window.location.pathname);

  return (
    <div className="app">
      <Header />
      <main className="app__content">{page}</main>
      <Footer />
      <ViewportScrollShadow />
    </div>
  );
}

export default App;
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home.jsx';
import ResumePage from './pages/resume';
import CaseStudiesPage from './pages/case-studies';
import VisualArtsPage from './pages/visual-arts';
import AboutPage from './pages/about';
import ViewportScrollShadow from './components/viewport-scroll-shadow';
import BackToTop from './components/back-to-top';
import CaseStudyPage from './pages/case-study-page';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

function PlaceholderPage({ title }) {
  return (
    <section className="app__placeholder">
      <h1 className="text-h1">{title}</h1>
    </section>
  );
}

function App() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isCaseStudyPage = pathname.startsWith('/case-studies/');

  return (
    <div className="app">
      <div className={isHomePage ? 'app__hero-viewport app__home-viewport' : isCaseStudyPage ? 'app__case-study-viewport' : undefined}>
        <Header />
        <main className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
            <Route path="/visual-arts" element={<VisualArtsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <ViewportScrollShadow />
      <BackToTop />
    </div>
  );
}

export default App;
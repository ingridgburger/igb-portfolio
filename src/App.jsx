import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
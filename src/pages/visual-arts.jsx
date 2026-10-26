import { useState } from 'react';
import VisualGalleryPage from '../components/visual-gallery-page';
import './visual-arts.css';

const galleries = [
  { key: 'poster-design', label: 'Poster Design' },
  { key: 'fine-arts', label: 'Fine Arts' },
  { key: 'editorial-design', label: 'Editorial Design' },
];

export default function VisualArtsPage() {
  const [activeGallery, setActiveGallery] = useState(galleries[0].key);

  return (
    <section className="visual-arts-page">
      <header className="visual-arts-page__header">
        <h1 className="visual-arts-page__title text-h1">VISUAL ARTS</h1>
        <div className="visual-arts-page__tabs" role="tablist" aria-label="Visual arts categories">
          {galleries.map((gallery) => (
            <button
              key={gallery.key}
              className={`visual-arts-page__tab${
                activeGallery === gallery.key ? ' visual-arts-page__tab--active' : ''
              }`}
              type="button"
              role="tab"
              aria-selected={activeGallery === gallery.key}
              tabIndex={activeGallery === gallery.key ? 0 : -1}
              onClick={() => setActiveGallery(gallery.key)}
            >
              {gallery.label}
            </button>
          ))}
        </div>
      </header>

      <VisualGalleryPage galleryKey={activeGallery} showTitle={false} />
    </section>
  );
}

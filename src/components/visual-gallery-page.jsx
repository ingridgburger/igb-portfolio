import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import './visual-gallery-page.css';
import { visualGalleries } from '../data/visual-galleries';

const ALL_GALLERY_IMAGES = import.meta.glob('../assets/images/*/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
  import: 'default',
});

const IMAGE_SRC_BY_PATH = new Map(Object.entries(ALL_GALLERY_IMAGES));

function fileNameFromPath(path) {
  const segments = path.split('/');
  const raw = segments[segments.length - 1] || '';
  return raw.replace(/\.[^.]+$/, '');
}

function altFromFileName(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function resolveImageSrc(folder, file) {
  const directPath = `../assets/images/${folder}/${file}`;
  const matchedSrc = IMAGE_SRC_BY_PATH.get(directPath);

  return matchedSrc || '';
}

export default function VisualGalleryPage({ galleryKey, tabs = [] }) {
  const [activeGalleryKey, setActiveGalleryKey] = useState(galleryKey);
  const [transitionDirection, setTransitionDirection] = useState('next');
  const gallery = visualGalleries[activeGalleryKey];
  const [selectedImage, setSelectedImage] = useState(null);
  const safeGallery = gallery || {
    title: '',
    blurb: '',
    folder: '',
    layout: 'four-three-two',
    images: [],
  };

  const { title, blurb, folder, layout, images: imageMetadata = [] } = safeGallery;
  const images = useMemo(() => {
    return imageMetadata
      .filter((item) => item && item.file)
      .map((item) => {
        const src = resolveImageSrc(folder, item.file);

        return {
          id: item.file,
          src,
          alt: item.title || altFromFileName(fileNameFromPath(item.file)),
          title: item.title || altFromFileName(fileNameFromPath(item.file)),
          dimensions: item.dimensions || '',
          mediums: item.mediums || [],
        };
      })
      .filter((image) => image.src);
  }, [folder, imageMetadata]);

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);
  const handleTabChange = (nextGalleryKey) => {
    const currentIndex = tabs.findIndex((tab) => tab.key === activeGalleryKey);
    const nextIndex = tabs.findIndex((tab) => tab.key === nextGalleryKey);

    setTransitionDirection(nextIndex >= currentIndex ? 'next' : 'previous');
    setActiveGalleryKey(nextGalleryKey);
    setSelectedImage(null);
  };

  if (!gallery) {
    return null;
  }

  return (
    <section className={`visual-gallery visual-gallery--${layout}`}>
    <h1 className="visual-gallery__title text-h1">VISUAL ARTS</h1>
    <div className="visual-gallery__tab-header">
        {tabs.length > 0 ? (
          <div className="visual-gallery__tabs" role="tablist" aria-label="Visual arts categories">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeGalleryKey === tab.key}
                className={`visual-gallery__tab ${
                  activeGalleryKey === tab.key ? 'is-active' : ''
                }`}
                onClick={() => handleTabChange(tab.key)}
              >
              <span className="visual-gallery__tab-background" aria-hidden="true" />
              <svg
                  className="visual-gallery__tab-oval"
                  viewBox="0 0 160 56"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id={`visual-tab-rough-oval-${tab.key}`}>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.045"
                        numOctaves="3"
                        seed="7"
                        result="noise"
                      />
                      <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="2.5"
                      />
                    </filter>
                  </defs>
                  <path
                    d="M2 28C2 12 36 5 80 5C124 5 158 12 158 28C158 44 124 51 80 51C36 51 2 44 2 28Z"
                    pathLength="1"
                    style={{ filter: `url("#visual-tab-rough-oval-${tab.key}")` }}
                  />
                </svg>
                <span className="visual-gallery__tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div
        key={activeGalleryKey}
        className={`visual-gallery__content visual-gallery__content--${transitionDirection}`}
      >
        <header className="visual-gallery__header">
          <p className="visual-gallery__blurb">{blurb}</p>
          <h3 className="text-h3">( Click any image to enlarge )</h3>
        </header>

        <div className="visual-gallery__grid">
          {images.map((image) => (
            <figure key={image.id} className="visual-gallery__item">
              <button
                type="button"
                className="visual-gallery__trigger"
                onClick={() => openImage(image)}
                aria-label={`Open ${image.title}`}
              >
                <img src={image.src} alt={image.alt} className="visual-gallery__image" loading="lazy" />
              </button>
            </figure>
          ))}
        </div>
      </div>

      {selectedImage
        ? createPortal(
            <div className="visual-gallery-modal" onClick={closeImage} role="presentation">
              <div
                className="visual-gallery-modal__panel"
                role="dialog"
                aria-modal="true"
                aria-label={selectedImage.title}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="visual-gallery-modal__close"
                  onClick={closeImage}
                  aria-label="Close image preview"
                >
                  <span />
                  <span />
                </button>

                <div className="visual-gallery-modal__media">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="visual-gallery-modal__image"
                  />
                </div>

                <div className="visual-gallery-modal__details">
                  <h1 className="visual-gallery-modal__title text-h1">{selectedImage.title}</h1>

                  {activeGalleryKey === 'fine-arts' && selectedImage.dimensions ? (
                    <p className="visual-gallery-modal__dimensions text-h2">
                      {selectedImage.dimensions}
                    </p>
                  ) : null}

                  {selectedImage.mediums.length > 0 ? (
                    <div className="visual-gallery-modal__badges">
                      {selectedImage.mediums.map((medium) => (
                        <span key={medium} className="visual-gallery-modal__badge">
                          {medium}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}

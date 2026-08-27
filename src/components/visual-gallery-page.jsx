import { useEffect, useMemo, useState } from 'react';
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

export default function VisualGalleryPage({ galleryKey }) {
  const gallery = visualGalleries[galleryKey];
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

  if (!gallery) {
    return null;
  }

  return (
    <section className={`visual-gallery visual-gallery--${layout}`}>
      <header className="visual-gallery__header">
        <h1 className="visual-gallery__title text-h1">{title}</h1>
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

      {selectedImage ? (
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

              {galleryKey === 'fine-arts' && selectedImage.dimensions ? (
                <p className="visual-gallery-modal__dimensions text-h1--unbold">
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
        </div>
      ) : null}
    </section>
  );
}

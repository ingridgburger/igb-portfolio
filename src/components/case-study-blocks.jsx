import { useEffect, useState } from 'react';
import Button from './button';

export function SectionTitleBlock({ block }) {
  return <h2 className="case-study-block__section-title text-h2">{block.text}</h2>;
}

export function SectionSubtitleBlock({ block }) {
  return <h3 className="case-study-block__section-subtitle text-h3">{block.text}</h3>;
}

export function BodyBlock({ block }) {
  const paragraphs = Array.isArray(block.text) ? block.text : [block.text];
  return (
    <div className="case-study-block__body">
      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

export function ListBlock({ block }) {
  const ListTag = block.ordered === false ? 'ul' : 'ol';

  return (
    <ListTag className="case-study-block__list">
      {block.items.map((item) => (
        <li className={item.text ? 'case-study-block__list-item--flat' : undefined} key={item.title ?? item.label}>
          {item.text ? (
            <><strong>{item.label}:</strong> {item.text}</>
          ) : (
            <>
              <strong>{item.title}</strong>
              <ul>
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </>
          )}
        </li>
      ))}
    </ListTag>
  );
}

export function PhotoBlock({ block, eager = false }) {
  return <img className="case-study-block__photo" src={block.src} alt={block.alt} loading={eager ? 'eager' : 'lazy'} />;
}

export function VideoBlock({ block }) {
  const width = Math.min(Math.max(Number(block.width ?? 100), 1), 100);

  return (
    <figure className="case-study-block__video" style={{ '--video-width': `${width}%` }}>
      <video
        src={block.src}
        poster={block.poster}
        autoPlay={block.autoplay === true}
        loop={block.loop === true}
        muted={block.audio !== true}
        controls={block.controls !== false}
        playsInline
        preload="metadata"
        aria-label={block.alt}
      />
      {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
  );
}

export function IframeBlock({ block }) {
  return (
    <div className="case-study-block__iframe">
      <iframe
        src={block.src}
        title={block.title}
        allowFullScreen={block.allowFullScreen ?? true}
        loading="lazy"
      />
    </div>
  );
}

export function CarouselBlock({ block }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const photos = block.photos ?? [];

  if (photos.length === 0) {
    return null;
  }

  const activePhoto = photos[activeIndex];
  const showControls = photos.length > 1;
  const changePhoto = (direction) => {
    setActiveIndex((current) => (current + direction + photos.length) % photos.length);
  };

  return (
    <figure
      className="case-study-block__carousel"
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
    >
      <div className="case-study-block__carousel-image">
        <img src={activePhoto.src} alt={activePhoto.alt} loading="lazy" />
        {showControls && (
          <>
            <button
              className="case-study-block__carousel-arrow case-study-block__carousel-arrow--previous"
              type="button"
              aria-label="Show previous image"
              onClick={() => changePhoto(-1)}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              className="case-study-block__carousel-arrow case-study-block__carousel-arrow--next"
              type="button"
              aria-label="Show next image"
              onClick={() => changePhoto(1)}
            >
              <span aria-hidden="true">›</span>
            </button>
          </>
        )}
      </div>
      {activePhoto.caption && <figcaption>{activePhoto.caption}</figcaption>}
    </figure>
  );
}

export function ButtonBlock({ block }) {
  return (
    <div className="case-study-block__button">
      <Button as="a" href={block.href} target={block.external ? '_blank' : undefined} rel={block.external ? 'noopener noreferrer' : undefined}>
        {block.text}
      </Button>
    </div>
  );
}

export function GridBlock({ block }) {
  useEffect(() => {
    if (block.photos.length !== block.rows * block.columns) {
      console.warn(`Case study grid expected ${block.rows * block.columns} photos but received ${block.photos.length}.`);
    }
  }, [block]);

  return (
    <div className="case-study-block__grid" style={{ '--grid-columns': block.columns }}>
      {block.photos.map((photo) => <img key={`${photo.src}-${photo.alt}`} src={photo.src} alt={photo.alt} loading="lazy" />)}
    </div>
  );
}

export function ExpansionCardsBlock({ block, renderBlocks }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const isLargeVariant = block.variant === 'large';

  const toggleCard = (index) => setExpandedCard((current) => (current === index ? null : index));
  const handleCardKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(index);
    }
  };

  return (
    <div className={`case-study-block__cards ${isLargeVariant ? 'case-study-block__cards--large' : ''}`}>
      {block.cards.map((card, index) => {
        const isExpanded = expandedCard === index;
        return (
          <article
            className={`case-study-block__card ${isExpanded ? 'is-expanded' : ''}`}
            key={`${card.title ?? 'card'}-${index}`}
            role="button"
            tabIndex="0"
            aria-expanded={isExpanded}
            onClick={() => toggleCard(index)}
            onKeyDown={(event) => handleCardKeyDown(event, index)}
          >
            <div className={`case-study-block__card-summary ${isLargeVariant ? 'case-study-block__card-summary--large' : ''}`}>
              {card.image && (
                <span className={`case-study-block__card-image ${isLargeVariant ? 'case-study-block__card-image--large' : ''}`}>
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </span>
              )}
              <h3>{card.title}</h3>
              <span className="case-study-block__card-preview">{card.preview}</span>
            </div>
            <div className="case-study-block__card-content-wrap">
              <div className="case-study-block__card-content">
                {renderBlocks(card.expandedContent ?? [])}
              </div>
            </div>
            <span className="case-study-block__card-expand">
              {isExpanded ? 'COLLAPSE' : 'EXPAND'} <span aria-hidden="true">⌄</span>
            </span>
          </article>
        );
      })}
    </div>
  );
}

export function CaseStudyBlocks({ blocks }) {
  return blocks.map((block, index) => <CaseStudyBlock key={`${block.type}-${index}`} block={block} />);
}

function renderCaseStudyBlocks(blocks = []) {
  return blocks.map((block, index) => <CaseStudyBlock key={`${block.type}-${index}`} block={block} />);
}

function CaseStudyBlock({ block }) {
  switch (block.type) {
    case 'section-title': return <SectionTitleBlock block={block} />;
    case 'section-subtitle': return <SectionSubtitleBlock block={block} />;
    case 'body': return <BodyBlock block={block} />;
    case 'list': return <ListBlock block={block} />;
    case 'photo': return <PhotoBlock block={block} />;
    case 'video': return <VideoBlock block={block} />;
    case 'iframe': return <IframeBlock block={block} />;
    case 'carousel': return <CarouselBlock block={block} />;
    case 'button': return <ButtonBlock block={block} />;
    case 'grid': return <GridBlock block={block} />;
    case 'expansion-cards':
      return <ExpansionCardsBlock block={block} renderBlocks={renderCaseStudyBlocks} />;
    default:
      return null;
  }
}

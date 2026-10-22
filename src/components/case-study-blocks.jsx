import { useEffect, useState } from 'react';
import Button from './button';

export function SectionTitleBlock({ block }) {
  return <h2 className="case-study-block__section-title">{block.text}</h2>;
}

export function BodyBlock({ block }) {
  const paragraphs = Array.isArray(block.text) ? block.text : [block.text];
  return (
    <div className="case-study-block__body">
      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

export function PhotoBlock({ block, eager = false }) {
  return <img className="case-study-block__photo" src={block.src} alt={block.alt} loading={eager ? 'eager' : 'lazy'} />;
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

  const toggleCard = (index) => setExpandedCard((current) => (current === index ? null : index));
  const handleCardKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(index);
    }
  };

  return (
    <div className="case-study-block__cards">
      {block.cards.map((card, index) => {
        const isExpanded = expandedCard === index;
        return (
          <article
            className={`case-study-block__card ${isExpanded ? 'is-expanded' : ''}`}
            key={card.title}
            role="button"
            tabIndex="0"
            aria-expanded={isExpanded}
            onClick={() => toggleCard(index)}
            onKeyDown={(event) => handleCardKeyDown(event, index)}
          >
            <div className="case-study-block__card-summary">
              <span className="case-study-block__card-image"><img src={card.image} alt={card.alt} loading="lazy" /></span>
              <h3>{card.title}</h3>
              <span className="case-study-block__card-preview">{card.preview}</span>
            </div>
            <div className="case-study-block__card-content-wrap">
              <div className="case-study-block__card-content">
                {renderBlocks(card.expandedContent)}
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

function renderCaseStudyBlocks(blocks) {
  return blocks.map((block, index) => <CaseStudyBlock key={`${block.type}-${index}`} block={block} />);
}

function CaseStudyBlock({ block }) {
  switch (block.type) {
    case 'section-title': return <SectionTitleBlock block={block} />;
    case 'body': return <BodyBlock block={block} />;
    case 'photo': return <PhotoBlock block={block} />;
    case 'button': return <ButtonBlock block={block} />;
    case 'grid': return <GridBlock block={block} />;
    case 'expansion-cards':
      return <ExpansionCardsBlock block={block} renderBlocks={renderCaseStudyBlocks} />;
    default:
      return null;
  }
}

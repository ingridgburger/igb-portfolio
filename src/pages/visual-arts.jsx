import VisualGalleryPage from '../components/visual-gallery-page';

const visualArtsTabs = [
  { key: 'poster-design', label: 'POSTER DESIGN' },
  { key: 'fine-arts', label: 'FINE ARTS' },
  { key: 'editorial-design', label: 'EDITORIAL DESIGN' },
];

export default function VisualArtsPage() {
  
  return <VisualGalleryPage galleryKey="poster-design" tabs={visualArtsTabs} />;
}

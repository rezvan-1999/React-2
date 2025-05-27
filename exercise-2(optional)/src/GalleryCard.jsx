export default function GalleryCard({ imgSrc, imgAlt }) {
  return (
    <div className="gallery-item">
      <img className="gallery-image" src={imgSrc} alt={imgAlt} />
    </div>
  );
}

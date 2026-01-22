type PlacePreviewProps = {
  title: string
  images: string[]
}

export default function PlacePreview({ title, images }: PlacePreviewProps) {
  return (
    <div className="place__image-wrapper">
      <img className="place__image" src={images[0]} alt={title} />
      <div className="place__title glass-morphism">
        <h1>{title}</h1>
      </div>
    </div>
  )
}
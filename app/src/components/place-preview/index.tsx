import { useEffect, useState } from 'react'

type PlacePreviewProps = {
  title: string
  images: string[]
}

export default function PlacePreview({ title, images }: PlacePreviewProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="place__image-wrapper">
      {images.map((src, i) => (
        <img
          key={src}
          className={`place__image ${i === index ? 'is-active' : ''}`}
          src={src}
          alt={title}
        />
      ))}

      <div className="place__title glass-morphism">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

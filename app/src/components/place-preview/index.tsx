import { useEffect, useState } from 'react'
import { LiquidGlass } from '@liquidglass/react'

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

      <div className="place__title">
        <LiquidGlass
          blur={4.5}
          contrast={1}
          brightness={0.8}
          saturation={1.5}
          shadowIntensity={0}
          displacementScale={1}
          elasticity={0.5}
        >
          <h1 className="place__title-text">{title}</h1>
        </LiquidGlass>
      </div>
    </div>
  )
}

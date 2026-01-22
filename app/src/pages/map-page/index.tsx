import PointsList from '@/components/points-list'
import { points } from '@/mocks/points'
import YandexMaps from '@/components/yandex-maps'

export default function MapPage() {
  return (
    <main className="map">
      <div className="map__image-wrapper">
        <YandexMaps points={points} className="map__image" />
      </div>
      <div className="map__about">
        <PointsList points={points} />
      </div>
    </main>
  )
}
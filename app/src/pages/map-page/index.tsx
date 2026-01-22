import PointsList from '@/components/points-list'
import { points } from '@/mocks/points'

export default function MapPage() {
  return (
    <main className="map">
      <div className="map__image-wrapper">
        <img className="map__image" src="/images/map.jpg" alt="Map" />
      </div>
      <div className="map__about">
        <PointsList points={points} />
      </div>
    </main>
  )
}
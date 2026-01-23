import type { TPoint } from '@/types/point'
import { Link } from 'react-router-dom'

type PointsListProps = {
  points: TPoint[]
}

export default function PointsList({ points }: PointsListProps) {
  return (
    <ul className="map__about-list">
      {points.map((point: TPoint, i: number) => (
        <li className="map__about-item" key={point.id}>
          <div className="map__about-item-avatar">
            <img className="map__about-item-image" src={`/icons/point-${i + 1}.svg`} alt="Point" />
          </div>
          <Link to={point.id} className="map__about-item-wrapper">
            <h4>{point.title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  )
}
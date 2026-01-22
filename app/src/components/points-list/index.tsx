import type { TPoint } from '@/types/point'
import { Link } from 'react-router-dom'

type PointsListProps = {
  points: TPoint[]
}

export default function PointsList({ points }: PointsListProps) {
  return (
    <ul className="map__about-list">
      {points.map((point: TPoint, id: number) => (
        <li className="map__about-item">
          <div className="map__about-item-avatar">
            <img className="map__about-item-image" src={`/icons/point-${id + 1}.svg`} alt="Point" />
          </div>
          <Link to={point.id} className="map__about-item-wrapper">
            <h4>{point.title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  )
}
'use client'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import type { TPoint } from '@/types/point'
import { useNavigate } from 'react-router-dom'

type Props = {
  points: TPoint[]
  className?: string
}

export default function YandexMaps({ points, className }: Props) {
  const navigate = useNavigate()
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [56.8389, 60.6057],
          zoom: 14,
        }}
        className={className}
      >
        {points.map((point, id) => (
          <Placemark
            key={point.id}
            geometry={[point.latitude, point.longitude]}
            properties={{
              balloonContent: `<strong>${point.title}</strong>`,
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: `/icons/point-${id + 1}.svg`,
              iconImageSize: [50, 50],
              iconImageOffset: [-25, -50],
            }}
            onClick={() => navigate(point.id)}
          />
        ))}
      </Map>
    </YMaps>
  )
}

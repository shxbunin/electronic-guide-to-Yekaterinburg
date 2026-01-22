import type { TProperty } from '@/types/property'
import Property from '@/components/property'

type PropertiesListProps = {
  properties: TProperty[]
}

export default function PropertiesList({ properties }: PropertiesListProps) {
  return (
    <ul className="place__about-list">
      {properties.map((property) => (
        <Property {...property} />
      ))}
    </ul>
  )
}
import type { TProperty } from '@/types/property'

type PropertiesListProps = {
  properties: TProperty[]
}

export default function PropertiesList({ properties }: PropertiesListProps) {
  return (
    <ul className="place__about-list">
      {properties.map((property: TProperty) => (
        <li className="place__about-item">
          <div className="place__about-item-avatar">
            <img className="place__about-item-image" src={property.icon} alt={property.title} />
          </div>
          <div className="place__about-item-wrapper">
            <h3>{property.title}</h3>
            {property.title === 'Сайт'
              ? <h4><a href={property.description}>{property.description}</a></h4>
              : <h4>{property.description}</h4>}
          </div>
        </li>
      ))}
    </ul>
  )
}
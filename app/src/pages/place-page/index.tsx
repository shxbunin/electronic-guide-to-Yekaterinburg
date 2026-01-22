import PropertiesList from '@/components/properties-list'
import Address from '@/components/address'
import PlacePreview from '@/components/place-preview'
import { useParams } from 'react-router-dom'
import { places } from '@/mocks/places'

export default function PlacePage() {
  const { id } = useParams()
  const place = places.find(p => p.id === id)

  return place ? (
    <main className="place">
      <PlacePreview title={place.title} images={place.images} />
      <div className="place__about">
        <PropertiesList properties={place.properties} />
        <Address address={place.address} />
      </div>
    </main>
  ) : 'not found'
}

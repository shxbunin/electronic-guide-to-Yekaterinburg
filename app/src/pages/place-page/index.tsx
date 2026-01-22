import PropertiesList from '@/components/properties-list'
import Address from '@/components/address'
import PlacePreview from '@/components/place-preview'

export default function PlacePage() {
  return (
    <main className="place">
      <PlacePreview title={''} images={[]} />
      <div className="place__about">
        <PropertiesList properties={[]} />
        <Address address={''} />
      </div>
    </main>
  )
}

type AddressProps = {
  address: string
}

export default function Address({ address }: AddressProps) {
  return (
    <div className="place__about-address">
      <div className="place__about-address-avatar">
        <img className="place__about-address-image" src="/icons/point.svg" alt="Point" />
      </div>
      <div className="place__about-address-wrapper">
        <h3>Адрес</h3>
        <h4>{address}</h4>
      </div>
    </div>
  )
}
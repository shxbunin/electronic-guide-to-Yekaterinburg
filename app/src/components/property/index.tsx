import type { TProperty } from '@/types/property'

type PropertyProps = TProperty

export default function Property({ title, description, icon }: PropertyProps) {
  return (
    <li className="place__about-item">
      <div className="place__about-item-avatar">
        <img className="place__about-item-image" src={icon} alt={title} />
      </div>
      <div className="place__about-item-wrapper">
        <h3>{title}</h3>
        {title === 'Сайт'
          ? <h4><a href={description}>{description}</a></h4>
          : <h4>{description}</h4>}
      </div>
    </li>
  )
}
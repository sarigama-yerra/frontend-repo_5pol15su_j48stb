import { Link } from 'react-router-dom'

const DestinationCard = ({ slug, name, image, intro }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-lg bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow">{name}</div>
      </div>
      <div className="p-4 text-gray-700">
        <p>{intro}</p>
        <Link to={`/destinations/${slug}`} className="mt-3 inline-flex text-emerald-700 font-semibold hover:underline">Discover</Link>
      </div>
    </div>
  )
}

export default DestinationCard

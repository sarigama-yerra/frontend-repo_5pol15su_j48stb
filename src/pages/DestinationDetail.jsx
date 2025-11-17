import { useParams, Link } from 'react-router-dom'
import { allDestinations } from '../data/destinations'

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-semibold border border-emerald-100">{children}</span>
)

const DestinationDetail = () => {
  const { slug } = useParams()
  const destination = allDestinations.find(d => d.slug === slug)

  if (!destination) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-gray-700">Destination not found.</p>
        <Link to="/" className="text-emerald-700 font-semibold hover:underline">Back to Destinations</Link>
      </div>
    )
  }

  return (
    <div className="">
      <section className="relative h-[42vh] w-full overflow-hidden">
        <img src={destination.hero} alt={destination.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow">{destination.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900">About</h2>
            <p className="mt-4 text-gray-700">{destination.about}</p>

            <h3 className="mt-10 text-xl font-semibold text-gray-900">Suggested 3-day Itinerary</h3>
            <ol className="mt-4 space-y-4">
              {destination.itinerary.map((d) => (
                <li key={d.day} className="rounded-xl border border-gray-100 p-4">
                  <div className="font-semibold text-emerald-700">Day {d.day}: {d.title}</div>
                  <p className="text-gray-700">{d.details}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:pl-6">
            <h3 className="text-xl font-semibold text-gray-900">Highlights</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {destination.highlights.map((h) => (<Badge key={h}>{h}</Badge>))}
            </div>
            <div className="mt-6">
              <a href={`https://wa.me/254700000000?text=${encodeURIComponent('Hi, I\'d like an itinerary for ' + destination.name)}`} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-700">Plan this trip</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-12 bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900">Gallery</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destination.gallery.map((src, i) => (
              <img key={i} src={src} alt={`${destination.name} ${i+1}`} loading="lazy" className="h-60 w-full object-cover rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationDetail

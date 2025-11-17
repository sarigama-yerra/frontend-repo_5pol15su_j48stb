import { motion } from 'framer-motion'
import DestinationCard from './DestinationCard'
import { allDestinations } from '../data/destinations'

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Destinations</h2>
          <p className="mt-4 text-gray-600">Handpicked places across Kenya—coastlines, cities, forests and mountains. Tap a card to learn more.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allDestinations.map((d, idx) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (idx % 6) * 0.05, duration: 0.5 }}
            >
              <DestinationCard
                slug={d.slug}
                name={d.name}
                image={(d.gallery && d.gallery[0]) || d.hero}
                intro={d.about}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations

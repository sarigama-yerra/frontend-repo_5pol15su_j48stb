import { motion } from 'framer-motion'

const places = [
  'Nairobi','Lamu','Mombasa','Naivasha','Nanyuki','Samburu','Diani','Kisumu','Karura Forest','Limuru','Tsavo','Aberdare Ranges','Marsabit','Laikipia','Meru','Kitengela','Malindi','Watamu','Mount Kenya','Hell’s Gate','Chyulu Hills','Turkana','Isiolo'
]

const imgFor = (name) => `https://source.unsplash.com/800x600/?kenya,${encodeURIComponent(name)}`

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Destinations</h2>
          <p className="mt-4 text-gray-600">Handpicked places across Kenya—coastlines, cities, forests and mountains. Tap a card to learn more.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (idx % 6) * 0.05, duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-lg bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={imgFor(name)} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow">{name}</div>
              </div>
              <div className="p-4 text-gray-700">
                <p>
                  Experience {name}'s unique charm with curated stays, local guides, and moments you’ll remember.
                </p>
                <button className="mt-3 inline-flex text-emerald-700 font-semibold hover:underline">Discover</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations

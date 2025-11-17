import { motion } from 'framer-motion'
import { Bike, City, Mountain, Wine, Sprout } from 'lucide-react'

const experiences = [
  {
    title: 'Bike tours with wildlife',
    icon: Bike,
    desc: 'Guided rides near conservancies and parks with safety-first routes.'
  },
  {
    title: 'City tours',
    icon: City,
    desc: 'Street food, markets, art, and nightlife with local hosts.'
  },
  {
    title: 'Hiking escapes',
    icon: Mountain,
    desc: 'From forest trails to volcanic ridges for every fitness level.'
  },
  {
    title: 'Wine tasting',
    icon: Wine,
    desc: 'Boutique vineyards and sundowner selections in scenic valleys.'
  },
  {
    title: 'Farm tours',
    icon: Sprout,
    desc: 'Tea, coffee, flower and fruit farms—meet growers and taste fresh.'
  }
]

const Experiences = () => {
  return (
    <section id="experiences" className="py-20 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Experiences</h2>
          <p className="mt-4 text-gray-700">Choose from signature activities designed for discovery and connection.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map(({ title, icon: Icon, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
              className="rounded-xl bg-white p-6 shadow-sm hover:shadow-lg border border-emerald-100"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences

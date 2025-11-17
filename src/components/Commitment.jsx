const badges = [
  {
    title: 'Women-led',
    desc: 'Founded and run by Kenyan women—prioritizing safety, dignity, and joy in travel.'
  },
  {
    title: 'Queer-friendly',
    desc: 'Open, respectful, and intentional about LGBTQIA+ inclusion across all experiences.'
  },
  {
    title: 'Inclusive community',
    desc: 'We welcome every body, background, and ability. Representation matters here.'
  }
]

const Commitment = () => {
  return (
    <section id="commitment" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Commitment</h2>
          <p className="mt-4 text-gray-700">
            Travel can be transformative when everyone feels safe and seen. Our team designs trips that honour identity, culture, and the land.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-gradient-to-br from-white to-emerald-50/30">
              <h3 className="text-lg font-semibold text-emerald-800">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Commitment

import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-md">
              Women-led, inclusive adventures across Kenya
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 drop-shadow">
              Karachie Safaris curates safe, welcoming, and unforgettable journeys for women, queer travelers, and allies—designed by locals who know Kenya best.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#destinations" className="inline-flex items-center rounded-full bg-white/90 text-emerald-700 px-6 py-3 font-semibold shadow hover:bg-white transition">
                Explore Destinations
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold shadow hover:bg-emerald-700 transition">
                Plan Your Trip
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero

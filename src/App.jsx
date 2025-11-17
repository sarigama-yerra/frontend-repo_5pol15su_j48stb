import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Experiences from './components/Experiences'
import Commitment from './components/Commitment'
import Contact from './components/Contact'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Experiences />
        <Commitment />
        <Contact />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Karachie Safaris. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#destinations" className="hover:text-emerald-700">Destinations</a>
            <a href="#experiences" className="hover:text-emerald-700">Experiences</a>
            <a href="#commitment" className="hover:text-emerald-700">Our Commitment</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>

      <WhatsAppFloat phone="+254700000000" />
    </div>
  )
}

export default App

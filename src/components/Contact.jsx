import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')

    const text = encodeURIComponent(`Hi Karachie Safaris, I am ${name} (${email}). ${message}`)
    const href = `https://wa.me/254700000000?text=${text}`
    window.open(href, '_blank')
    setStatus('We\'ve opened WhatsApp with your message. We will respond shortly!')
  }

  return (
    <section id="contact" className="py-20 bg-brand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s plan your Kenyan escape</h2>
            <p className="mt-4 text-gray-700">Tell us what you\'re dreaming of—dates, vibe, budget—and we\'ll craft an itinerary you\'ll love.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Quick responses on WhatsApp</li>
              <li>• Flexible, inclusive planning</li>
              <li>• Local guides and vetted partners</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm border border-brand-100">
            <div className="grid gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-lg border-gray-200 focus:border-brand-500 focus:ring-brand-500" />
              <input name="email" type="email" required placeholder="Email address" className="w-full rounded-lg border-gray-200 focus:border-brand-500 focus:ring-brand-500" />
              <textarea name="message" rows="4" required placeholder="Tell us about your trip" className="w-full rounded-lg border-gray-200 focus:border-brand-500 focus:ring-brand-500"></textarea>
              <button className="inline-flex justify-center rounded-full bg-brand-600 text-white px-6 py-3 font-semibold hover:bg-brand-700">Send via WhatsApp</button>
              {status && <p className="text-sm text-brand-700">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

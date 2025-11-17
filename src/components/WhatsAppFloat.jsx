import { MessageCircle } from 'lucide-react'

const WhatsAppFloat = ({ phone = '+254700000000', message = 'Hello Karachie Safaris! I\'d love to plan a trip.' }) => {
  const encoded = encodeURIComponent(message)
  const waLink = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encoded}`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <div className="relative">
        <span className="absolute -inset-2 rounded-full bg-brand-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></span>
        <div className="relative flex items-center gap-3 bg-brand-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-brand-600 transition-colors">
          <MessageCircle className="h-6 w-6" />
          <span className="hidden sm:block font-semibold">WhatsApp</span>
        </div>
      </div>
    </a>
  )
}

export default WhatsAppFloat

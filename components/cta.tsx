import Link from 'next/link'
import { Mail, MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/95 to-accent/95 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
          Ready to Transform Your Operations?
        </h2>

        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Partner with KAE for innovative industrial solutions that drive efficiency, reliability, and growth
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition transform hover:scale-105"
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </Link>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            <MessageSquare size={20} />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-white/20">
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <p className="text-white/80 mt-2">Technical Support</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">48H</div>
            <p className="text-white/80 mt-2">Quote Response</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">Global</div>
            <p className="text-white/80 mt-2">Delivery & Installation</p>
          </div>
        </div>
      </div>
    </section>
  )
}

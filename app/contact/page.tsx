'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-xl border border-border p-8 space-y-4 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:info@kae.com" className="text-primary font-semibold hover:text-primary/80 transition">
                  info@kae.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 space-y-4 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground mb-2">
                  Call us for immediate assistance during business hours.
                </p>
                <a href="tel:+1234567890" className="text-secondary font-semibold hover:text-secondary/80 transition">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 space-y-4 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground mb-2">
                  Visit our office or reach us on WhatsApp.
                </p>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:text-accent/80 transition">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Main Contact Form and Info */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                  <Clock size={24} className="text-primary" />
                  <span>Business Hours</span>
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-foreground">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-foreground">10 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 space-y-3">
                <h4 className="font-bold text-foreground">Quick Support</h4>
                <p className="text-sm text-muted-foreground">
                  For urgent matters, please call our support line or use WhatsApp for immediate assistance.
                </p>
                <div className="flex space-x-3">
                  <a href="tel:+1234567890" className="flex-1 text-center py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-sm">
                    Call Now
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition text-sm">
                    WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-3">FAQ</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-primary hover:text-primary/80 transition">
                      What are your pricing options?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary/80 transition">
                      How long does installation take?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary/80 transition">
                      Do you provide maintenance?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:text-primary/80 transition">
                      Can you customize solutions?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

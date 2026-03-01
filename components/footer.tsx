import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center font-bold">
                KAE
              </div>
              <span className="font-bold text-lg">KAE</span>
            </div>
            <p className="text-white/70">
              Industrial solutions for tomorrow. Change for the better.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/products" className="hover:text-primary transition">
                  Control Systems
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition">
                  Power Distribution
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition">
                  Energy Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Industries</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/industries" className="hover:text-primary transition">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition">
                  Power Systems
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition">
                  Energy
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition">
                  Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:info@kae.com" className="hover:text-primary transition">
                  info@kae.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-1 flex-shrink-0 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span>Industrial Park, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm">
            © {currentYear} KAE Industrial Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-white/70 text-sm">
            <Link href="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

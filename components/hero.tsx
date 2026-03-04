import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2">
              <Zap size={16} />
              <span className="text-sm font-semibold">Innovation in Motion</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Industrial Solutions for <span className="text-primary">Tomorrow</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg text-balance">
              In industries where every second matters, compromise isn't an option. KAE provides precision-engineered power solutions—from Servo Stabilizers and UPS systems to solar and electrical panels—eliminating downtime and protecting your valuable machinery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition transform hover:scale-105"
              >
                <span>Explore Products</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Active Clients</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">25+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">99%</div>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

           {/* Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/Hero_Image.png"
              alt="Engineer with servo-controlled stabilizer machine"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

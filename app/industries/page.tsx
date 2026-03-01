'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Cog, Zap, Leaf, Building2, TrendingUp, Users } from 'lucide-react'

const industriesData = [
  {
    id: 1,
    name: 'Manufacturing',
    description: 'Optimize your production processes with our advanced control systems and automation solutions.',
    icon: Cog,
    color: 'from-primary',
    stats: {
      clients: '150+',
      projects: '320+',
      efficiency: '40%'
    },
    services: [
      'Production line automation',
      'Quality control systems',
      'Process optimization',
      'Maintenance programs',
      'Staff training'
    ],
    challenges: [
      'Increasing production efficiency while maintaining quality',
      'Reducing downtime and maintenance costs',
      'Implementing modern automation in legacy systems',
      'Meeting industry standards and certifications'
    ],
    solution: 'Our comprehensive manufacturing solutions integrate seamlessly with existing equipment, providing real-time monitoring, predictive maintenance, and automation capabilities that increase productivity by up to 40% while reducing operational costs.'
  },
  {
    id: 2,
    name: 'Power Systems',
    description: 'Ensure reliable power generation and distribution with our industrial-grade equipment.',
    icon: Zap,
    color: 'from-secondary',
    stats: {
      clients: '120+',
      projects: '280+',
      reliability: '99.8%'
    },
    services: [
      'Power distribution equipment',
      'Switchgear solutions',
      'Protection systems',
      'Remote monitoring',
      'Emergency support'
    ],
    challenges: [
      'Maintaining 24/7 reliability',
      'Integrating renewable energy sources',
      'Managing peak load demands',
      'Meeting strict safety standards'
    ],
    solution: 'Our power systems solutions provide industrial-grade reliability with redundancy and monitoring capabilities. We offer equipment rated for demanding applications with comprehensive support and maintenance programs.'
  },
  {
    id: 3,
    name: 'Energy',
    description: 'Develop sustainable and efficient energy solutions for modern operations.',
    icon: Leaf,
    color: 'from-accent',
    stats: {
      clients: '85+',
      projects: '180+',
      savings: '35%'
    },
    services: [
      'Renewable energy systems',
      'Energy efficiency audits',
      'Solar integration',
      'Energy storage solutions',
      'Performance monitoring'
    ],
    challenges: [
      'Transitioning to renewable energy',
      'Optimizing energy consumption',
      'Managing battery storage systems',
      'Ensuring continuous power supply'
    ],
    solution: 'We provide end-to-end energy solutions including renewable integration, efficiency optimization, and storage systems designed to reduce your energy costs while supporting sustainability goals.'
  },
  {
    id: 4,
    name: 'Infrastructure',
    description: 'Support critical infrastructure projects with reliable industrial systems.',
    icon: Building2,
    color: 'from-primary',
    stats: {
      clients: '95+',
      projects: '210+',
      uptime: '99.9%'
    },
    services: [
      'System integration',
      'Control systems installation',
      'Network infrastructure',
      'Backup power systems',
      '24/7 technical support'
    ],
    challenges: [
      'Managing complex multi-system environments',
      'Ensuring zero downtime',
      'Scaling systems for growth',
      'Maintaining compliance and security'
    ],
    solution: 'Our infrastructure specialists design and implement scalable, reliable systems built to handle mission-critical applications with redundancy, monitoring, and round-the-clock support.'
  }
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Industries We <span className="text-primary">Serve</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tailored solutions for diverse industrial sectors. Let's explore how we can support your industry.
          </p>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {industriesData.map((industry, index) => {
            const Icon = industry.icon
            const isEven = index % 2 === 0

            return (
              <div key={industry.id} className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content - Alternating order */}
                <div className={`space-y-6 ${!isEven && 'md:order-2'}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${industry.color} to-background/20 text-white`}>
                      <Icon size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {industry.name}
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(industry.stats).map(([key, value]) => (
                      <div key={key} className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">
                          {value}
                        </div>
                        <p className="text-xs text-muted-foreground capitalize mt-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Services</h3>
                    <ul className="space-y-2">
                      {industry.services.map((service, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Discuss Your Needs
                  </Link>
                </div>

                {/* Challenges & Solution */}
                <div className={`space-y-6 ${!isEven && 'md:order-1'}`}>
                  {/* Challenges */}
                  <div className="bg-white border border-border rounded-xl p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center space-x-2">
                      <TrendingUp size={20} className="text-red-500" />
                      <span>Industry Challenges</span>
                    </h3>
                    <ul className="space-y-3">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="flex space-x-3">
                          <span className="text-red-500 font-bold flex-shrink-0">•</span>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center space-x-2">
                      <Users size={20} className="text-primary" />
                      <span>Our Solution</span>
                    </h3>
                    <p className="text-muted-foreground">
                      {industry.solution}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-white/90">
            Let's discuss how KAE solutions can address your specific industry challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

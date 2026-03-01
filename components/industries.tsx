import Link from 'next/link'
import { Building2, Zap, Leaf, Cog } from 'lucide-react'

const industries = [
  {
    id: 1,
    name: 'Manufacturing',
    description: 'Production optimization, process automation, and quality control systems',
    icon: Cog,
    color: 'bg-primary/10 text-primary',
    clients: '150+'
  },
  {
    id: 2,
    name: 'Power Systems',
    description: 'Generation, distribution, and management of electrical power infrastructure',
    icon: Zap,
    color: 'bg-secondary/10 text-secondary',
    clients: '120+'
  },
  {
    id: 3,
    name: 'Energy',
    description: 'Renewable and conventional energy solutions with maximum efficiency',
    icon: Leaf,
    color: 'bg-accent/10 text-accent',
    clients: '85+'
  },
  {
    id: 4,
    name: 'Infrastructure',
    description: 'Critical infrastructure systems and industrial construction projects',
    icon: Building2,
    color: 'bg-primary/10 text-primary',
    clients: '95+'
  }
]

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering tailored solutions across key industrial sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <Link
                key={industry.id}
                href={`/industries/${industry.id}`}
                className="group bg-white border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition cursor-pointer"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${industry.color}`}>
                    <Icon size={28} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-sm font-semibold text-primary">
                      {industry.clients} Active Clients
                    </span>
                    <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Don't see your industry?
          </h3>
          <p className="text-muted-foreground mb-6">
            We provide customized solutions for industries beyond our core sectors. Contact us to discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

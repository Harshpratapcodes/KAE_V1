import { Zap, Shield, TrendingUp, Users, Award, Cpu } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: 'State-of-the-art automation and control systems powered by the latest innovations',
    color: 'text-primary'
  },
  {
    icon: Shield,
    title: 'Reliable Performance',
    description: 'Industrial-grade equipment designed for demanding environments and 24/7 operation',
    color: 'text-secondary'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated technical team available to support your operations and maintenance needs',
    color: 'text-accent'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Flexible systems that grow with your business and adapt to changing requirements',
    color: 'text-primary'
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Optimized equipment that reduces energy consumption and operating costs',
    color: 'text-secondary'
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'International certifications and standards compliance ensuring highest quality',
    color: 'text-accent'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Why Choose <span className="text-primary">KAE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We combine innovation, reliability, and expertise to deliver industrial solutions that drive your business forward
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border hover:border-primary/50 transition bg-white hover:bg-muted/30 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color} mb-4 group-hover:scale-110 transition`}>
                  <Icon size={24} className="group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

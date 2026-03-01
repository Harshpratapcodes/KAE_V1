import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Advanced Control Systems',
    category: 'Automation',
    description: 'Professional control and monitoring solutions for industrial processes with real-time analytics',
    image: '🎛️',
    color: 'from-primary'
  },
  {
    id: 2,
    name: 'Power Distribution Units',
    category: 'Power Systems',
    description: 'Industrial-grade power distribution and management equipment for reliable operations',
    image: '⚡',
    color: 'from-secondary'
  },
  {
    id: 3,
    name: 'Manufacturing Equipment',
    category: 'Manufacturing',
    description: 'Precision machinery and production systems for diverse manufacturing applications',
    image: '🏭',
    color: 'from-accent'
  },
  {
    id: 4,
    name: 'Energy Solutions',
    category: 'Energy',
    description: 'Renewable and conventional energy systems optimized for efficiency and sustainability',
    image: '🔋',
    color: 'from-primary'
  },
  {
    id: 5,
    name: 'Monitoring Systems',
    category: 'Automation',
    description: 'Real-time monitoring and data analytics platforms for predictive maintenance',
    image: '📊',
    color: 'from-secondary'
  },
  {
    id: 6,
    name: 'Integration Services',
    category: 'Services',
    description: 'Custom integration solutions to seamlessly connect your existing equipment',
    image: '🔗',
    color: 'from-accent'
  }
]

export default function Products() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Our <span className="text-primary">Product Range</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Comprehensive solutions designed to meet diverse industrial requirements
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition group"
          >
            <span>View All Products</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition"
            >
              <div className={`h-40 bg-gradient-to-br ${product.color} to-background/20 flex items-center justify-center text-6xl group-hover:scale-110 transition`}>
                {product.image}
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {product.category}
                  </span>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

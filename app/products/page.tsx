'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

const productHierarchy = [
  {
    id: 'voltage-stabilizers',
    name: 'Voltage Stabilizers',
    icon: '⚡',
    description: 'Reliable voltage regulation solutions for uninterrupted power supply',
    subcategories: [
      {
        name: 'Servo Controlled Stabilizers',
        products: [
          {
            id: 'dimmer-oil-cooled',
            name: 'Dimmer Type Oil Cooled',
            description: 'Oil-cooled servo stabilizers with advanced cooling technology for industrial applications',
            features: ['High efficiency', 'Oil cooling', 'Servo controlled', 'Industrial grade']
          },
          {
            id: 'dimmer-air-cooled',
            name: 'Dimmer Type Air Cooled',
            description: 'Air-cooled servo stabilizers with efficient thermal management',
            features: ['Air cooling', 'Compact design', 'Servo controlled', 'Eco-friendly']
          }
        ]
      }
    ]
  },
  {
    id: 'transformers',
    name: 'Transformers',
    icon: '🔄',
    description: 'Advanced power transformation solutions for various applications',
    subcategories: [
      {
        name: 'Transformer Types',
        products: [
          {
            id: 'step-up-transformer',
            name: 'Step Up Transformer',
            description: 'Increases voltage for efficient power transmission and distribution',
            features: ['Voltage increase', 'High efficiency', 'Long distance transmission', 'Industrial use']
          },
          {
            id: 'step-down-transformer',
            name: 'Step Down Transformer',
            description: 'Reduces voltage to safe industrial operational levels',
            features: ['Voltage reduction', 'Safety features', 'Reliable output', 'Multiple windings']
          },
          {
            id: 'isolation-transformer',
            name: 'Isolation Transformer',
            description: 'Provides electrical isolation for enhanced safety and equipment protection',
            features: ['Electrical isolation', 'Safety certified', 'EMI filtering', 'Ground protection']
          }
        ]
      }
    ]
  },
  {
    id: 'electrical-panels',
    name: 'Electrical Panels',
    icon: '📊',
    description: 'Comprehensive panel solutions for power distribution and control',
    subcategories: [
      {
        name: 'Panel Types',
        products: [
          {
            id: 'ht-panels',
            name: 'HT Panels',
            description: 'High tension panels for primary power distribution',
            features: ['High voltage handling', 'Safety certified', 'Modular design', 'Professional grade']
          },
          {
            id: 'lt-panels',
            name: 'LT Panels',
            description: 'Low tension panels for control and secondary distribution',
            features: ['Low voltage control', 'Easy maintenance', 'Compact', 'Cost-effective']
          },
          {
            id: 'pf-panels',
            name: 'Power Factor Panels',
            description: 'Improves power factor and reduces reactive power losses',
            features: ['Power factor correction', 'Energy savings', 'Automated control', 'Reduces penalties']
          },
          {
            id: 'distribution-panels',
            name: 'Distribution Panels',
            description: 'Central distribution hub for electrical systems',
            features: ['Multi-outlet', 'Load distribution', 'Protection systems', 'Industrial rated']
          }
        ]
      }
    ]
  },
  {
    id: 'power-backup',
    name: 'Power Backup',
    icon: '🔋',
    description: 'Uninterrupted power solutions for continuous operations',
    subcategories: [
      {
        name: 'Online UPS Systems',
        products: [
          {
            id: 'ups-1p-1p',
            name: '1 Phase In – 1 Phase Out',
            description: 'Single-phase to single-phase uninterruptible power supply',
            features: ['Single phase', 'Compact', 'Cost-effective', 'Residential/small commercial']
          },
          {
            id: 'ups-1p-3p',
            name: '1 Phase In – 3 Phase Out',
            description: 'Converts single-phase input to three-phase output for industrial use',
            features: ['Phase conversion', 'Industrial grade', 'Efficient', 'Scalable']
          },
          {
            id: 'ups-3p-3p',
            name: '3 Phase In – 3 Phase Out',
            description: 'Three-phase to three-phase UPS systems for large industrial operations',
            features: ['Three phase', 'High capacity', 'Enterprise grade', 'Redundancy options']
          }
        ]
      },
      {
        name: 'Other Power Solutions',
        products: [
          {
            id: 'industrial-inverter',
            name: 'Industrial Inverter',
            description: 'DC to AC conversion systems for industrial and renewable energy applications',
            features: ['DC to AC conversion', 'High power', 'Efficient', 'Solar integration']
          },
          {
            id: 'batteries',
            name: 'Batteries',
            description: 'High-capacity industrial batteries for backup power storage',
            features: ['High capacity', 'Long lifespan', 'Maintenance-free', 'Multiple configurations']
          }
        ]
      }
    ]
  },
  {
    id: 'protection-equipment',
    name: 'Protection Equipment',
    icon: '🛡️',
    description: 'Advanced electrical protection for system safety',
    subcategories: [
      {
        name: 'Protection Systems',
        products: [
          {
            id: 'phase-sequence-corrector',
            name: 'Phase Sequence Corrector',
            description: 'Corrects phase sequence to prevent equipment damage and ensure safe operation',
            features: ['Phase correction', 'Automatic detection', 'Safety feature', 'Equipment protection']
          }
        ]
      }
    ]
  }
]

function ProductCard({ product }: { product: typeof productHierarchy[0]['subcategories'][0]['products'][0] }) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition">
      <h4 className="text-lg font-semibold text-foreground mb-2">{product.name}</h4>
      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
      <div className="flex flex-wrap gap-2">
        {product.features.map((feature, idx) => (
          <span key={idx} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
            {feature}
          </span>
        ))}
      </div>
    </div>
  )
}

function CategorySection({ category }: { category: typeof productHierarchy[0] }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mb-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 hover:border-primary/50 transition group"
      >
        <span className="text-4xl">{category.icon}</span>
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition">{category.name}</h2>
          <p className="text-muted-foreground text-sm">{category.description}</p>
        </div>
        <ChevronDown 
          size={24} 
          className={`text-primary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="space-y-6 ml-4 pl-4 border-l-2 border-primary/20">
          {category.subcategories.map((subcat, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-foreground mb-4 text-primary/80">
                {subcat.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {subcat.products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = productHierarchy.filter(category => {
    const searchLower = searchTerm.toLowerCase()
    return (
      category.name.toLowerCase().includes(searchLower) ||
      category.description.toLowerCase().includes(searchLower) ||
      category.subcategories.some(subcat =>
        subcat.products.some(product =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
        )
      )
    )
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Industrial Electrical <span className="text-primary">Products</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive range of voltage stabilizers, transformers, electrical panels, power backup systems, and protection equipment for industrial applications
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search products, categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length > 0 ? (
            <div className="space-y-8">
              {filteredCategories.map(category => (
                <CategorySection key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No products found matching your search
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-primary font-semibold hover:text-primary/80 transition"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

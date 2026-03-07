'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const productCategories = [
  {
    name: 'Voltage Stabilizers',
    icon: '⚡',
    description: 'Reliable voltage regulation solutions',
    subcategories: [
      {
        name: 'Servo Controlled Stabilizers',
        items: [
          { name: 'Dimmer Type Oil Cooled', desc: 'Oil-cooled servo stabilizers for industrial applications' },
          { name: 'Dimmer Type Air Cooled', desc: 'Air-cooled servo stabilizers with efficient cooling' }
        ]
      }
    ]
  },
  {
    name: 'Transformers',
    icon: '🔄',
    description: 'Advanced power transformation solutions',
    subcategories: [
      {
        name: 'Transformer Types',
        items: [
          { name: 'Step Up Transformer', desc: 'Increases voltage for transmission and distribution' },
          { name: 'Step Down Transformer', desc: 'Reduces voltage for safe industrial use' },
          { name: 'Isolation Transformer', desc: 'Provides electrical isolation for safety' }
        ]
      }
    ]
  },
  {
    name: 'Electrical Panels',
    icon: '📊',
    description: 'Comprehensive panel solutions',
    subcategories: [
      {
        name: 'Panel Types',
        items: [
          { name: 'HT Panels', desc: 'High tension panels for power distribution' },
          { name: 'LT Panels', desc: 'Low tension panels for control and distribution' },
          { name: 'Power Factor Panels', desc: 'Improves power factor and reduces losses' },
          { name: 'Distribution Panels', desc: 'Central distribution hub for electrical systems' }
        ]
      }
    ]
  },
  {
    name: 'Power Backup',
    icon: '🔋',
    description: 'Uninterrupted power solutions',
    subcategories: [
      {
        name: 'Online UPS Systems',
        items: [
          { name: '1 Phase In – 1 Phase Out', desc: 'Single-phase backup systems' },
          { name: '1 Phase In – 3 Phase Out', desc: 'Converts single-phase input to three-phase output' },
          { name: '3 Phase In – 3 Phase Out', desc: 'Three-phase to three-phase UPS systems' }
        ]
      },
      {
        name: 'Other Power Solutions',
        items: [
          { name: 'Industrial Inverter', desc: 'DC to AC conversion for industrial use' },
          { name: 'Batteries', desc: 'High-capacity industrial batteries' }
        ]
      }
    ]
  },
  {
    name: 'Protection Equipment',
    icon: '🛡️',
    description: 'Advanced electrical protection',
    subcategories: [
      {
        name: 'Protection Systems',
        items: [
          { name: 'Phase Sequence Corrector', desc: 'Corrects phase sequence for safe operation' }
        ]
      }
    ]
  }
]

function CategoryCard({ category }: { category: typeof productCategories[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary/50 transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start justify-between hover:bg-muted/50 transition"
      >
        <div className="flex gap-4 flex-1 text-left">
          <div className="text-4xl flex-shrink-0">{category.icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
        </div>
        <ChevronDown 
          size={20} 
          className={`flex-shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-border bg-muted/30 p-6 space-y-4">
          {category.subcategories.map((subcat, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-medium text-foreground text-sm uppercase tracking-wide">{subcat.name}</h4>
              <div className="space-y-2 ml-4">
                {subcat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="p-3 bg-white rounded border border-border/50 hover:border-primary/30 transition">
                    <p className="font-medium text-foreground text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

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
              Comprehensive Industrial Electrical Products including voltage stabilizers, transformers, panels, power backup, and protection equipment
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

        {/* Products Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {productCategories.map((category, idx) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, ArrowRight } from 'lucide-react'

const allProducts = [
  {
    id: 1,
    name: 'Advanced Control Systems',
    category: 'Automation',
    description: 'Professional control and monitoring solutions for industrial processes with real-time analytics',
    price: 'Custom Quote',
    image: '🎛️',
    specs: ['Real-time monitoring', 'IoT Integration', 'Remote Access', 'Data Analytics']
  },
  {
    id: 2,
    name: 'Power Distribution Units',
    category: 'Power Systems',
    description: 'Industrial-grade power distribution and management equipment for reliable operations',
    price: 'Custom Quote',
    image: '⚡',
    specs: ['High Reliability', 'Load Balancing', 'Surge Protection', 'Smart Metering']
  },
  {
    id: 3,
    name: 'Manufacturing Equipment',
    category: 'Manufacturing',
    description: 'Precision machinery and production systems for diverse manufacturing applications',
    price: 'Custom Quote',
    image: '🏭',
    specs: ['High Precision', 'Automated Control', 'Quality Assurance', 'Customizable']
  },
  {
    id: 4,
    name: 'Energy Solutions',
    category: 'Energy',
    description: 'Renewable and conventional energy systems optimized for efficiency and sustainability',
    price: 'Custom Quote',
    image: '🔋',
    specs: ['High Efficiency', 'Eco-Friendly', 'Cost Savings', 'Scalable']
  },
  {
    id: 5,
    name: 'Monitoring Systems',
    category: 'Automation',
    description: 'Real-time monitoring and data analytics platforms for predictive maintenance',
    price: 'Custom Quote',
    image: '📊',
    specs: ['Predictive Analytics', 'Alerts & Notifications', 'Historical Data', 'Custom Dashboards']
  },
  {
    id: 6,
    name: 'Integration Services',
    category: 'Services',
    description: 'Custom integration solutions to seamlessly connect your existing equipment',
    price: 'Contact for Quote',
    image: '🔗',
    specs: ['System Integration', 'Custom Protocols', 'Legacy Support', 'Installation Support']
  },
  {
    id: 7,
    name: 'Maintenance Services',
    category: 'Services',
    description: 'Comprehensive preventive and corrective maintenance programs',
    price: 'Contact for Quote',
    image: '🔧',
    specs: ['24/7 Support', 'Spare Parts', 'Training', 'Performance Reports']
  },
  {
    id: 8,
    name: 'Consulting Services',
    category: 'Services',
    description: 'Expert consulting for industrial optimization and modernization',
    price: 'Contact for Quote',
    image: '💡',
    specs: ['Process Optimization', 'System Design', 'ROI Analysis', 'Implementation Plan']
  }
]

const categories = ['All', 'Automation', 'Power Systems', 'Manufacturing', 'Energy', 'Services']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Product Range</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive industrial solutions designed for performance, reliability, and innovation
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search products..."
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
          {/* Filters */}
          <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-4">
            <Filter size={20} className="text-muted-foreground flex-shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition font-medium ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group bg-white rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-7xl group-hover:scale-110 transition">
                    {product.image}
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary">
                        {product.category}
                      </span>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border flex justify-between items-center">
                      <span className="font-semibold text-primary">
                        {product.price}
                      </span>
                      <button className="text-sm font-medium text-primary hover:text-primary/80 transition">
                        Inquire
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No products found matching your search
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="text-primary font-semibold hover:text-primary/80 transition"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

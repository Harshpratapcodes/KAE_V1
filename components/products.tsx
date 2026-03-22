'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Product {
  id: string
  name: string
  categoryId: string
  description: string
  powerRating: string
  phaseType: string
}

interface Category {
  id: string
  name: string
}

const categoryColorMap: Record<string, string> = {
  'servo-stabilizers': 'from-blue-500',
  'transformers': 'from-emerald-500',
  'electric-panels': 'from-amber-500',
  'ups': 'from-red-500',
  'inverters': 'from-purple-500',
  'phase-correctors': 'from-cyan-500',
  'batteries': 'from-yellow-500',
}

const categoryIconMap: Record<string, string> = {
  'servo-stabilizers': '⚙️',
  'transformers': '🔄',
  'electric-panels': '⚡',
  'ups': '🔋',
  'inverters': '🔌',
  'phase-correctors': '🎛️',
  'batteries': '🔌',
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Record<string, Category>>({})
  const [loading, setLoading] = useState(true)
  const featuredProductIds = [
    'prod-1',
    'prod-4',
    'prod-3',
    'prod-2',
    'prod-5',
    'prod-6',
    'prod-7',
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories'),
        ])

        const productsResponse = await productsRes.json()
        const categoriesResponse = await categoriesRes.json()

        const productsData = productsResponse.data || productsResponse
        const categoriesData = categoriesResponse.data || categoriesResponse

        const productsList = Array.isArray(productsData) ? productsData : []
        const productMap = new Map(productsList.map((item: Product) => [item.id, item]))
        const featuredProducts = featuredProductIds
          .map((id) => productMap.get(id))
          .filter((item): item is Product => Boolean(item))
        setProducts(featuredProducts)
        
        const categoryMap: Record<string, Category> = {}
        if (Array.isArray(categoriesData)) {
          categoriesData.forEach((cat: Category) => {
            categoryMap[cat.id] = cat
          })
        }
        setCategories(categoryMap)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      </section>
    )
  }

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
              Comprehensive industrial power solutions for your business needs
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
          {products.map((product) => {
            const colorClass = categoryColorMap[product.categoryId] || 'from-primary'
            const icon = categoryIconMap[product.categoryId] || '🏭'
            const categoryName = categories[product.categoryId]?.name || 'Product'

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition"
              >
                <div className={`h-40 bg-gradient-to-br ${colorClass} to-background/20 flex items-center justify-center text-6xl group-hover:scale-110 transition`}>
                  {icon}
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {categoryName}
                    </span>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex gap-2 text-xs text-muted-foreground pt-2">
                    <span className="px-2 py-1 bg-muted rounded">{product.phaseType}</span>
                    <span className="px-2 py-1 bg-muted rounded">{product.powerRating}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

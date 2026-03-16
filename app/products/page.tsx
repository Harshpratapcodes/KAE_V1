'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import ProductFilter, { FilterValues } from '@/components/product-filter'
import MobileFilterDrawer from '@/components/mobile-filter-drawer'
import { Search } from 'lucide-react'

interface Product {
  id: string
  name: string
  categoryId: string
  subcategoryId?: string
  description: string
  price: string
  powerRating: string
  phaseType: 'Single' | 'Three'
  applicationType: string[]
}

interface Category {
  id: string
  name: string
  subcategories?: Category[]
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState<FilterValues>({
    categoryId: '',
    subcategoryId: '',
    phaseType: '',
    applicationType: [],
    powerRating: '',
    sortBy: 'popularity',
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/categories'),
      ])

      const productsData = await productsRes.json()
      const categoriesData = await categoriesRes.json()

      if (productsData.success) {
        setProducts(productsData.data)
      }
      if (categoriesData.success) {
        setCategories(categoriesData.data)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    return category?.name || 'Unknown'
  }

  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())

    // Category filter
    const matchesCategory = !filters.categoryId || product.categoryId === filters.categoryId

    // Subcategory filter
    const matchesSubcategory = !filters.subcategoryId || product.subcategoryId === filters.subcategoryId

    // Phase type filter
    const matchesPhase = !filters.phaseType || product.phaseType === filters.phaseType

    // Application type filter
    const matchesApplication =
      filters.applicationType.length === 0 ||
      filters.applicationType.some((app) => product.applicationType.includes(app))

    // Power rating filter
    const matchesPower = !filters.powerRating || product.powerRating === filters.powerRating

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSubcategory &&
      matchesPhase &&
      matchesApplication &&
      matchesPower
    )
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'newest':
        return b.id.localeCompare(a.id)
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price-asc':
        return (
          parseFloat(a.price.replace(/[^0-9]/g, '')) -
          parseFloat(b.price.replace(/[^0-9]/g, ''))
        )
      case 'price-desc':
        return (
          parseFloat(b.price.replace(/[^0-9]/g, '')) -
          parseFloat(a.price.replace(/[^0-9]/g, ''))
        )
      default:
        return 0
    }
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
              Industrial electrical solutions engineered for reliability, efficiency, and innovation
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
      {loading ? (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-muted-foreground">Loading products...</p>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Filters - Desktop Only */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="bg-white p-6 rounded-xl border border-border">
                    <h2 className="text-xl font-bold text-foreground mb-6">Filters</h2>
                    <ProductFilter categories={categories} onFilterChange={setFilters} />
                  </div>
                </div>
              </aside>

              {/* Mobile Filter Drawer */}
              <MobileFilterDrawer categories={categories} onFilterChange={setFilters} />

              {/* Products Grid */}
              <div className="lg:col-span-3 pb-20 lg:pb-0">
                {sortedProducts.length > 0 ? (
                  <>
                    <div className="mb-6 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {sortedProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
                          name={product.name}
                          categoryName={getCategoryName(product.categoryId)}
                          description={product.description}
                          price={product.price}
                          powerRating={product.powerRating}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-lg text-muted-foreground mb-4">
                      No products found matching your search and filters
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('')
                        setFilters({
                          categoryId: '',
                          subcategoryId: '',
                          phaseType: '',
                          applicationType: [],
                          powerRating: '',
                          sortBy: 'popularity',
                        })
                      }}
                      className="text-primary font-semibold hover:text-primary/80 transition"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

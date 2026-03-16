'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Share2, Download } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

interface Product {
  id: string
  name: string
  categoryId: string
  subcategoryId?: string
  description: string
  longDescription: string
  price: string
  powerRating: string
  phaseType: 'Single' | 'Three'
  applicationType: string[]
  features: string[]
  applications: string[]
  specifications: Record<string, string>
}

interface Category {
  id: string
  name: string
  subcategories?: Category[]
}

interface Props {
  productId: string
}

export default function ProductDetailContent({ productId }: Props) {
  const [product, setProduct] = useState<Product | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const router = useRouter()

  useEffect(() => {
    fetchData()
  }, [productId])

  const fetchData = async () => {
    try {
      const [productRes, categoriesRes] = await Promise.all([
        fetch(`/api/products/${productId}`),
        fetch('/api/categories'),
      ])

      const productData = await productRes.json()
      const categoriesData = await categoriesRes.json()

      if (productData.success) {
        setProduct(productData.data)
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

  const handleQuoteSubmit = () => {
    console.log('Quote request:', quoteFormData)
    alert('Thank you for your interest! Our team will contact you shortly.')
    setShowQuoteForm(false)
    setQuoteFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    })
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    return category?.name || 'Unknown'
  }

  const getSubcategoryName = (categoryId: string, subcategoryId?: string) => {
    if (!subcategoryId) return null
    const category = categories.find((c) => c.id === categoryId)
    const subcategory = category?.subcategories?.find((s) => s.id === subcategoryId)
    return subcategory?.name || null
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-40">
          <p className="text-lg text-muted-foreground">Loading product...</p>
        </div>
        <Footer />
      </main>
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex flex-col items-center justify-center py-40">
          <p className="text-lg text-muted-foreground mb-4">Product not found</p>
          <Link href="/products" className="text-primary hover:text-primary/80 font-semibold">
            Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </section>

      {/* Product Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="h-80 bg-white rounded-xl border border-border flex items-center justify-center text-8xl shadow-lg">
            ⚙️
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {getCategoryName(product.categoryId)}
              </span>
              {getSubcategoryName(product.categoryId, product.subcategoryId) && (
                <span className="text-sm text-muted-foreground">
                  / {getSubcategoryName(product.categoryId, product.subcategoryId)}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {product.name}
            </h1>

            <p className="text-lg text-muted-foreground">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                {product.powerRating}
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg text-sm font-medium">
                {product.phaseType} Phase
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowQuoteForm(true)}
                className="inline-block text-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Request Quote
              </button>
              <button className="inline-block text-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Product Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Key Features */}
              {product.features.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-border rounded-lg">
                        <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {Object.keys(product.specifications).length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Specifications</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-border">
                          <th className="text-left py-4 px-4 font-semibold text-foreground">Parameter</th>
                          <th className="text-left py-4 px-4 font-semibold text-foreground">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value], i) => (
                          <tr key={i} className="border-b border-border hover:bg-muted/50">
                            <td className="py-4 px-4 font-medium text-foreground">{key}</td>
                            <td className="py-4 px-4 text-muted-foreground">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Suitable For</h2>
                  <div className="flex flex-wrap gap-3">
                    {product.applications.map((app, i) => (
                      <div
                        key={i}
                        className="px-6 py-3 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Pricing Card */}
              <div className="sticky top-24 bg-white border border-border rounded-xl p-8 space-y-6 shadow-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Starting Price</p>
                  <div className="text-4xl font-bold text-primary mb-2">{product.price}</div>
                  <p className="text-xs text-muted-foreground">
                    Pricing varies based on configuration and requirements. Contact us for a custom quote.
                  </p>
                </div>

                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="block text-center w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  Get Custom Quote
                </button>

                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="font-semibold text-foreground">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition w-full">
                      <Download size={16} />
                      <span>Download Brochure</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition w-full">
                      <Download size={16} />
                      <span>Download Datasheet</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition w-full">
                      <Share2 size={16} />
                      <span>Share Product</span>
                    </button>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our sales team is ready to answer your questions about this product.
                  </p>
                  <div className="space-y-2">
                    <a href="mailto:sales@kae.com" className="block text-sm text-primary hover:text-primary/80 transition">
                      📧 sales@kae.com
                    </a>
                    <a href="tel:+1234567890" className="block text-sm text-primary hover:text-primary/80 transition">
                      📞 +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 w-full max-w-md space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Request a Quote</h2>
            <p className="text-muted-foreground">Fill in your details and we'll get back to you shortly.</p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={quoteFormData.name}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={quoteFormData.email}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, email: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={quoteFormData.phone}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Company Name"
                value={quoteFormData.company}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, company: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Additional Requirements"
                value={quoteFormData.message}
                onChange={(e) => setQuoteFormData({ ...quoteFormData, message: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowQuoteForm(false)}
                className="flex-1 px-4 py-2 border border-border rounded-lg font-medium text-foreground hover:bg-muted"
              >
                Cancel
              </button>
              <button
                onClick={handleQuoteSubmit}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

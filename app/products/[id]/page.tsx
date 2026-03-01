import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // In production, this would fetch the product from your database
  const product = {
    id: params.id,
    name: 'Advanced Control Systems',
    category: 'Automation',
    description: 'Professional control and monitoring solutions for industrial processes',
    price: 'Custom Quote',
    longDescription: 'Our Advanced Control Systems provide comprehensive solutions for managing complex industrial processes. Featuring real-time monitoring, predictive analytics, and IoT integration, these systems help optimize production efficiency while ensuring reliability and safety.',
    specs: [
      'Real-time monitoring and data acquisition',
      'IoT integration and cloud connectivity',
      'Remote access and mobile support',
      'Advanced data analytics and reporting',
      'Customizable dashboards and alerts',
      'Redundancy and fault tolerance',
      'Scalable architecture for growth',
      'Integration with legacy systems'
    ],
    benefits: [
      { title: 'Increased Efficiency', description: '40% average improvement in process efficiency' },
      { title: 'Reduced Downtime', description: '60% reduction in unplanned downtime' },
      { title: 'Better Decision Making', description: 'Real-time insights for informed decisions' },
      { title: 'Cost Savings', description: 'Significant reduction in operational costs' }
    ],
    industries: ['Manufacturing', 'Power Systems', 'Energy'],
    image: '🎛️'
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/products" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </section>

      {/* Product Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="h-80 bg-white rounded-xl border border-border flex items-center justify-center text-8xl">
            {product.image}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {product.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block text-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Request Quote
              </Link>
              <button className="inline-block text-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition">
                Download Specs
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
              {/* Specifications */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-border rounded-lg">
                      <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Suitable For</h2>
                <div className="flex flex-wrap gap-3">
                  {product.industries.map((industry, i) => (
                    <Link
                      key={i}
                      href={`/industries?industry=${industry}`}
                      className="px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition font-medium"
                    >
                      {industry}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Pricing Card */}
              <div className="sticky top-20 bg-white border border-border rounded-xl p-8 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Starting Price</p>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {product.price}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Pricing varies based on configuration and requirements
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="block text-center w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  Get Custom Quote
                </Link>

                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="font-semibold text-foreground">Need Help?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our sales team is ready to answer your questions about this product.
                  </p>
                  <div className="space-y-2">
                    <a href="mailto:sales@kae.com" className="block text-sm text-primary hover:text-primary/80 transition">
                      sales@kae.com
                    </a>
                    <a href="tel:+1234567890" className="block text-sm text-primary hover:text-primary/80 transition">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Link
                key={i}
                href="/products"
                className="bg-white rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition"
              >
                <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl">
                  ⚙️
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground hover:text-primary transition">Related Product {i}</h3>
                  <p className="text-sm text-muted-foreground">Complementary solution</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

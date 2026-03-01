import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Products from '@/components/products'
import Industries from '@/components/industries'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Products />
      <Industries />
      <CTA />
      <Footer />
    </main>
  )
}

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = {
    id: params.id,
    title: 'The Future of Industrial Automation',
    author: 'John Smith',
    date: '2024-03-15',
    category: 'Automation',
    image: '🤖',
    excerpt: 'Explore how AI and machine learning are revolutionizing industrial automation.',
    content: `
    <h2>Introduction</h2>
    <p>Industrial automation is entering a new era with advanced AI capabilities. Machine learning algorithms are now enabling predictive maintenance, process optimization, and intelligent decision-making in manufacturing environments.</p>
    
    <h2>Key Trends</h2>
    <p>Several major trends are shaping the future of industrial automation:</p>
    <ul>
      <li>AI-powered predictive maintenance reducing downtime</li>
      <li>IoT integration for real-time monitoring</li>
      <li>Cloud-based analytics and insights</li>
      <li>Autonomous systems and robotics</li>
      <li>Enhanced cybersecurity measures</li>
    </ul>
    
    <h2>Benefits for Industry</h2>
    <p>Organizations implementing these technologies are seeing significant improvements in efficiency, cost reduction, and product quality.</p>
    
    <h2>Conclusion</h2>
    <p>The future of industrial automation is bright, with endless possibilities for innovation and improvement.</p>
    `
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Featured Image */}
              <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center text-8xl border border-border">
                {post.image}
              </div>

              {/* Article Body */}
              <div className="prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-6">
                  Industrial automation is entering a new era with advanced AI capabilities. Machine learning algorithms are now enabling predictive maintenance, process optimization, and intelligent decision-making in manufacturing environments.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Trends</h2>
                <p className="text-muted-foreground mb-4">Several major trends are shaping the future of industrial automation:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex space-x-3">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">AI-powered predictive maintenance reducing downtime</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">IoT integration for real-time monitoring</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Cloud-based analytics and insights</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Autonomous systems and robotics</span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Enhanced cybersecurity measures</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Benefits for Industry</h2>
                <p className="text-muted-foreground mb-6">
                  Organizations implementing these technologies are seeing significant improvements in efficiency, cost reduction, and product quality. The ROI is often achieved within 18-24 months.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
                <p className="text-muted-foreground">
                  The future of industrial automation is bright, with endless possibilities for innovation and improvement. Companies that adopt these technologies early will gain significant competitive advantages.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Share */}
              <div className="bg-white border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-foreground flex items-center space-x-2">
                  <Share2 size={20} />
                  <span>Share Article</span>
                </h3>
                <div className="flex flex-col space-y-2">
                  <button className="text-left px-4 py-2 hover:bg-muted rounded-lg transition text-sm text-muted-foreground">
                    Share on LinkedIn
                  </button>
                  <button className="text-left px-4 py-2 hover:bg-muted rounded-lg transition text-sm text-muted-foreground">
                    Share on Twitter
                  </button>
                  <button className="text-left px-4 py-2 hover:bg-muted rounded-lg transition text-sm text-muted-foreground">
                    Copy Link
                  </button>
                </div>
              </div>

              {/* Author */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">About the Author</h3>
                <p className="text-sm text-muted-foreground">
                  {post.author} is an expert in industrial automation with over 15 years of experience in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Link key={i} href="/blog" className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl">
                  📖
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">Related Article {i}</h3>
                  <p className="text-xs text-muted-foreground">Related topic</p>
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

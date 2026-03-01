'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Industrial Automation',
    excerpt: 'Explore how AI and machine learning are revolutionizing industrial automation and predictive maintenance.',
    content: 'Industrial automation is entering a new era with advanced AI capabilities...',
    author: 'John Smith',
    date: '2024-03-15',
    category: 'Automation',
    image: '🤖'
  },
  {
    id: 2,
    title: 'Sustainability in Power Systems',
    excerpt: 'How modern power distribution systems are transitioning to renewable energy sources.',
    content: 'The energy sector is undergoing a massive transformation...',
    author: 'Sarah Johnson',
    date: '2024-03-12',
    category: 'Energy',
    image: '⚡'
  },
  {
    id: 3,
    title: 'Maximizing Manufacturing Efficiency',
    excerpt: 'Best practices for optimizing production lines and reducing downtime.',
    content: 'Manufacturers are constantly seeking ways to improve efficiency...',
    author: 'Michael Chen',
    date: '2024-03-10',
    category: 'Manufacturing',
    image: '🏭'
  },
  {
    id: 4,
    title: 'IoT Integration in Industrial Equipment',
    excerpt: 'Real-time monitoring and data analytics for better decision making.',
    content: 'The integration of IoT devices in industrial equipment...',
    author: 'Emma Davis',
    date: '2024-03-08',
    category: 'Technology',
    image: '🌐'
  },
  {
    id: 5,
    title: 'Predictive Maintenance: Save Time and Money',
    excerpt: 'How predictive maintenance reduces unexpected downtime and extends equipment life.',
    content: 'Predictive maintenance is transforming how companies manage their assets...',
    author: 'David Wilson',
    date: '2024-03-05',
    category: 'Maintenance',
    image: '🔧'
  },
  {
    id: 6,
    title: 'Cybersecurity in Industrial Systems',
    excerpt: 'Protecting critical infrastructure from evolving cyber threats.',
    content: 'As industrial systems become more connected, security becomes paramount...',
    author: 'Lisa Anderson',
    date: '2024-03-01',
    category: 'Security',
    image: '🔒'
  }
]

const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
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
              Industry <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay updated with the latest trends, innovations, and best practices in industrial technology
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex items-center space-x-2 mb-12 overflow-x-auto pb-4">
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

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition"
                >
                  {/* Featured Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition">
                    {post.image}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </span>
                      <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No articles found matching your search
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Stay Updated
          </h2>
          <p className="text-muted-foreground">
            Subscribe to our newsletter for the latest industrial insights and updates.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

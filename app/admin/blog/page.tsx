'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Edit2, Trash2, LogOut, Eye } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const sampleBlogPosts = [
  {
    id: 1,
    title: 'Power Stabilization in Hospitals: A Complete Guide',
    slug: 'power-stabilization-hospitals',
    category: 'Healthcare',
    author: 'Dr. Sharma',
    date: 'Jan 15, 2024',
    status: 'Published',
    views: 1245,
  },
  {
    id: 2,
    title: 'How Solar Panels Can Reduce Manufacturing Costs',
    slug: 'solar-panels-manufacturing',
    category: 'Energy',
    author: 'Rajesh K.',
    date: 'Jan 12, 2024',
    status: 'Published',
    views: 892,
  },
  {
    id: 3,
    title: 'UPS System Maintenance: Best Practices',
    slug: 'ups-maintenance-guide',
    category: 'Maintenance',
    author: 'Priya S.',
    date: 'Jan 10, 2024',
    status: 'Draft',
    views: 0,
  },
  {
    id: 4,
    title: 'Data Center Power Requirements and Solutions',
    slug: 'datacenter-power-solutions',
    category: 'Technology',
    author: 'Amit P.',
    date: 'Jan 8, 2024',
    status: 'Published',
    views: 654,
  },
]

export default function BlogManagement() {
  const [posts, setPosts] = useState(sampleBlogPosts)
  const [selectedPost, setSelectedPost] = useState<typeof sampleBlogPosts[0] | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setPosts(posts.filter(p => p.id !== id))
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
              <p className="text-sm text-gray-600">Create and manage blog articles</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Actions */}
          <Button
            onClick={() => setShowAddForm(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Write New Article
          </Button>

          {/* Blog Posts Table */}
          <Card>
            <CardHeader>
              <CardTitle>Blog Articles</CardTitle>
              <CardDescription>
                {posts.length} article{posts.length !== 1 ? 's' : ''} total
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Author</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Views</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">{post.title}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{post.category}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{post.author}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{post.date}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {post.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{post.views.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm space-x-2 flex">
                          {post.status === 'Published' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-1"
                            >
                              <Eye className="w-4 h-4" />
                              View
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex items-center gap-1"
                            onClick={() => setSelectedPost(post)}
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex items-center gap-1"
                            onClick={() => handleDelete(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Add/Edit Modal */}
      {(showAddForm || selectedPost) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>{selectedPost ? 'Edit Article' : 'Write New Article'}</CardTitle>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-4 right-4"
                onClick={() => {
                  setShowAddForm(false)
                  setSelectedPost(null)
                }}
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <Input placeholder="Article title" defaultValue={selectedPost?.title} />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <Input placeholder="Category" defaultValue={selectedPost?.category} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <textarea
                    placeholder="Write your article content here..."
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-600"
                    rows={8}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description (SEO)</label>
                  <textarea
                    placeholder="Brief description for search engines..."
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-600"
                    rows={2}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setShowAddForm(false)
                      setSelectedPost(null)
                    }}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => {
                      setShowAddForm(false)
                      setSelectedPost(null)
                    }}
                  >
                    Save Article
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

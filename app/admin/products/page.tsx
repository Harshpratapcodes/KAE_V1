'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Edit2, Trash2, Search, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const sampleProducts = [
  {
    id: 1,
    name: 'Servo Stabilizer 50KVA',
    category: 'Servo Stabilizer',
    price: '₹185,000',
    rating: '4.8',
    reviews: 45,
  },
  {
    id: 2,
    name: 'UPS 10KVA 3-Phase',
    category: 'UPS',
    price: '₹95,000',
    rating: '4.6',
    reviews: 32,
  },
  {
    id: 3,
    name: 'Solar Panel 5KW System',
    category: 'Solar Panel',
    price: '₹450,000',
    rating: '4.9',
    reviews: 28,
  },
  {
    id: 4,
    name: 'Battery Backup 24V 200Ah',
    category: 'Battery',
    price: '₹120,000',
    rating: '4.7',
    reviews: 19,
  },
  {
    id: 5,
    name: 'Electric Panel 3-Phase 100A',
    category: 'Electric Panel',
    price: '₹45,000',
    rating: '4.5',
    reviews: 15,
  },
]

export default function ProductsManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState(sampleProducts)
  const [selectedProduct, setSelectedProduct] = useState<typeof sampleProducts[0] | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id))
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
              <h1 className="text-2xl font-bold text-gray-900">Products</h1>
              <p className="text-sm text-gray-600">Manage your product catalog</p>
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
          {/* Actions Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2 whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </Button>
          </div>

          {/* Products Table */}
          <Card>
            <CardHeader>
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Product Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Rating</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Reviews</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">{product.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{product.category}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 font-medium">{product.price}</td>
                        <td className="py-3 px-4 text-sm">
                          <span className="text-yellow-600 font-medium">★ {product.rating}</span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{product.reviews} reviews</td>
                        <td className="py-3 px-4 text-sm space-x-2 flex">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex items-center gap-1"
                            onClick={() => setSelectedProduct(product)}
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex items-center gap-1"
                            onClick={() => handleDelete(product.id)}
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

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-gray-600 mb-4">No products found matching your search</p>
                <Button
                  onClick={() => setShowAddForm(true)}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Add First Product
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Add/Edit Modal */}
      {(showAddForm || selectedProduct) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>{selectedProduct ? 'Edit Product' : 'Add New Product'}</CardTitle>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-4 right-4"
                onClick={() => {
                  setShowAddForm(false)
                  setSelectedProduct(null)
                }}
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <Input placeholder="Enter product name" defaultValue={selectedProduct?.name} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <Input placeholder="Enter category" defaultValue={selectedProduct?.category} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <Input placeholder="Enter price" defaultValue={selectedProduct?.price} />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setShowAddForm(false)
                      setSelectedProduct(null)
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
                      setSelectedProduct(null)
                    }}
                  >
                    Save
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

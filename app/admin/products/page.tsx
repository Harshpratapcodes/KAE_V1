'use client'

import { useState, useEffect } from 'react'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Edit2, Trash2, Search, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

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
  features: string[]
  applications: string[]
  specifications: Record<string, string>
}

interface Category {
  id: string
  name: string
  subcategories?: Category[]
}

export default function ProductsManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    categoryId: '',
    subcategoryId: '',
    description: '',
    price: '',
    powerRating: '',
    phaseType: 'Three' as const,
    applicationType: [] as string[],
    features: '',
    applications: '',
    specifications: '',
  })
  const router = useRouter()

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setFormData({
        ...formData,
        applicationType: [...formData.applicationType, value],
      })
    } else {
      setFormData({
        ...formData,
        applicationType: formData.applicationType.filter((item) => item !== value),
      })
    }
  }

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.categoryId) {
      alert('Product name and category are required')
      return
    }

    if (selectedProduct) {
      // Update
      setProducts(
        products.map((p) =>
          p.id === selectedProduct.id
            ? {
                ...p,
                name: formData.name,
                categoryId: formData.categoryId,
                subcategoryId: formData.subcategoryId || undefined,
                description: formData.description,
                price: formData.price,
                powerRating: formData.powerRating,
                phaseType: formData.phaseType,
                applicationType: formData.applicationType,
                features: formData.features.split('\n').filter((f) => f.trim()),
                applications: formData.applications.split('\n').filter((a) => a.trim()),
              }
            : p
        )
      )
    } else {
      // Add new
      const newProduct: Product = {
        id: `prod-${Date.now()}`,
        name: formData.name,
        categoryId: formData.categoryId,
        subcategoryId: formData.subcategoryId || undefined,
        description: formData.description,
        price: formData.price,
        powerRating: formData.powerRating,
        phaseType: formData.phaseType,
        applicationType: formData.applicationType,
        features: formData.features.split('\n').filter((f) => f.trim()),
        applications: formData.applications.split('\n').filter((a) => a.trim()),
        specifications: {},
      }

      setProducts([...products, newProduct])
    }

    resetForm()
  }

  const resetForm = () => {
    setShowAddForm(false)
    setSelectedProduct(null)
    setFormData({
      name: '',
      categoryId: '',
      subcategoryId: '',
      description: '',
      price: '',
      powerRating: '',
      phaseType: 'Three',
      applicationType: [],
      features: '',
      applications: '',
      specifications: '',
    })
  }

  const handleEdit = (product: Product) => {
    setSelectedProduct(product)
    setFormData({
      name: product.name,
      categoryId: product.categoryId,
      subcategoryId: product.subcategoryId || '',
      description: product.description,
      price: product.price,
      powerRating: product.powerRating,
      phaseType: product.phaseType,
      applicationType: product.applicationType,
      features: product.features.join('\n'),
      applications: product.applications.join('\n'),
      specifications: '',
    })
    setShowAddForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLogout = () => {
    router.push('/')
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    return category?.name || categoryId
  }

  const getSubcategoryName = (categoryId: string, subcategoryId?: string) => {
    if (!subcategoryId) return ''
    const category = categories.find((c) => c.id === categoryId)
    const subcategory = category?.subcategories?.find((s) => s.id === subcategoryId)
    return subcategory?.name || subcategoryId
  }

  const applicationTypeOptions = [
    'Manufacturing',
    'Power Systems',
    'Industrial',
    'Commercial',
    'Hospitals',
    'Data Centers',
    'Energy',
  ]

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </main>
      </div>
    )
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
              onClick={() => {
                resetForm()
                setShowAddForm(true)
              }}
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
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Power Rating</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Phase Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">{product.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          <div>{getCategoryName(product.categoryId)}</div>
                          {product.subcategoryId && (
                            <div className="text-xs text-gray-500">
                              └ {getSubcategoryName(product.categoryId, product.subcategoryId)}
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{product.powerRating}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{product.phaseType} Phase</td>
                        <td className="py-3 px-4 text-sm text-gray-900 font-medium">{product.price}</td>
                        <td className="py-3 px-4 text-sm space-x-2 flex">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex items-center gap-1"
                            onClick={() => handleEdit(product)}
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

              {filteredProducts.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">No products found matching your search</p>
                  <Button
                    onClick={() => {
                      resetForm()
                      setShowAddForm(true)
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Add First Product
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Add/Edit Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>{selectedProduct ? 'Edit Product' : 'Add New Product'}</CardTitle>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-4 right-4"
                onClick={resetForm}
              >
                ✕
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
                    <Input
                      name="name"
                      placeholder="Enter product name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                    <Input
                      name="price"
                      placeholder="₹ 0"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select
                      name="categoryId"
                      value={formData.categoryId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subcategory</label>
                    <select
                      name="subcategoryId"
                      value={formData.subcategoryId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      disabled={!formData.categoryId}
                    >
                      <option value="">None</option>
                      {categories
                        .find((c) => c.id === formData.categoryId)
                        ?.subcategories?.map((subcat) => (
                          <option key={subcat.id} value={subcat.id}>
                            {subcat.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Power Rating *</label>
                    <Input
                      name="powerRating"
                      placeholder="50KVA, 10KW, etc."
                      value={formData.powerRating}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phase Type</label>
                    <select
                      name="phaseType"
                      value={formData.phaseType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="Single">Single Phase</option>
                      <option value="Three">Three Phase</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Types</label>
                    <div className="border border-gray-300 rounded-md p-3 max-h-32 overflow-y-auto">
                      {applicationTypeOptions.map((option) => (
                        <label key={option} className="flex items-center gap-2 mb-2">
                          <input
                            type="checkbox"
                            checked={formData.applicationType.includes(option)}
                            onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                            className="w-4 h-4"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    placeholder="Enter product description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Features (one per line)</label>
                  <textarea
                    name="features"
                    placeholder="Enter features separated by new lines"
                    value={formData.features}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Applications (one per line)</label>
                  <textarea
                    name="applications"
                    placeholder="Enter applications separated by new lines"
                    value={formData.applications}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    rows={3}
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={resetForm}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={handleSubmit}
                  >
                    Save Product
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

'use client'

import { useState, useEffect } from 'react'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Plus, Edit2, Trash2, Search, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Category {
  id: string
  name: string
  description: string
  slug: string
  parentCategoryId?: string
  displayOrder: number
  isSubcategory: boolean
}

interface CategoryWithSubcats extends Category {
  subcategories?: Category[]
}

export default function CategoriesManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState<CategoryWithSubcats[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    parentCategoryId: '',
    slug: '',
    displayOrder: 0,
  })
  const router = useRouter()

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories')
      const data = await response.json()
      if (data.success) {
        setCategories(data.data)
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'displayOrder') {
      setFormData({ ...formData, [name]: parseInt(value) })
    } else if (name === 'slug') {
      setFormData({ ...formData, [name]: value.toLowerCase().replace(/\s+/g, '-') })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleAutoSlug = () => {
    const slug = formData.name.toLowerCase().replace(/\s+/g, '-')
    setFormData({ ...formData, slug })
  }

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert('Category name is required')
      return
    }
    
    if (selectedCategory) {
      // Update
      setCategories(
        categories.map((cat) =>
          cat.id === selectedCategory.id
            ? {
                ...cat,
                name: formData.name,
                description: formData.description,
                slug: formData.slug,
                parentCategoryId: formData.parentCategoryId || undefined,
                displayOrder: formData.displayOrder,
              }
            : cat
        )
      )
    } else {
      // Add new
      const newCategory: Category = {
        id: `cat-${Date.now()}`,
        name: formData.name,
        description: formData.description,
        slug: formData.slug,
        parentCategoryId: formData.parentCategoryId || undefined,
        displayOrder: formData.displayOrder,
        isSubcategory: !!formData.parentCategoryId,
      }

      if (formData.parentCategoryId) {
        // Add as subcategory
        setCategories(
          categories.map((cat) =>
            cat.id === formData.parentCategoryId
              ? {
                  ...cat,
                  subcategories: [...(cat.subcategories || []), newCategory],
                }
              : cat
          )
        )
      } else {
        // Add as main category
        setCategories([...categories, { ...newCategory, subcategories: [] }])
      }
    }

    resetForm()
  }

  const resetForm = () => {
    setShowAddForm(false)
    setSelectedCategory(null)
    setFormData({
      name: '',
      description: '',
      parentCategoryId: '',
      slug: '',
      displayOrder: 0,
    })
  }

  const handleEdit = (category: Category) => {
    setSelectedCategory(category)
    setFormData({
      name: category.name,
      description: category.description,
      parentCategoryId: category.parentCategoryId || '',
      slug: category.slug,
      displayOrder: category.displayOrder,
    })
    setShowAddForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter((c) => c.id !== id))
    }
  }

  const filteredCategories = categories.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLogout = () => {
    router.push('/')
  }

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
              <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
              <p className="text-sm text-gray-600">Manage product categories and subcategories</p>
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
                placeholder="Search categories..."
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
              Add Category
            </Button>
          </div>

          {/* Categories List */}
          <Card>
            <CardHeader>
              <CardTitle>Category Structure</CardTitle>
              <CardDescription>
                {filteredCategories.length} categor{filteredCategories.length !== 1 ? 'ies' : 'y'} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredCategories.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">No categories found</p>
                  <Button
                    onClick={() => {
                      resetForm()
                      setShowAddForm(true)
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Create First Category
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredCategories.map((category) => (
                    <div key={category.id} className="border border-gray-200 rounded-lg">
                      {/* Main Category */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{category.name}</h3>
                          <p className="text-sm text-gray-600">{category.description}</p>
                          <p className="text-xs text-gray-500 mt-1">Slug: {category.slug}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex items-center gap-1"
                            onClick={() => handleEdit(category)}
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="flex items-center gap-1"
                            onClick={() => handleDelete(category.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </Button>
                        </div>
                      </div>

                      {/* Subcategories */}
                      {category.subcategories && category.subcategories.length > 0 && (
                        <div className="bg-white border-t border-gray-200 divide-y divide-gray-200">
                          {category.subcategories.map((subcat) => (
                            <div key={subcat.id} className="flex items-center justify-between p-4 pl-8 hover:bg-gray-50 transition">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-gray-400">└</span>
                                  <h4 className="font-medium text-gray-900">{subcat.name}</h4>
                                </div>
                                <p className="text-sm text-gray-600 ml-6">{subcat.description}</p>
                                <p className="text-xs text-gray-500 ml-6">Slug: {subcat.slug}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="flex items-center gap-1"
                                  onClick={() => handleEdit(subcat)}
                                >
                                  <Edit2 className="w-4 h-4" />
                                  Edit
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  className="flex items-center gap-1"
                                  onClick={() => handleDelete(subcat.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Add/Edit Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>{selectedCategory ? 'Edit Category' : 'Add New Category'}</CardTitle>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category Name *</label>
                  <Input
                    name="name"
                    placeholder="Enter category name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleAutoSlug}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    placeholder="Enter category description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Parent Category (for subcategories)</label>
                  <select
                    name="parentCategoryId"
                    value={formData.parentCategoryId}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="">None - This is a main category</option>
                    {categories
                      .filter((c) => !c.parentCategoryId && c.id !== selectedCategory?.id)
                      .map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug (auto-generated)</label>
                  <Input
                    name="slug"
                    placeholder="category-slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">Auto-generates from name on blur</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                  <Input
                    name="displayOrder"
                    type="number"
                    placeholder="0"
                    value={formData.displayOrder}
                    onChange={handleInputChange}
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
                    Save Category
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

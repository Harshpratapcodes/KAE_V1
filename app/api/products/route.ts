import { NextRequest, NextResponse } from 'next/server'
import { products, categories } from '@/lib/mock-data'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search')?.toLowerCase()
    const categoryId = searchParams.get('categoryId')
    const subcategoryId = searchParams.get('subcategoryId')
    const phaseType = searchParams.get('phaseType')
    const applicationType = searchParams.get('applicationType')
    const powerRating = searchParams.get('powerRating')

    let filtered = [...products]

    // Filter by search term
    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search) ||
          p.longDescription.toLowerCase().includes(search)
      )
    }

    // Filter by category
    if (categoryId) {
      // Include main category and all its subcategories
      const mainCat = categories.find((c) => c.id === categoryId)
      const subcats = categories.filter((c) => c.parentCategoryId === categoryId)
      const validCategoryIds = [categoryId, ...subcats.map((s) => s.id)]

      filtered = filtered.filter(
        (p) => validCategoryIds.includes(p.categoryId) || validCategoryIds.includes(p.subcategoryId!)
      )
    }

    // Filter by specific subcategory
    if (subcategoryId) {
      filtered = filtered.filter((p) => p.subcategoryId === subcategoryId)
    }

    // Filter by phase type
    if (phaseType) {
      filtered = filtered.filter((p) => p.phaseType === phaseType)
    }

    // Filter by application type
    if (applicationType) {
      filtered = filtered.filter((p) => p.applicationType.includes(applicationType))
    }

    // Filter by power rating
    if (powerRating) {
      filtered = filtered.filter((p) => p.powerRating === powerRating)
    }

    return NextResponse.json({
      success: true,
      data: filtered,
      count: filtered.length,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

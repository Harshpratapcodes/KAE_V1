import { NextRequest, NextResponse } from 'next/server'
import { categories } from '@/lib/mock-data'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const includeSubcategories = searchParams.get('includeSubcategories') !== 'false'

    let result = [...categories]

    if (!includeSubcategories) {
      result = result.filter((c) => !c.isSubcategory)
    }

    // Organize categories with their subcategories
    const mainCategories = result.filter((c) => !c.parentCategoryId)
    const categoriesWithSubcats = mainCategories.map((mainCat) => ({
      ...mainCat,
      subcategories: result.filter((c) => c.parentCategoryId === mainCat.id),
    }))

    return NextResponse.json({
      success: true,
      data: categoriesWithSubcats,
      count: categoriesWithSubcats.length,
    })
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    )
  }
}

'use client'

import { useState } from 'react'
import { X, Filter } from 'lucide-react'
import ProductFilter, { FilterValues } from './product-filter'

interface Category {
  id: string
  name: string
  subcategories?: Category[]
}

interface MobileFilterDrawerProps {
  categories: Category[]
  onFilterChange: (filters: FilterValues) => void
}

export default function MobileFilterDrawer({
  categories,
  onFilterChange,
}: MobileFilterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Filter Button - Mobile Only */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition"
      >
        <Filter size={20} />
        <span className="font-medium">Filters</span>
      </button>

      {/* Filter Drawer */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl flex flex-col lg:hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">Filters</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <ProductFilter
                categories={categories}
                onFilterChange={(filters) => {
                  onFilterChange(filters)
                  setIsOpen(false)
                }}
              />
            </div>

            {/* Footer */}
            <div className="border-t border-border p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Done
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

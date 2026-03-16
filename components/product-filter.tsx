'use client'

import { useState } from 'react'
import { Filter, ChevronDown } from 'lucide-react'

interface Category {
  id: string
  name: string
  subcategories?: Category[]
}

interface ProductFilterProps {
  categories: Category[]
  onFilterChange: (filters: FilterValues) => void
}

export interface FilterValues {
  categoryId: string
  subcategoryId: string
  phaseType: string
  applicationType: string[]
  powerRating: string
  sortBy: string
}

export default function ProductFilter({ categories, onFilterChange }: ProductFilterProps) {
  const [filters, setFilters] = useState<FilterValues>({
    categoryId: '',
    subcategoryId: '',
    phaseType: '',
    applicationType: [],
    powerRating: '',
    sortBy: 'popularity',
  })

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    phase: false,
    application: false,
    power: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const handleFilterChange = (filterType: string, value: string | string[]) => {
    let updatedFilters = { ...filters }

    switch (filterType) {
      case 'categoryId':
        updatedFilters.categoryId = value as string
        updatedFilters.subcategoryId = '' // Reset subcategory
        break
      case 'subcategoryId':
        updatedFilters.subcategoryId = value as string
        break
      case 'phaseType':
        updatedFilters.phaseType = value as string
        break
      case 'applicationType':
        const appTypes = value as string[]
        updatedFilters.applicationType = appTypes
        break
      case 'powerRating':
        updatedFilters.powerRating = value as string
        break
      case 'sortBy':
        updatedFilters.sortBy = value as string
        break
    }

    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleApplicationTypeToggle = (appType: string) => {
    const updated = filters.applicationType.includes(appType)
      ? filters.applicationType.filter((t) => t !== appType)
      : [...filters.applicationType, appType]
    handleFilterChange('applicationType', updated)
  }

  const clearFilters = () => {
    const clearedFilters: FilterValues = {
      categoryId: '',
      subcategoryId: '',
      phaseType: '',
      applicationType: [],
      powerRating: '',
      sortBy: 'popularity',
    }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  const applicationTypes = [
    'Manufacturing',
    'Power Systems',
    'Industrial',
    'Commercial',
    'Hospitals',
    'Data Centers',
    'Energy',
  ]

  const powerRatings = ['5KW', '10KVA', '30KVA', '50KVA', '100KVA', '100A', '200Ah']

  const hasActiveFilters =
    filters.categoryId ||
    filters.subcategoryId ||
    filters.phaseType ||
    filters.applicationType.length > 0 ||
    filters.powerRating

  return (
    <div className="space-y-6">
      {/* Sorting */}
      <div>
        <label className="text-sm font-semibold text-foreground block mb-3">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="popularity">Popularity</option>
          <option value="newest">Newest First</option>
          <option value="name">Product Name (A-Z)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>

      <div className="border-t border-border pt-4">
        {/* Categories */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('category')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="text-sm font-semibold text-foreground">Category</span>
            <ChevronDown
              size={16}
              className={`transition ${expandedSections.category ? 'rotate-180' : ''}`}
            />
          </button>
          {expandedSections.category && (
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categoryId === ''}
                  onChange={() => handleFilterChange('categoryId', '')}
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-sm text-muted-foreground">All Categories</span>
              </label>
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.categoryId === cat.id}
                    onChange={() => handleFilterChange('categoryId', cat.id)}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">{cat.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Subcategories */}
        {filters.categoryId && (
          <div className="mb-6">
            <button
              onClick={() => toggleSection('subcategory')}
              className="flex items-center justify-between w-full mb-3"
            >
              <span className="text-sm font-semibold text-foreground">Subcategory</span>
              <ChevronDown
                size={16}
                className={`transition ${expandedSections['subcategory'] ? 'rotate-180' : ''}`}
              />
            </button>
            {expandedSections['subcategory'] && (
              <div className="space-y-2">
                {categories
                  .find((c) => c.id === filters.categoryId)
                  ?.subcategories?.map((subcat) => (
                    <label key={subcat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.subcategoryId === subcat.id}
                        onChange={() => handleFilterChange('subcategoryId', subcat.id)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">{subcat.name}</span>
                    </label>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Phase Type */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('phase')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="text-sm font-semibold text-foreground">Phase Type</span>
            <ChevronDown
              size={16}
              className={`transition ${expandedSections.phase ? 'rotate-180' : ''}`}
            />
          </button>
          {expandedSections.phase && (
            <div className="space-y-2">
              {['Single', 'Three'].map((phase) => (
                <label key={phase} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.phaseType === phase}
                    onChange={() => handleFilterChange('phaseType', filters.phaseType === phase ? '' : phase)}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">{phase} Phase</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Application Type */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('application')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="text-sm font-semibold text-foreground">Application</span>
            <ChevronDown
              size={16}
              className={`transition ${expandedSections.application ? 'rotate-180' : ''}`}
            />
          </button>
          {expandedSections.application && (
            <div className="space-y-2">
              {applicationTypes.map((appType) => (
                <label key={appType} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.applicationType.includes(appType)}
                    onChange={() => handleApplicationTypeToggle(appType)}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">{appType}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Power Rating */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('power')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="text-sm font-semibold text-foreground">Power Rating</span>
            <ChevronDown
              size={16}
              className={`transition ${expandedSections.power ? 'rotate-180' : ''}`}
            />
          </button>
          {expandedSections.power && (
            <div className="space-y-2">
              {powerRatings.map((rating) => (
                <label key={rating} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.powerRating === rating}
                    onChange={() => handleFilterChange('powerRating', filters.powerRating === rating ? '' : rating)}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">{rating}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/5 transition"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )
}

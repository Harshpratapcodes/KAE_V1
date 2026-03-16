import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface ProductBreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function ProductBreadcrumb({ items }: ProductBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <Link
            href={item.href}
            className={`hover:text-primary transition ${
              index === items.length - 1
                ? 'text-muted-foreground cursor-default'
                : 'text-primary hover:underline'
            }`}
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <ChevronRight size={16} className="text-muted-foreground" />
          )}
        </div>
      ))}
    </nav>
  )
}

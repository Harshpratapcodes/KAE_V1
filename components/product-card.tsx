import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  categoryName: string
  description: string
  price: string
  powerRating: string
  image?: string
}

export default function ProductCard({
  id,
  name,
  categoryName,
  description,
  price,
  powerRating,
  image = '⚙️',
}: ProductCardProps) {
  const isImageUrl = image && image.startsWith('/');
  
  return (
    <Link
      href={`/products/${id}`}
      className="group bg-white rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition"
    >
      <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition relative">
        {isImageUrl ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span className="text-6xl">{image}</span>
        )}
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {categoryName}
          </span>
          <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition mb-2">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
            {powerRating}
          </span>
        </div>
        <div className="pt-4 border-t border-border flex justify-between items-center">
          <span className="font-semibold text-primary">
            {price}
          </span>
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  )
}

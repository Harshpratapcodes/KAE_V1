import ProductCard from './product-card'

interface Product {
  id: string
  name: string
  categoryId: string
  description: string
  price: string
  powerRating: string
  images?: Array<{
    imageUrl: string
    altText: string
  }>
}

interface ProductGridProps {
  products: Product[]
  categoryNames: Record<string, string>
}

export default function ProductGrid({ products, categoryNames }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground mb-4">No products found</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          categoryName={categoryNames[product.categoryId] || 'Unknown'}
          description={product.description}
          price={product.price}
          powerRating={product.powerRating}
          image={product.images?.[0]?.imageUrl}
        />
      ))}
    </div>
  )
}

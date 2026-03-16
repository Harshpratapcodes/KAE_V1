import { Suspense } from 'react'
import ProductDetailContent from '@/components/product-detail-content'

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductDetailContent productId={id} />
    </Suspense>
  )
}

import ProductCard from './ProductCard'
import type { Product } from '../data/products'

type ProductListProps = {
  title: string
  items: Product[]
  onAddToCart: () => void
}

export default function ProductList({ title, items, onAddToCart }: ProductListProps) {
  return (
    <section className="container products-section" id="products">
      <div className="section-heading">
        <div>
          <p className="section-kicker">GỢI Ý DÀNH CHO BẠN</p>
          <h2>{title}</h2>
        </div>
        <span className="product-count">{items.length} sản phẩm</span>
      </div>
      {items.length > 0 ? (
        <div className="product-grid">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <p className="empty-products">Chưa có sản phẩm trong danh mục này.</p>
      )}
    </section>
  )
}

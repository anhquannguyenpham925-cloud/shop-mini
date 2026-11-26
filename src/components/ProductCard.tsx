import type { Product } from '../data/products'
import { formatPrice } from '../utils/format'

type ProductCardProps = {
  product: Product
  onAddToCart: () => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const isOutOfStock = product.stock === 0

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className={`stock-label${isOutOfStock ? ' stock-label-out' : ''}`}>
          {isOutOfStock ? 'Hết hàng' : 'Shop yêu thích'}
        </span>
        <button
          className="favorite-button"
          type="button"
          aria-label={`Yêu thích ${product.name}`}
        >
          ♡
        </button>
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="product-meta">
          <p className="product-price">{formatPrice(product.price)}</p>
          {!isOutOfStock && <span className="product-stock">Còn {product.stock}</span>}
        </div>
        <button
          className="btn"
          type="button"
          disabled={isOutOfStock}
          onClick={onAddToCart}
        >
          {isOutOfStock ? 'Tạm hết hàng' : 'Thêm vào giỏ'}
          {!isOutOfStock && <span aria-hidden="true">＋</span>}
        </button>
      </div>
    </article>
  )
}

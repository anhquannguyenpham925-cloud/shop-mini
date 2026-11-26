import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import { products } from './data/products'
import { filterProducts, getCategories } from './utils/product'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')
  const [cartCount, setCartCount] = useState(0)
  const categories = ['Tất cả', ...getCategories(products)]
  const visibleProducts =
    selectedCategory === 'Tất cả'
      ? products
      : filterProducts(products, { category: selectedCategory })
  const cheapProducts = filterProducts(products, {
    maxPrice: 300000,
    sort: 'asc',
  })
  const electronics = filterProducts(products, { category: 'Điện tử' })
  const lowStockProducts = products.filter(
    (product) => product.stock >= 1 && product.stock <= 5,
  )

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Banner />
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductList
          title={selectedCategory === 'Tất cả' ? 'Sản phẩm nổi bật' : selectedCategory}
          items={visibleProducts}
          onAddToCart={() => setCartCount((count) => count + 1)}
        />
        <ProductList
          title="Giá dưới 300.000 đ"
          items={cheapProducts}
          onAddToCart={() => setCartCount((count) => count + 1)}
        />
        <ProductList
          title="Đồ điện tử"
          items={electronics}
          onAddToCart={() => setCartCount((count) => count + 1)}
        />
        <ProductList
          title="Sản phẩm sắp hết hàng"
          items={lowStockProducts}
          onAddToCart={() => setCartCount((count) => count + 1)}
        />
      </main>
      <Footer />
    </>
  )
}

export default App

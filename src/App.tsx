import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import { products } from './data/products'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')
  const [cartCount, setCartCount] = useState(0)
  const categories = ['Tất cả', ...new Set(products.map((product) => product.category))]
  const visibleProducts =
    selectedCategory === 'Tất cả'
      ? products
      : products.filter((product) => product.category === selectedCategory)

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
      </main>
      <Footer />
    </>
  )
}

export default App

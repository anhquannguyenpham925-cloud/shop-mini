type CategoryListProps = {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function CategoryList({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) {
  return (
    <section className="container category-section" aria-label="Danh mục sản phẩm">
      <div className="category-heading">
        <h2>Mua sắm theo danh mục</h2>
        <span>Chọn món hợp gu của bạn</span>
      </div>
      <div className="category-list">
        {categories.map((category, index) => (
          <button
            className={`category-chip${selectedCategory === category ? ' category-chip-active' : ''}`}
            key={category}
            type="button"
            aria-pressed={selectedCategory === category}
            onClick={() => onSelectCategory(category)}
          >
            {index === 0 ? <span aria-hidden="true">✳</span> : null}
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}

type HeaderProps = {
  cartCount: number
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="ShopMini - Trang chủ">
          shop<span>mini</span>
          <span className="logo-dot">.</span>
        </a>
        <nav className="nav" aria-label="Điều hướng chính">
          <a className="nav-active" href="#">
            Trang chủ
          </a>
          <a href="#products">Sản phẩm</a>
          <a href="#footer">Về chúng tôi</a>
        </nav>
        <a href="#products" className="cart-link" aria-label={`Giỏ hàng, ${cartCount} sản phẩm`}>
          <span aria-hidden="true">🛍</span>
          <span className="cart-label">Giỏ hàng</span>
          <span className="cart-count">{cartCount}</span>
        </a>
      </div>
    </header>
  )
}

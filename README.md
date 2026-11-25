# ShopMini

Trang chủ cửa hàng ShopMini được xây dựng bằng React, TypeScript và Vite. Giao diện có danh mục lọc sản phẩm, thẻ sản phẩm, giỏ hàng và bố cục đáp ứng trên điện thoại.

## Chạy dự án

Yêu cầu Node.js và npm.

```bash
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal, thường là `http://localhost:5173`.

## Kiểm tra

```bash
npm run build
npm run lint
```

## Tính năng

- Hiển thị sáu sản phẩm mẫu từ `src/data/products.ts`.
- Lọc sản phẩm theo danh mục.
- Cập nhật số lượng giỏ hàng khi thêm sản phẩm.
- Vô hiệu hóa nút mua và hiển thị nhãn khi sản phẩm hết hàng.
- Bố cục co giãn phù hợp với màn hình nhỏ.

## Cấu trúc chính

```text
src/
├── components/   # Header, Banner, CategoryList, ProductCard, ProductList, Footer
├── data/         # Dữ liệu sản phẩm
├── App.tsx
└── App.css
```

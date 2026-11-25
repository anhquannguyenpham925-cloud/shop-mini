export type Product = {
  id: number
  name: string
  price: number
  image: string
  category: string
  stock: number
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Áo thun basic',
    price: 150000,
    image: 'https://placehold.co/600x450/e8f1ed/244a3a?text=Ao+thun',
    category: 'Thời trang',
    stock: 12,
  },
  {
    id: 2,
    name: 'Quần jean slim',
    price: 420000,
    image: 'https://placehold.co/600x450/edf0f7/334269?text=Quan+jean',
    category: 'Thời trang',
    stock: 5,
  },
  {
    id: 3,
    name: 'Tai nghe Bluetooth',
    price: 690000,
    image: 'https://placehold.co/600x450/f0ecf7/594274?text=Tai+nghe',
    category: 'Điện tử',
    stock: 0,
  },
  {
    id: 4,
    name: 'Bình giữ nhiệt 500ml',
    price: 185000,
    image: 'https://placehold.co/600x450/f7efe5/77502d?text=Binh+nuoc',
    category: 'Gia dụng',
    stock: 20,
  },
  {
    id: 5,
    name: 'Balo laptop 15 inch',
    price: 550000,
    image: 'https://placehold.co/600x450/e9eff1/34515b?text=Balo',
    category: 'Phụ kiện',
    stock: 8,
  },
  {
    id: 6,
    name: 'Chuột không dây',
    price: 245000,
    image: 'https://placehold.co/600x450/f4eee9/755343?text=Chuot',
    category: 'Điện tử',
    stock: 15,
  },
]

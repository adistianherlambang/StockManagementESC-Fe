export interface Produk {
  id: number;
  nama: string;
  harga: number;
  type: string; // untuk filter di [type].tsx
}

const produkList: Produk[] = [
  { id: 1, nama: 'Produk A1', harga: 10000, type: 'A' },
  { id: 2, nama: 'Produk A2', harga: 20000, type: 'A' },
  { id: 3, nama: 'Produk B1', harga: 15000, type: 'B' },
  { id: 4, nama: 'Produk B2', harga: 25000, type: 'B' },
];

export default produkList
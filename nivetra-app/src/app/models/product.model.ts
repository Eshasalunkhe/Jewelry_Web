export interface Product {
  id?: number;  // <-- make it optional for creation
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  imageUrl: string;
}

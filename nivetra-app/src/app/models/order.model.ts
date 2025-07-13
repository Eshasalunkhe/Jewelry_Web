export interface Order {
  id?: number;
  user: { id: number };
  total: number;
  status: string;
  orderDate?: string;
  items?: {
    product: { id: number };
    quantity: number;
  }[];
}

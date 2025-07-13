import { Product } from './product.model';
import { User } from './user.model';

export interface CartItem {
  id?: number;
  product: Product;
  user: User;
  quantity: number;
}

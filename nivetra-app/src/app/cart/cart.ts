// src/app/cart/cart.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { CartItem } from '../models/cart-item.model';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  imports: [CommonModule, RouterModule]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  userId: number = 0;
  total: number = 0;
  paymentMethod: string = 'COD';

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user?.id) {
      alert('⚠️ Please login to view your cart.');
      this.router.navigate(['/login']);
      return;
    }

    this.userId = user.id;
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCartItems(this.userId).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.total = this.getTotal();
    });
  }

  removeItem(id: number): void {
    this.cartService.removeItem(id).subscribe(() => this.loadCart());
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0
    );
  }

  placeOrder(): void {
    const order: Order = {
      user: { id: this.userId },
      total: this.getTotal(),
      status: 'PLACED',
      orderDate: new Date().toISOString(),
      items: this.cartItems.map(item => ({
        product: { id: item.product.id! }, // ✅ non-null assertion
        quantity: item.quantity
      }))
    };

    this.orderService.placeOrder(order).subscribe({
      next: () => {
        alert('✅ Order placed successfully!');
        this.cartService.clearCart(this.userId).subscribe(() => {
          this.cartItems = [];
          this.total = 0;
          this.router.navigate(['/orders']);
        });
      },
      error: (err) => {
        console.error('❌ Error placing order:', err);
        alert('❌ Failed to place order');
      }
    });
  }
}

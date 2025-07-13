import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  userId: number = 0;
  isAdmin: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userId = user?.id;
    this.isAdmin = user?.role === 'ADMIN';

    this.productService.getAll().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filteredProducts = data;
        this.categories = Array.from(new Set(data.map(p => p.category))).filter(Boolean);
      },
      error: (err) => console.error('❌ Failed to load products:', err)
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredProducts = category === 'All'
      ? this.products
      : this.products.filter(p => p.category === category);
  }

  addToCart(product: Product): void {
    if (!this.userId) {
      alert('Please log in to add products to cart.');
      return;
    }

    const cartItem: CartItem = {
      product: product,
      user: { id: this.userId } as any,
      quantity: 1
    };

    this.cartService.addToCart(cartItem).subscribe({
      next: () => alert(`${product.name} added to cart!`),
      error: (err) => {
        console.error('❌ Failed to add to cart:', err);
        alert('❌ Failed to add to cart');
      }
    });
  }

  buyNow(product: Product): void {
    if (!this.userId) {
      alert('Please log in to place an order.');
      return;
    }

    localStorage.setItem('checkoutProduct', JSON.stringify(product));
    this.router.navigate(['/checkout']);
  }

  deleteProduct(productId: number): void {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(productId).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== productId);
        this.filteredProducts = this.filteredProducts.filter(p => p.id !== productId);
        alert('Product deleted successfully');
      },
      error: (err) => {
        console.error('❌ Failed to delete product:', err);
        alert('❌ Failed to delete product');
      }
    });
  }
}


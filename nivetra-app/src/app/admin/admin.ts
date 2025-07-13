// src/app/admin/admin.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../services/Admin.service';
import { Product } from '../models/product.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    category: '',
    imageUrl: ''
  };
  products: Product[] = [];
  orders: Order[] = [];
  users: User[] = [];
  orderCount = 0;
  userCount = 0;
  showOrders = false;
  showUsers = false;
  message = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchCounts();
    this.loadProducts();
  }

  fetchCounts(): void {
    this.adminService.getOrderCount().subscribe(c => this.orderCount = c);
    this.adminService.getUserCount().subscribe(c => this.userCount = c);
  }

  loadProducts(): void {
    this.adminService.getProducts().subscribe({
      next: data => this.products = data,
      error: err => console.error('❌ loadProducts', err)
    });
  }

  addProduct(): void {
    if (!this.product.name || !this.product.price || !this.product.imageUrl) {
      this.message = '⚠️ All fields are required';
      return;
    }
    this.adminService.addProduct(this.product).subscribe({
      next: () => {
        this.message = '✅ Product added';
        this.product = { name: '', description: '', price: 0, quantity: 0, category: '', imageUrl: ''};
        this.fetchCounts();
        this.loadProducts();
      },
      error: err => {
        console.error('❌ addProduct', err);
        this.message = '❌ Failed to add product';
      }
    });
  }

  deleteProduct(id: number): void {
    this.adminService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
      this.fetchCounts();
    });
  }

  viewOrders(): void {
    this.showUsers = false;
    this.showOrders = !this.showOrders;
    if (this.showOrders) {
      this.adminService.getOrders().subscribe(data => this.orders = data);
    }
  }

  viewUsers(): void {
    this.showOrders = false;
    this.showUsers = !this.showUsers;
    if (this.showUsers) {
      this.adminService.getUsers().subscribe(data => this.users = data);
    }
  }

  deleteOrder(id: number): void {
    this.adminService.deleteOrder(id).subscribe(() => {
      this.orders = this.orders.filter(o => o.id !== id);
      this.fetchCounts();
    });
  }

  deleteUser(id: number): void {
    this.adminService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== id);
      this.fetchCounts();
    });
  }
}



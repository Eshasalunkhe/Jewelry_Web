// src/app/services/admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
  addProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, p);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
  getUserCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/users/count`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/orders`);
  }
  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/orders/${id}`);
  }
  getOrderCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/orders/count`);
  }
}

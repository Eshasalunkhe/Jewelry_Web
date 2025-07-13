import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item.model';
import { Observable } from 'rxjs';

// src/app/services/cart.service.ts
@Injectable({ providedIn: 'root' })
export class CartService {
  private baseUrl = 'http://localhost:8081/api/cart'; // ✅ Corrected port

  constructor(private http: HttpClient) {}

  getCartItems(userId: number): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.baseUrl}/user/${userId}`);
  }

  addToCart(item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.baseUrl, item);
  }

  removeItem(itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${itemId}`);
  }

  clearCart(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/clear/${userId}`);
  }
}

// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model'; // Make sure your Order model reflects backend structure for retrieval
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private baseUrl = 'http://localhost:8081/api/orders';

  constructor(private http: HttpClient) {}

  // The type for order parameter here should match the payload we're sending.
  // Ideally, you'd create an interface for this payload as well.
  // For now, we'll assume 'any' or you can define a 'OrderPayload' interface.
  placeOrder(orderPayload: any): Observable<Order> { // Changed type to 'any' for the payload
    return this.http.post<Order>(this.baseUrl, orderPayload);
  }

  getOrdersByUser(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/user/${userId}`);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.html',
  styleUrls: ['./orders.css'],
  imports: [CommonModule]
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  userId: number = 0;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userId = user?.id;

    if (this.userId) {
      this.orderService.getOrdersByUser(this.userId).subscribe({
        next: (data) => (this.orders = data),
        error: () => alert('❌ Failed to load orders')
      });
    }
  }
}

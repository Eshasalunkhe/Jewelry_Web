import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
  imports: [CommonModule, FormsModule]
})
export class CheckoutComponent implements OnInit {
  product: any = null;
  method: string = 'cod';
  userId: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const storedProduct = localStorage.getItem('checkoutProduct');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedProduct && user?.id) {
      this.product = JSON.parse(storedProduct);
      this.userId = user.id;
    } else {
      alert('Missing user or product data.');
      this.router.navigate(['/products']);
    }
  }

 placeOrder(): void {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const product = this.product;

  const orderData = {
    userId: user.id,
    items: [
      {
        product: { id: product.id },
        quantity: 1
      }
    ]
  };

  console.log('🔍 Placing order with data:', orderData);

  this.http.post('http://localhost:8081/api/orders', orderData).subscribe({
    next: (res) => {
      alert('✅ Order placed successfully!');
      this.router.navigate(['/orders']);
    },
    error: (err) => {
      console.error('❌ Error placing order:', err);
      alert('❌ Failed to place order');
    }
  });
}

}

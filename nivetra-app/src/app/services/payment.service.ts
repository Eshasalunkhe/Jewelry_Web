import { Injectable } from '@angular/core';

declare var Razorpay: any;

@Injectable({ providedIn: 'root' })
export class Payment {
  openPayment(amount: number, onSuccess: () => void): void {
    const options = {
      key: 'rzp_test_xxxxxx', // Replace with your Razorpay Key
      amount: amount * 100,
      currency: 'INR',
      name: 'Nivetra Jewelry',
      description: 'Order Payment',
      handler: function (response: any) {
        console.log(response);
        onSuccess(); // callback after successful payment
      },
      prefill: {
        name: 'Customer',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: { color: '#3399cc' }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}

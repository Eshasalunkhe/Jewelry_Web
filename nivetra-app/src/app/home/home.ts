import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  @ViewChild('bestSellers') bestSellersSection!: ElementRef;

  allProducts: Product[] = [];
  bestSellersList: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
    this.loadProducts();
  }

  ngOnInit(): void {
    console.log('🏠 Home Component Loaded');
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(products => {
      this.allProducts = products;
      this.bestSellersList = products.slice(0, 3); // ✅ Display top 3 as best sellers
    });
  }

  scrollToSection(section: string): void {
    this.bestSellersSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/products']); // You can also navigate to `/product/:id` if needed
  }
}


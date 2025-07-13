import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class CategoryComponent implements OnInit {
  categoryPath: string = '';
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryPath = params.get('name') || '';
      this.loadImages(); // 👈 Call image loader here
    });
  }

loadImages(): void {
  this.products = [];

  for (let i = 1; i <= 4; i++) {
    this.products.push({
      id: i,
      name: `${this.categoryPath} ${i}`,
      price: 999 + i * 100,
      imageUrl: `assets/category/${this.categoryPath}/${i}.jpg`,
      description: 'Beautiful handcrafted silver piece',
      category: this.categoryPath,
      quantity: 1  // ✅ Add this line
    });
  }
}

goBack(): void {
  // Make sure to inject Router in the constructor
  this.router.navigate(['/home']);
}

}

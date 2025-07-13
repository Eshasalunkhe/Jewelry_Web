import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, Footer, Navbar], // ✅ Add RouterModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}

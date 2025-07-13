import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  get user(): any {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('user') || 'null');
    }
    return null;
  }

  get isAdmin(): boolean {
    return this.user?.role === 'ADMIN';
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
  }
}





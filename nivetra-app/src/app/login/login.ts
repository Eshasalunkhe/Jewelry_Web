import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  errorMessage: string = ''; // ✅ Fix for *ngIf error

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.credentials).subscribe({
      next: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.errorMessage = ''; // clear any old error
        alert('✅ Logged in successfully!');
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = '❌ Invalid email or password.';
      }
    });
  }
}

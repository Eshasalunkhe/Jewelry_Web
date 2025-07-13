import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; // ✅ Add FormsModule
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true, // ✅ If you are using standalone components
  imports: [CommonModule, FormsModule], // ✅ Import FormsModule here
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  user: User = { name: '', email: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  signup(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.auth.signup(this.user).subscribe({
      next: () => {
        this.successMessage = '🎉 Signup successful! Redirecting to login...';
        this.errorMessage = '';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: () => {
        this.successMessage = '';
        this.errorMessage = '❌ Signup failed. Email may already exist.';
      }
    });
  }
}

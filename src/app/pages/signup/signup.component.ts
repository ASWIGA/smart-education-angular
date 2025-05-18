import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  signupMessage = '';

  constructor(private http: HttpClient) {}

  signup() {
    this.http.post('http://localhost:3000/api/users/signup', {
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => this.signupMessage = 'Signup successful!',
      error: err => this.signupMessage = err.error.message || 'Signup failed.'
    });
  }
}

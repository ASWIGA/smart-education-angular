import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginMessage: string = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://localhost:3000/api/users/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        this.loginMessage = 'Login successful!';
        console.log(res); // Optional: handle token/session here
      },
      error: (err) => {
        this.loginMessage = err.error.message || 'Login failed.';
      }
    });
  }
}

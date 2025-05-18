// src/app/services/user.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  // Example: Retrieving logged-in user's email from localStorage
  getLoggedInUserEmail(): string | null {
    return localStorage.getItem('userEmail');  // Retrieve email from localStorage or similar
  }
}




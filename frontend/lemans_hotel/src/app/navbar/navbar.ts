import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isAdmin = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isAdmin = this.authService.getRole() === 'ADMIN';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

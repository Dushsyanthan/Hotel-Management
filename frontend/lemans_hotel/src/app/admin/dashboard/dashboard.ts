import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BookingService, BookingResponse } from '../../services/booking.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  totalBookings = 0;
  totalRevenue = 0;
  activeBookings = 0;
  recentBookings: BookingResponse[] = [];
  loading = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.loading = true;
    this.bookingService.getAllBookings().subscribe({
      next: (bookings) => {
        this.totalBookings = bookings.length;
        this.totalRevenue = bookings.reduce((sum, booking) => sum + booking.totalCost, 0);
        this.activeBookings = bookings.filter(b => b.bookingStatus === 'CONFIRMED').length;
        this.recentBookings = bookings.slice(0, 5); // Get first 5
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading dashboard data:', err);
        this.loading = false;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

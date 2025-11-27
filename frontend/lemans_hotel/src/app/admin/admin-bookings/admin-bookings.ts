import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService, BookingResponse } from '../../services/booking.service';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-bookings.html',
  styleUrl: './admin-bookings.css'
})
export class AdminBookings implements OnInit {
  bookings: BookingResponse[] = [];
  loading = true;
  errorMessage = '';

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.loading = true;
    this.bookingService.getAllBookings().subscribe({
      next: (data) => {
        this.bookings = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading bookings:', err);
        this.errorMessage = 'Failed to load bookings.';
        this.loading = false;
      }
    });
  }

  updateStatus(bookingId: number, status: string) {
    if (!confirm(`Are you sure you want to mark this booking as ${status}?`)) return;

    this.bookingService.updateBookingStatus(bookingId, status).subscribe({
      next: () => {
        // Update local state
        const booking = this.bookings.find(b => b.id === bookingId);
        if (booking) {
          booking.bookingStatus = status;
        }
      },
      error: (err) => {
        console.error('Error updating status:', err);
        alert('Failed to update status.');
      }
    });
  }
}

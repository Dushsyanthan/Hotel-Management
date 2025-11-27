import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookingService, BookingResponse } from '../services/booking.service';

@Component({
    selector: 'app-my-bookings',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './my-bookings.html',
    styleUrl: './my-bookings.css'
})
export class MyBookings implements OnInit {
    bookings: BookingResponse[] = [];
    loading = true;
    errorMessage = '';

    constructor(private bookingService: BookingService) { }

    ngOnInit() {
        this.loadBookings();
    }

    loadBookings() {
        this.loading = true;
        this.errorMessage = '';

        this.bookingService.getUserBookings().subscribe({
            next: (bookings) => {
                console.log('✅ Bookings loaded successfully:', bookings);
                this.bookings = bookings;
                this.loading = false;
            },
            error: (err) => {
                console.error('❌ Error loading bookings:', err);
                if (err.status === 0) {
                    this.errorMessage = 'Cannot connect to backend. Make sure your Spring Boot app is running.';
                } else if (err.status === 401) {
                    this.errorMessage = 'Please login to view your bookings.';
                } else {
                    this.errorMessage = `Failed to load bookings. Error: ${err.status}`;
                }
                this.loading = false;
            }
        });
    }

    getStatusClass(status: string): string {
        switch (status?.toLowerCase()) {
            case 'confirmed':
                return 'status-confirmed';
            case 'pending':
                return 'status-pending';
            case 'cancelled':
                return 'status-cancelled';
            default:
                return 'status-default';
        }
    }
}

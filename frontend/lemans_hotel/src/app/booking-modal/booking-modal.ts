import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService, BookingRequest } from '../services/booking.service';

import { PopupService } from '../popup/popup.service';

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-modal.html',
  styleUrl: './booking-modal.css',
})
export class BookingModal {
  @Input() isOpen = false;
  @Input() roomId: number | null = null;
  @Input() dishId: number | null = null;
  @Input() cuisineName: string = '';
  @Input() bookingType: 'room' | 'cuisine' = 'room';
  @Output() closeModal = new EventEmitter<void>();
  @Output() bookingSuccess = new EventEmitter<void>();

  booking = {
    checkInDate: '',
    checkOutDate: '',
    noOfPerson: 1
  };

  minDate = new Date().toISOString().split('T')[0];

  isLoading = false;
  showSuccess = false;
  successMessage = '';

  constructor(
    private bookingService: BookingService,
    private popupService: PopupService
  ) { }

  close() {
    this.isOpen = false;
    this.showSuccess = false;
    this.closeModal.emit();
    this.resetForm();
  }

  resetForm() {
    this.booking = {
      checkInDate: '',
      checkOutDate: '',
      noOfPerson: 1
    };
    this.isLoading = false;
    this.showSuccess = false;
  }

  submitBooking() {
    if (!this.roomId || !this.dishId) {
      this.popupService.showError('Missing booking information. Please try again.');
      return;
    }

    this.isLoading = true;

    const bookingRequest: BookingRequest = {
      roomId: this.roomId,
      dishId: this.dishId,
      checkInDate: this.booking.checkInDate,
      checkOutDate: this.booking.checkOutDate,
      noOfPerson: this.booking.noOfPerson
    };

    this.bookingService.createBooking(bookingRequest).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.showSuccess = true;
        this.successMessage = `Booking confirmed! Total cost: $${response.totalCost}`;
        this.bookingSuccess.emit();
        // Close after 2 seconds
        setTimeout(() => {
          this.close();
        }, 2000);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Booking error:', err);
        this.popupService.showError('Booking failed. Please try again or contact support.');
      }
    });
  }
}

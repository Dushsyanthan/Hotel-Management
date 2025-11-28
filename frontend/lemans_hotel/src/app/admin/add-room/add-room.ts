import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { PopupService } from '../../popup/popup.service';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-room.html',
  styleUrl: './add-room.css',
})
export class AddRoom {
  room = {
    name: '',
    type: 'suite',
    price: null,
    description: '',
    image: ''
  };

  constructor(
    private router: Router,
    private adminService: AdminService,
    private popupService: PopupService
  ) { }

  onSubmit() {
    // Provide default image if empty
    if (!this.room.image || this.room.image.trim() === '') {
      this.room.image = 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800';
    }

    console.log('Adding room:', this.room);
    this.adminService.addRoom(this.room).subscribe({
      next: (response: any) => {
        console.log('Room added successfully', response);
        this.popupService.showSuccess('Room added successfully!');
        this.router.navigate(['/admin/dashboard']);
      },
      error: (error: any) => {
        console.error('Error adding room', error);
        this.popupService.showError('Failed to add room. Please try again.');
      }
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';

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

  constructor(private router: Router, private adminService: AdminService) { }

  onSubmit() {
    console.log('Adding room:', this.room);
    this.adminService.addRoom(this.room).subscribe({
      next: (response) => {
        console.log('Room added successfully', response);
        alert('Room added successfully!');
        this.router.navigate(['/admin/dashboard']);
      },
      error: (error) => {
        console.error('Error adding room', error);
        alert('Failed to add room. Please try again.');
      }
    });
  }
}

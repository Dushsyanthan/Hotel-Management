import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Adding room:', this.room);
    // Call service to add room
    // For now, redirect back to dashboard
    alert('Room added successfully!');
    this.router.navigate(['/admin/dashboard']);
  }
}

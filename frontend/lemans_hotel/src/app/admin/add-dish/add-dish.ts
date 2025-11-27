import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-dish',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-dish.html',
  styleUrl: './add-dish.css',
})
export class AddDish {
  cuisine = {
    cuisineName: '',
    pricePerPerson: null,
    description: '',
    image: '' // Now stores URL
  };

  constructor(private router: Router, private adminService: AdminService) { }

  onSubmit() {
    console.log('Adding cuisine:', this.cuisine);
    this.adminService.addCuisine(this.cuisine).subscribe({
      next: (response) => {
        console.log('Cuisine added successfully', response);
        alert('Cuisine added successfully!');
        this.router.navigate(['/admin/dashboard']);
      },
      error: (error) => {
        console.error('Error adding cuisine', error);
        alert('Failed to add cuisine. Please try again.');
      }
    });
  }
}

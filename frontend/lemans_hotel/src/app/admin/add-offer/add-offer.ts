import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-offer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-offer.html',
  styleUrl: './add-offer.css',
})
export class AddOffer {
  offer = {
    title: '',
    description: ''
  };

  constructor(private router: Router, private adminService: AdminService) { }

  onSubmit() {
    console.log('Adding offer:', this.offer);
    this.adminService.addOffer(this.offer).subscribe({
      next: (response) => {
        console.log('Offer added successfully', response);
        alert('Offer added successfully!');
        this.router.navigate(['/admin/dashboard']);
      },
      error: (error) => {
        console.error('Error adding offer', error);
        alert('Failed to add offer. Please try again.');
      }
    });
  }
}

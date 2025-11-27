import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
    discount: null,
    code: '',
    description: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Adding offer:', this.offer);
    // Call service to add offer
    alert('Offer added successfully!');
    this.router.navigate(['/admin/dashboard']);
  }
}

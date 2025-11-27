import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-dish',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-dish.html',
  styleUrl: './add-dish.css',
})
export class AddDish {
  dish = {
    cuisine: 'French',
    name: '',
    price: null,
    description: '',
    image: ''
  };

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Adding dish:', this.dish);
    // Call service to add dish
    alert('Dish added successfully!');
    this.router.navigate(['/admin/dashboard']);
  }
}

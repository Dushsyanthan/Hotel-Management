import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dining',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './dining.html',
    styleUrl: './dining.css'
})
export class Dining {
    cuisines = [
        {
            name: 'French',
            restaurant: 'Le Petit Palais',
            description: 'Classic French haute cuisine in an elegant setting.',
            image: 'french_cuisine.png',
            specialties: ['Coq au Vin', 'Bouillabaisse', 'Crème Brûlée', 'Escargots de Bourgogne', 'Ratatouille']
        },
        {
            name: 'Italian',
            restaurant: 'Bella Vista',
            description: 'Authentic Italian flavors with a modern twist.',
            image: 'italian_cuisine.png',
            specialties: ['Osso Buco', 'Truffle Risotto', 'Tiramisu', 'Carbonara', 'Caprese Salad']
        },
        {
            name: 'Japanese',
            restaurant: 'Sakura Zen',
            description: 'Traditional sushi and kaiseki dining experience.',
            image: 'japanese_cuisine.png',
            specialties: ['Omakase Sushi', 'Wagyu Beef', 'Matcha Desserts', 'Tempura', 'Ramen']
        },
        {
            name: 'Indian',
            restaurant: 'The Spice Route',
            description: 'A culinary journey through the rich flavors of India.',
            image: 'indian_cuisine.png',
            specialties: ['Butter Chicken', 'Lamb Rogan Josh', 'Biryani', 'Palak Paneer', 'Tandoori Chicken']
        },
        {
            name: 'Chinese',
            restaurant: 'Golden Dragon',
            description: 'Exquisite Cantonese and Szechuan dishes.',
            image: 'chinese_cuisine.png',
            specialties: ['Peking Duck', 'Dim Sum', 'Kung Pao Chicken', 'Mapo Tofu', 'Spring Rolls']
        }
    ];
}

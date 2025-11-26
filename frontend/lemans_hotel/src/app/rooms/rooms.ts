import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room.model';

@Component({
    selector: 'app-rooms',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './rooms.html',
    styleUrl: './rooms.css'
})
export class Rooms implements OnInit {
    rooms: Room[] = [];
    loading = true;
    errorMessage = '';
    debugInfo = '';

    constructor(private roomService: RoomService) { }

    ngOnInit() {
        this.loadRooms();
    }

    loadRooms() {
        this.loading = true;
        this.errorMessage = '';
        this.debugInfo = 'Attempting to fetch from: http://localhost:8080/user/rooms';

        this.roomService.getAllRooms().subscribe({
            next: (rooms) => {
                console.log('✅ Rooms loaded successfully:', rooms);
                // Filter out rooms without valid imageUrl
                this.rooms = rooms.filter(room => room.imageUrl && room.imageUrl.trim() !== '');
                this.loading = false;
                this.debugInfo = `Successfully loaded ${this.rooms.length} rooms with images`;
            },
            error: (err) => {
                console.error('❌ Error loading rooms:', err);

                if (err.status === 0) {
                    this.errorMessage = 'Cannot connect to backend. Make sure your Spring Boot app is running on port 8080.';
                    this.debugInfo = 'CORS or Network Error - Backend not reachable';
                } else if (err.status === 401) {
                    this.errorMessage = 'Authentication required. Please login again.';
                    this.debugInfo = '401 Unauthorized - Token might be invalid or expired';
                } else if (err.status === 403) {
                    this.errorMessage = 'Access forbidden. You may not have permission to view rooms.';
                    this.debugInfo = '403 Forbidden - Check user role/permissions';
                } else if (err.status === 404) {
                    this.errorMessage = 'Rooms endpoint not found. Check backend URL.';
                    this.debugInfo = '404 Not Found - Endpoint /user/rooms does not exist';
                } else {
                    this.errorMessage = `Failed to load rooms. Error: ${err.status} - ${err.statusText}`;
                    this.debugInfo = `HTTP ${err.status}: ${err.message}`;
                }

                this.loading = false;
            }
        });
    }

    bookRoom(roomId: number) {
        console.log('Booking room:', roomId);
        // TODO: Implement booking functionality
    }
}

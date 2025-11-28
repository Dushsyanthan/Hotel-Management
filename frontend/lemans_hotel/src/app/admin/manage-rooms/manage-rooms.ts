import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Room } from '../../models/room.model';

@Component({
    selector: 'app-manage-rooms',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './manage-rooms.html',
    styleUrl: './manage-rooms.css'
})
export class ManageRooms implements OnInit {
    rooms: Room[] = [];
    loading = true;
    errorMessage = '';

    constructor(
        private adminService: AdminService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loadRooms();
    }

    loadRooms() {
        this.loading = true;
        this.adminService.getAllRooms().subscribe({
            next: (data) => {
                this.rooms = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Error loading rooms:', err);
                this.errorMessage = 'Failed to load rooms.';
                this.loading = false;
            }
        });
    }

    editRoom(roomId: number) {
        this.router.navigate(['/admin/edit-room', roomId]);
    }
}

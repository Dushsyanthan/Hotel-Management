import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { RoomService } from '../../services/room.service';
import { PopupService } from '../../popup/popup.service';

@Component({
    selector: 'app-edit-room',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './edit-room.html',
    styleUrl: './edit-room.css',
})
export class EditRoom implements OnInit {
    roomId: number = 0;
    room = {
        name: '',
        type: 'suite',
        price: null,
        description: '',
        image: ''
    };
    loading = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private adminService: AdminService,
        private roomService: RoomService,
        private popupService: PopupService
    ) { }

    ngOnInit() {
        this.roomId = Number(this.route.snapshot.paramMap.get('id'));
        this.loadRoom();
    }

    loadRoom() {
        this.loading = true;
        this.roomService.getRoomById(this.roomId).subscribe({
            next: (data: any) => {
                this.room = {
                    name: data.name || data.roomType,
                    type: data.roomType || data.type,
                    price: data.price,
                    description: data.description || '',
                    image: data.image || ''
                };
                this.loading = false;
            },
            error: (error: any) => {
                console.error('Error loading room', error);
                this.popupService.showError('Failed to load room details.');
                this.loading = false;
            }
        });
    }

    onSubmit() {
        console.log('Updating room:', this.room);
        this.adminService.updateRoom(this.roomId, this.room).subscribe({
            next: (response: any) => {
                console.log('Room updated successfully', response);
                this.popupService.showSuccess('Room updated successfully!');
                this.router.navigate(['/admin/manage-rooms']);
            },
            error: (error: any) => {
                console.error('Error updating room', error);
                this.popupService.showError('Failed to update room. Please try again.');
            }
        });
    }
}

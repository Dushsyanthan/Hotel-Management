import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    private apiUrl = 'http://localhost:8080/user/rooms';

    constructor(private http: HttpClient) { }

    // Get all rooms
    getAllRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(this.apiUrl);
    }

    // Get room by ID
    getRoomById(id: number): Observable<Room> {
        return this.http.get<Room>(`${this.apiUrl}/${id}`);
    }

    // Get available rooms
    getAvailableRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(`${this.apiUrl}/available`);
    }
}

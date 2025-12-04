import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private baseUrl = '/admin';

    constructor(private http: HttpClient) { }

    addOffer(offer: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/offers/add`, offer);
    }

    addCuisine(cuisine: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/dishes/add`, cuisine);
    }

    // Room operations with image upload
    addRoom(roomData: FormData): Observable<any> {
        return this.http.post(`${this.baseUrl}/rooms`, roomData);
    }

    updateRoom(id: number, roomData: FormData): Observable<any> {
        return this.http.put(`${this.baseUrl}/rooms/${id}`, roomData);
    }

    getAllOffers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/offers/all`);
    }

    getAllRooms(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/rooms`);
    }

    getRoomById(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/rooms/${id}`);
    }

    // Get room image URL for displaying
    getRoomImageUrl(roomId: number): string {
        return `${this.baseUrl}/rooms/${roomId}/image`;
    }

    deleteRoom(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/rooms/${id}`);
    }
}

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

    addRoom(room: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/rooms`, room);
    }

    updateRoom(id: number, room: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/rooms/${id}`, room);
    }

    getAllOffers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/offers`);
    }

    getAllRooms(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/rooms`);
    }
}

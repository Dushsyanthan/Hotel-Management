import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private apiUrl = '/admin';

    constructor(private http: HttpClient) { }

    addOffer(offer: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/offers`, offer);
    }

    addCuisine(cuisine: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/dishes`, cuisine);
    }

    addRoom(room: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/rooms`, room);
    }
}

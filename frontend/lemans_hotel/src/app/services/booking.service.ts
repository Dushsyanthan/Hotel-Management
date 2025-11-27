import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BookingRequest {
    roomId: number;
    dishId: number;
    checkInDate: string;
    checkOutDate: string;
    noOfPerson: number;
}

export interface BookingResponse {
    id: number;
    bookingStatus: string;
    totalCost: number;
    message?: string;
    checkInDate: string;
    checkOutDate: string;
    noOfPerson: number;
    room: {
        id: number;
        roomType: string;
        price: number;
        description?: string;
        available?: boolean;
    };
    dish: {
        id: number;
        cuisineName: string;
        pricePerPerson: number;
        description?: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private apiUrl = 'http://localhost:8080/user/bookings';

    constructor(private http: HttpClient) { }

    createBooking(booking: BookingRequest): Observable<BookingResponse> {
        return this.http.post<BookingResponse>(this.apiUrl, booking);
    }

    getUserBookings(): Observable<BookingResponse[]> {
        return this.http.get<BookingResponse[]>(this.apiUrl);
    }
}

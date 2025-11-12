package com.example.le_mans_hotel.controller;

import com.example.le_mans_hotel.model.Booking;
import com.example.le_mans_hotel.model.BookingStatus;
import com.example.le_mans_hotel.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/admin/bookings")
@RequiredArgsConstructor
public class AdminBookingController {

    private final BookingService bookingService;

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.findAll();
    }

    @PutMapping("/{id}/status")
    public Booking updateBookingStatus(@PathVariable Long id, @RequestParam("status") String status) {
        Booking booking = bookingService.findById(id).orElseThrow();
        booking.setPaymentStatus(Enum.valueOf(BookingStatus.class, status));
        return bookingService.save(booking);
    }
}

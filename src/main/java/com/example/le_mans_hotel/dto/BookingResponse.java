package com.example.le_mans_hotel.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDate;

@Data
@Builder
public class BookingResponse {
    private Long bookingId;
    private String roomName;
    private String cuisineType;
    private double totalCost;
    private String status;
    private LocalDate bookingDate;
}

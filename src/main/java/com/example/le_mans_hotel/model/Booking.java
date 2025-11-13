package com.example.le_mans_hotel.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "bookings")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @NotNull(message = "User is required for booking")
    private User user;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    @NotNull(message = "Room selection is required")
    private Room room;

    @ManyToOne
    @JoinColumn(name = "dish_id", nullable = false)
    @NotNull(message = "Cuisine selection is required")
    private Dish dish;

    @NotNull(message = "Booking date is required")
    private LocalDate bookingDate;

    private String status;

    @Enumerated(EnumType.STRING)
    private BookingStatus paymentStatus;

    @NotNull(message = "Number of persons is required")
    @Min(value = 1, message = "At least one person must be booked")
    private Integer noOfPerson;

    @NotNull(message = "Total cost cannot be null")
    @Min(value = 1, message = "Total cost must be positive")
    private Double totalCost;
}

package com.example.le_mans_hotel.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.le_mans_hotel.dto.BookingRequest;
import com.example.le_mans_hotel.dto.BookingResponse;
import com.example.le_mans_hotel.dto.DtoMapper;
import com.example.le_mans_hotel.model.Booking;
import com.example.le_mans_hotel.model.Dish;
import com.example.le_mans_hotel.model.Room;
import com.example.le_mans_hotel.model.User;
import com.example.le_mans_hotel.repository.BookingRepository;
import com.example.le_mans_hotel.repository.DishRepository;
import com.example.le_mans_hotel.repository.RoomRepository;
import com.example.le_mans_hotel.repository.UserRepository;
import com.example.le_mans_hotel.service.BookingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

	private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final DishRepository dishRepository;
    
    @Override
    public List<Booking> findAll() {
        return bookingRepository.findAll();
    }

    @Override
    public Optional<Booking> findById(Long id) {
        return bookingRepository.findById(id);
    }

    @Override
    public Booking save(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> findByUserEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return bookingRepository.findAll().stream()
                .filter(b -> b.getUser().getId().equals(user.getId()))
                .collect(Collectors.toList());
    }

    @Override
    public BookingResponse createBooking(BookingRequest request, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Room room = roomRepository.findById(request.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));
        Dish dish = dishRepository.findById(request.getDishId())
                .orElseThrow(() -> new RuntimeException("Dish not found"));

        // Calculate total cost
        double totalCost = dish.getPricePerPerson() * request.getNoOfPeron();

        Booking booking = Booking.builder()
                .user(user)
                .room(room)
                .dish(dish)
                .bookingDate(request.getBookingDate() != null ? request.getBookingDate() : LocalDate.now())
                .status("CONFIRMED")
                .totalCost(totalCost+room.getPrice())
                .build();

        Booking saved = bookingRepository.save(booking);
        return DtoMapper.toBookingResponse(saved);
    }

    @Override
    public double calculateTotalCost(Booking booking) {
        double totalCost = 0.0;
        if (booking.getRoom() != null && booking.getRoom().getPrice() != null)
            totalCost += booking.getRoom().getPrice();

        if (booking.getDish() != null && booking.getDish().getPricePerPerson() != null && booking.getDish() != null)
            totalCost += booking.getDish().getPricePerPerson() * booking.getDish().getPricePerPerson();
        
        return totalCost;
    }
}

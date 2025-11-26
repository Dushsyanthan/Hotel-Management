package com.example.le_mans_hotel.repository;

import com.example.le_mans_hotel.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}

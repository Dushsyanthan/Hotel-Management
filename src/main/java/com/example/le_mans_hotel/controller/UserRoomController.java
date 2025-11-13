package com.example.le_mans_hotel.controller;

import com.example.le_mans_hotel.model.Room;
import com.example.le_mans_hotel.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/user/rooms")
@RequiredArgsConstructor
public class UserRoomController {

    private final RoomService roomService;

    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.findAll();
    }
}

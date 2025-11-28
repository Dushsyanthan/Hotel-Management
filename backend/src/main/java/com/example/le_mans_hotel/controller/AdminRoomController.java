package com.example.le_mans_hotel.controller;

import com.example.le_mans_hotel.model.Room;
import com.example.le_mans_hotel.service.RoomService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/rooms")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AdminRoomController {

    private final RoomService roomService;

    @PostMapping
    public Room createRoom(@RequestBody Room room) {
        return roomService.save(room);
    }
    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.findAll();
    }

    @PutMapping("/{id}")
    public Room updateRoom(@PathVariable Long id, @RequestBody Room roomDetails) {
        return roomService.update(id, roomDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteRoom(@PathVariable Long id) {
        roomService.deleteById(id);
    }
}

package com.example.le_mans_hotel.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.le_mans_hotel.model.Room;
import com.example.le_mans_hotel.repository.RoomRepository;
import com.example.le_mans_hotel.service.RoomService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

	public final RoomRepository roomRepository;
	
	@Override
	public Room save(Room room) {
		return roomRepository.save(room);
	}

	@Override
	public Optional<Room> findById(Long id) {
		return roomRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		roomRepository.deleteById(id);
	}

	@Override
	public List<Room> findAll() {
		return roomRepository.findAll();
	}

	@Override
	 public Room update(Long id, Room roomDetails) {
         Room room = roomRepository.findById(id).orElseThrow();
         room.setRoomType(roomDetails.getRoomType());
         room.setDescription(roomDetails.getDescription());
         room.setPrice(roomDetails.getPrice());
         room.setAvailable(roomDetails.getAvailable());
         room.setImageUrl(roomDetails.getImageUrl()); 
         return roomRepository.save(room);
     }

	
}

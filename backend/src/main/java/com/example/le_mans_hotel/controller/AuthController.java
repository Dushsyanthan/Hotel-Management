package com.example.le_mans_hotel.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.le_mans_hotel.dto.AuthResponse;
import com.example.le_mans_hotel.dto.LoginRequest;
import com.example.le_mans_hotel.dto.RegisterRequest;
import com.example.le_mans_hotel.model.User;
import com.example.le_mans_hotel.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        User user = new User();
        user.setName(req.getUsername());
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword());
        User saved = authService.registerUser(user);
        return ResponseEntity.ok("Registered: " + saved.getEmail());
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest req) {
        String token = authService.login(req.getEmail(), req.getPassword());
        User user = authService.findByEmail(req.getEmail()).get();
        return ResponseEntity.ok(new AuthResponse(token, user.getEmail(), user.getRole().name()));
    }

}

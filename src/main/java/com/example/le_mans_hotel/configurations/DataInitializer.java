package com.example.le_mans_hotel.configurations;

import com.example.le_mans_hotel.model.Role;
import com.example.le_mans_hotel.model.User;
import com.example.le_mans_hotel.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.findByEmail("abinesh.bolt@gmail.com").isEmpty()) {
                User admin = User.builder()
                        .name("Admin")
                        .email("abinesh.bolt@gmail.com")
                        .password(passwordEncoder.encode("admin123")) 
                        .role(Role.ADMIN)
                        .build();
                userRepository.save(admin);
                System.out.println("Admin user created: abinesh.bolt@gmail.com / admin123 ");
            }
        };
    }
}

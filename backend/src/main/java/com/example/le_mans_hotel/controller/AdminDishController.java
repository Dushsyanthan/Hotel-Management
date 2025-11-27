package com.example.le_mans_hotel.controller;

import com.example.le_mans_hotel.model.Dish;
import com.example.le_mans_hotel.service.DishService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/dishes")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AdminDishController {

    private final DishService dishService;

    @PostMapping
    public Dish createDish(@RequestBody Dish dish) {
        return dishService.save(dish);
    }

    @PutMapping("/{id}")
    public Dish updateDish(@PathVariable Long id, @RequestBody Dish dishDetails) {
        return dishService.updateDish(id, dishDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteDish(@PathVariable Long id) {
        dishService.deleteById(id);
    }
}

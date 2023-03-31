package com.restaurant.restaurantsystem.controller;


import com.restaurant.restaurantsystem.entity.Category;
import com.restaurant.restaurantsystem.service.CategoryService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/category/v1/")
public class CategoryController {
    private CategoryService categoryService;
    //http://localhost:8080/api/category/v1/allCategories
    @GetMapping("allCategories")
    public List<Category>getAllCategories(){

        return categoryService.getAllCategories();
    }
}

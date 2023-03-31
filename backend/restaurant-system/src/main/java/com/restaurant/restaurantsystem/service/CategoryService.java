package com.restaurant.restaurantsystem.service;

import com.restaurant.restaurantsystem.entity.Category;
import com.restaurant.restaurantsystem.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryService {
    private CategoryRepository categoryRepository;

    public List<Category>getAllCategories(){
        return categoryRepository.findAll();
    }
}

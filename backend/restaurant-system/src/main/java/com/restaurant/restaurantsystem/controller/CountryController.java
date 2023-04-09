package com.restaurant.restaurantsystem.controller;

import com.restaurant.restaurantsystem.entity.Country;
import com.restaurant.restaurantsystem.service.CountryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("country/api/v1")
@AllArgsConstructor
@CrossOrigin("*")
public class CountryController {
    private CountryService countryService;
    @GetMapping("allCountries")
    public List<Country> getAllCoutries(){
        return countryService.getAllCountries();
    }

}

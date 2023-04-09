package com.restaurant.restaurantsystem.service;

import com.restaurant.restaurantsystem.entity.Country;
import com.restaurant.restaurantsystem.repository.CountryRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Setter
@Getter
public class CountryService {
    private CountryRepository countryRepository;
    public List<Country>getAllCountries(){
        return countryRepository.findAll();
    }
}

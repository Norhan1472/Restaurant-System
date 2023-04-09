package com.restaurant.restaurantsystem.service;

import com.restaurant.restaurantsystem.entity.State;
import com.restaurant.restaurantsystem.repository.StateRepository;
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
public class StateService {
    private StateRepository stateRepository;
    public List<State> getAllStates(){
        return stateRepository.findAll();
    }
    public List<State>getStatesByCountryId(long id){
        return stateRepository.findByCountryId(id);
    }

}

package com.restaurant.restaurantsystem.controller;

import com.restaurant.restaurantsystem.entity.State;
import com.restaurant.restaurantsystem.service.StateService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("state/api/v1")
@AllArgsConstructor
@CrossOrigin("*")
public class StateController {
    private StateService stateService;
    @GetMapping("allStates")
    public List<State>getAllStates(){
        return stateService.getAllStates();
    }
    //http://localhost:8080/state/api/v1/statesByCountryId?id=value
    @GetMapping("statesByCountryId")
    public List<State>getStatesByCountryId(@RequestParam long id){
        return stateService.getStatesByCountryId(id);
    }
}

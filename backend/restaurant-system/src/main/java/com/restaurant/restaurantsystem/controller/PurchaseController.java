package com.restaurant.restaurantsystem.controller;

import com.restaurant.restaurantsystem.dto.PurchaseRequest;
import com.restaurant.restaurantsystem.dto.PurchaseResponse;
import com.restaurant.restaurantsystem.service.PurchaseService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/purchase/v1")
@AllArgsConstructor
@CrossOrigin("*")
public class PurchaseController {
    private PurchaseService purchaseService;
    //http://localhost:8080/api/purchase/v1/makeOrder
    @PostMapping("makeOrder")
    public PurchaseResponse makeOrder(@RequestBody PurchaseRequest purchaseRequest){
        System.out.println(purchaseRequest.getItems().size());
        return purchaseService.makeOrder(purchaseRequest);
    }
}

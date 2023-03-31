package com.restaurant.restaurantsystem.controller;

import com.restaurant.restaurantsystem.entity.Order;
import com.restaurant.restaurantsystem.service.OrderService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/order/v1")
public class OrderController {
    private OrderService orderService;
    //http://localhost:8080/api/order/v1/allOrders
    @GetMapping("allOrders")
    public List<Order>getAllOrders(){
        return orderService.getAllOrders();
    }
    //http://localhost:8080/api/order/v1/uploadImage
    @PostMapping("uploadImage")
    public String uploadImage(@RequestBody MultipartFile file) throws IOException {
        return orderService.uploadImage(file);

    }

}

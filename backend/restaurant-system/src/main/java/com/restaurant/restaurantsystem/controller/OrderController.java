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
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/order/v1")
public class OrderController {
    private OrderService orderService;
    //http://localhost:8080/api/order/v1/allOrders
    @GetMapping("allOrders")
    public List<Order>getAllOrders(@RequestParam int pageNum ,@RequestParam int size){
        return orderService.getAllOrders(pageNum,size);
    }
    //http://localhost:8080/api/order/v1/ordersLength
    @GetMapping("ordersLength")
    public long ordersLength(){
        return orderService.getLengthOfAllOrders();
    }
    //http://localhost:8080/api/order/v1/orderByCategoryId?id=value&pageNum=value&size=value
    @GetMapping("orderByCategoryId")
    public List<Order>getOrderByCategoryId(@RequestParam long id,@RequestParam int pageNum,@RequestParam int size){
        return orderService.getOrderByCategoryId(id,pageNum,size);
    }
    //http://localhost:8080/api/order/v1/sizeOfOrdersByCategoryId?id=value
    @GetMapping("sizeOfOrdersByCategoryId")
    public long getSizeOfOrdersByCategoryId(@RequestParam long id){
        return orderService.getLengthOfOrdersByCategoryId(id);
    }
    //http://localhost:8080/api/order/v1/orderByKey?key=value&pageNum=value&size=value
    @GetMapping("orderByKey")
    public List<Order>getOrderByKey(@RequestParam String key,@RequestParam int pageNum,@RequestParam int size){
        return orderService.getOrderByKey(key,pageNum,size);
    }
    //http://localhost:8080/api/order/v1/sizeOfOrdersByKey?key=value
    @GetMapping("sizeOfOrdersByKey")
    public long getSizeOfOrdersByKey(@RequestParam String key){
        return orderService.getSizeOfOrdersByKey(key);
    }
    //http://localhost:8080/api/order/v1/orderById?id=value
    @GetMapping("orderById")
    public Order getOrderById(@RequestParam long id){
        return orderService.getOrderById(id);
    }
    //http://localhost:8080/api/order/v1/uploadImage
    @PostMapping("uploadImage")
    public String uploadImage(@RequestBody MultipartFile file) throws IOException {
        return orderService.uploadImage(file);

    }

}

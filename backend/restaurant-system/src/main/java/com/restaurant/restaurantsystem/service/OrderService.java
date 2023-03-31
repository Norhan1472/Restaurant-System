package com.restaurant.restaurantsystem.service;

import com.restaurant.restaurantsystem.entity.Order;
import com.restaurant.restaurantsystem.repository.OrderRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
@AllArgsConstructor
public class OrderService {
    private OrderRepository orderRepository;
    public List<Order>getAllOrders(){
        return orderRepository.findAll();
    }
    public String uploadImage(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(fileName.contains("..")){
            System.out.println("error");
        }
        String image = Base64.getEncoder().encodeToString(file.getBytes());
        System.out.println(image);
        return image;
    }
}

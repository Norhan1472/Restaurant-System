package com.restaurant.restaurantsystem.service;

import com.restaurant.restaurantsystem.entity.Order;
import com.restaurant.restaurantsystem.repository.OrderRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    public List<Order>getAllOrders(int pageNum,int size){
        Pageable pageable =  PageRequest.of(pageNum,size);
        return orderRepository.findAll(pageable).getContent();
    }
    public long getLengthOfAllOrders(){
        return orderRepository.count();
    }

    public List<Order>getOrderByCategoryId(long id,int pageNum,int size){
        Pageable pageable = PageRequest.of(pageNum,size);
        return orderRepository.findByCategoryId(id,pageable);
    }
    public long getLengthOfOrdersByCategoryId(long id){
        return orderRepository.getSizeOfOrdersByCategoryId(id);
    }

    public List<Order>getOrderByKey(String key,int pageNum,int size){
        Pageable pageable = PageRequest.of(pageNum,size);
        return orderRepository.findByNameContaining(key,pageable);
    }
    public long getSizeOfOrdersByKey(String key){
        return orderRepository.getSizeOfOrdersByKey(key);
    }
    public Order getOrderById(long id){
        return orderRepository.findById(id).get();
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

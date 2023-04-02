package com.restaurant.restaurantsystem.repository;

import com.restaurant.restaurantsystem.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
    public List<Order> findByCategoryId(long id);
    public List<Order> findByNameContaining(String name);
}

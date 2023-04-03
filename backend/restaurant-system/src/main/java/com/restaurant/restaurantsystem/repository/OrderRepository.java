package com.restaurant.restaurantsystem.repository;

import com.restaurant.restaurantsystem.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
     public List<Order> findByCategoryId(long id, Pageable pageable);
    public List<Order> findByNameContaining(String name,Pageable pageable);
    @Query("select count (id) from Order where category.id = ?1")
    public long getSizeOfOrdersByCategoryId(long id);
    @Query("Select count(id) from Order where name like %?1%")
    public long getSizeOfOrdersByKey(String key);
}

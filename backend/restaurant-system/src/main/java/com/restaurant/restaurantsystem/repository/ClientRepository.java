package com.restaurant.restaurantsystem.repository;

import com.restaurant.restaurantsystem.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
}

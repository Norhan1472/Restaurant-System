package com.restaurant.restaurantsystem.repository;

import com.restaurant.restaurantsystem.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StateRepository extends JpaRepository<State,Long> {
    public List<State>findByCountryId(long id);
}
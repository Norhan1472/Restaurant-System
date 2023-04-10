package com.restaurant.restaurantsystem.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "category")
public class Category extends PublicData{
    @Column(name = "categoryLogo")
    private String categoryLogo;
    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private Set<Order>orders = new HashSet<>();
}

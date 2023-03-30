package com.restaurant.restaurantsystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order extends CommonData{
    @Column(name = "image")
    private String img;
    @Column(name = "price")
    private double price;
    @Column(name = "description")
    @Lob
    private String description;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}

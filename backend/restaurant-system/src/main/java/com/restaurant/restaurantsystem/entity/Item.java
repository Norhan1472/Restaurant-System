package com.restaurant.restaurantsystem.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="item")
public class Item extends BaseEntity{
    @Column(name = "img")
    private String img;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "price")
    private int price;
    @ManyToOne
    @JoinColumn(name="requestOrder_id")
    private RequestOrder requestOrder;
}

package com.restaurant.restaurantsystem.entity;


import lombok.*;

import javax.persistence.*;

@Setter
@Getter
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

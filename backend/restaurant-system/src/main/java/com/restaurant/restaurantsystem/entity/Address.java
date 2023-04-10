package com.restaurant.restaurantsystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="address")
public class Address extends CommonData{
    @Column(name = "country")
    private String country;
    @Column(name = "state")
    private String state;
    @Column(name = "zipCode")
    private String zipCode;
    @OneToOne
    @PrimaryKeyJoinColumn
    private RequestOrder requestOrder;
}

package com.restaurant.restaurantsystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="client")
public class Client extends PublicData{
    @Column(name = "email")
    private String email;
    @Column(name = "phone")
    private String phone;
    @OneToMany(mappedBy = "client",cascade = CascadeType.ALL)
    private Set<RequestOrder>requestOrders = new HashSet<>();
}

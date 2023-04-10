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
@Table(name ="request_order")
public class RequestOrder extends CommonData{
    @Column(name = "code")
    private String code;
    @Column(name = "note")
    @Lob
    private String note;
    @Column(name = "totalQuantity")
    private int totalQuantity;
    @ManyToOne
    @JoinColumn(name ="client_id")
    private Client client;
    @OneToMany(mappedBy = "requestOrder",cascade = CascadeType.ALL)
    private Set<Item> items = new HashSet<>();
    @OneToOne(cascade = CascadeType.ALL)//,referencedColumnName = "id"
    @JoinColumn(name ="fromAddress")
    private Address fromAddress;
    @OneToOne(cascade = CascadeType.ALL)//,referencedColumnName = "id"
    @JoinColumn(name = "toAddress")
    private Address toAddress;
}

package com.restaurant.restaurantsystem.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Setter
@Getter
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
    @Column(name = "totalPrice")
    private int totalPrice;
    @ManyToOne
    @JoinColumn(name ="client_id")
    private Client client;
    @OneToMany(mappedBy = "requestOrder",cascade = CascadeType.ALL)
    private List<Item> items = new ArrayList<>();
    @OneToOne(cascade = CascadeType.ALL)//,referencedColumnName = "id"
    @JoinColumn(name ="fromAddress")
    private Address fromAddress;
    @OneToOne(cascade = CascadeType.ALL)//,referencedColumnName = "id"
    @JoinColumn(name = "toAddress")
    private Address toAddress;

    public void addItems(Item item){
        items.add(item);
        item.setRequestOrder(this);
    }
}

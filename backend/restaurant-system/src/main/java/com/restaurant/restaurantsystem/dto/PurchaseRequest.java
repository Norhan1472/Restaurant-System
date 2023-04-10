package com.restaurant.restaurantsystem.dto;

import com.restaurant.restaurantsystem.entity.Address;
import com.restaurant.restaurantsystem.entity.Client;
import com.restaurant.restaurantsystem.entity.Item;
import com.restaurant.restaurantsystem.entity.RequestOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PurchaseRequest {
    private Client client;
    private RequestOrder requestOrder;
    private List<Item> items = new ArrayList<>();
    private Address fromAddress;
    private Address toAddress;

}

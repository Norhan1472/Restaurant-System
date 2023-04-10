package com.restaurant.restaurantsystem.service;

import com.restaurant.restaurantsystem.dto.PurchaseRequest;
import com.restaurant.restaurantsystem.dto.PurchaseResponse;
import com.restaurant.restaurantsystem.entity.Client;
import com.restaurant.restaurantsystem.entity.Item;
import com.restaurant.restaurantsystem.entity.RequestOrder;
import com.restaurant.restaurantsystem.repository.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
@Transactional
@AllArgsConstructor
public class PurchaseService {
    private ClientRepository clientRepository;
    public PurchaseResponse makeOrder(PurchaseRequest purchaseRequest){
        String code = "";
        code = getCode();
        //generate code
        RequestOrder requestOrder = purchaseRequest.getRequestOrder();
        requestOrder.setCode(code);

        // add Address
        requestOrder.setFromAddress(purchaseRequest.getFromAddress());
        requestOrder.setToAddress(purchaseRequest.getToAddress());

        // add items
        List<Item> items = purchaseRequest.getItems();
        items.forEach(item->requestOrder.addItems(item));

        // add requestOrder
         purchaseRequest.getClient().addRequestOrder(requestOrder);
         // add Client
        Client client =purchaseRequest.getClient();
        clientRepository.save(client);



        return new PurchaseResponse(code, client.getName());
    }
    public String getCode(){
        return UUID.randomUUID().toString();
    }
}

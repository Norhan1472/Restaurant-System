package com.restaurant.restaurantsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor

public class PurchaseResponse {
    private String code;
    private String name;

}

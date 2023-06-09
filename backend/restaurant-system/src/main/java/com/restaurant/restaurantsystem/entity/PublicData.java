package com.restaurant.restaurantsystem.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public class PublicData extends CommonData{
    @Column(name = "name")
    private String name ;
}

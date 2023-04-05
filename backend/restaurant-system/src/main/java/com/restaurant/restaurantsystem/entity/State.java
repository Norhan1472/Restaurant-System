package com.restaurant.restaurantsystem.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "state")
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class State extends PublicData{
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "country_id")
    @JsonIgnore
    private Country country;
}

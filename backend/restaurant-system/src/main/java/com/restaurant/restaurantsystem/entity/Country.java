package com.restaurant.restaurantsystem.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "country")
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Country extends PublicData{
    @Column(name = "code")
    private String code ;
    @OneToMany(mappedBy = "country")
    @JsonIgnore
    private Set<State> stateSet = new HashSet<>();
}

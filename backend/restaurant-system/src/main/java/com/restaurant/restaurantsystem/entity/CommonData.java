package com.restaurant.restaurantsystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public class CommonData extends BaseEntity{
    @Column(name = "name")
    private String name;
    @CreationTimestamp
    @Column(name = "create_date")
    private Date createdDate;
    @Column(name = "update_date")
    @UpdateTimestamp
    private Date updatedDate;
}

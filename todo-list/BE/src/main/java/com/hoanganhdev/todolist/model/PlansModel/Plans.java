package com.hoanganhdev.todolist.model.PlansModel;

import com.hoanganhdev.todolist.model.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Plans extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private double price;

    @ManyToMany()
    @JoinTable(
            name = "plan_benefits",
            joinColumns = @JoinColumn(name = "plan_id"),
            inverseJoinColumns = @JoinColumn(name = "benefit_id")
    )
    private Set<Benefits> benefits;

    @OneToMany(mappedBy = "plan")
    private Set<UserPlan> userPlans;
}

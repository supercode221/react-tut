package com.hoanganhdev.todolist.model.PlansModel;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class UserPlanId implements Serializable {
    private int userId;
    private int planId;
}

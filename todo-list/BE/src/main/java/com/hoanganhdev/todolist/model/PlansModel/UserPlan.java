package com.hoanganhdev.todolist.model.PlansModel;

import com.hoanganhdev.todolist.model.StatusesModel.Statuses;
import com.hoanganhdev.todolist.model.UsersModel.Users;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
@Table(name = "users_plans")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserPlan {
    @EmbeddedId
    private UserPlanId id = new UserPlanId();

    @ManyToOne
    @MapsId("userId") // Maps the userId field from the composite key
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    @ManyToOne
    @MapsId("planId") // Maps the planId field from the composite key
    @JoinColumn(name = "plan_id", nullable = false)
    private Plans plan;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Statuses status;

    @CreationTimestamp
    private Timestamp create_at;

    private Timestamp expired_at;
}

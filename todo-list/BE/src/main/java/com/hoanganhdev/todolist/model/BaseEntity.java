package com.hoanganhdev.todolist.model;

import com.hoanganhdev.todolist.model.UsersModel.Users;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public abstract class BaseEntity {

    private Timestamp created_at;
    private Timestamp updated_at;

    @ManyToOne
    @JoinColumn(name = "created_by", nullable = true)
    private Users created_by;

    @ManyToOne
    @JoinColumn(name = "updated_by", nullable = true)
    private Users updated_by;

    // Automatically set timestamps before inserting a new record
    @PrePersist
    protected void onCreate() {
        Timestamp now = new Timestamp(System.currentTimeMillis());
        this.created_at = now;
        this.updated_at = now;
    }

    // Automatically update timestamp before updating a record
    @PreUpdate
    protected void onUpdate() {
        this.updated_at = new Timestamp(System.currentTimeMillis());
    }
}

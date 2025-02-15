package com.hoanganhdev.todolist.model.TasksModel;

import com.hoanganhdev.todolist.model.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Priorities extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true, nullable = false)
    private String priority;

    @Column(nullable = true)
    private String description;

    private int weight;
}

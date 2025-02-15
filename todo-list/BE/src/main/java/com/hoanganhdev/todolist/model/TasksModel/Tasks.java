package com.hoanganhdev.todolist.model.TasksModel;

import com.hoanganhdev.todolist.model.BaseEntity;
import com.hoanganhdev.todolist.model.StatusesModel.Statuses;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Tasks extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String title;

    private String objective;
    private String description;

    @ManyToOne
    @JoinColumn(name = "priority_id")
    private Priorities priority;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Statuses status;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private TaskCategories category;

    @OneToMany(mappedBy = "task", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TaskExtends> extendsList;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Groups group;
}


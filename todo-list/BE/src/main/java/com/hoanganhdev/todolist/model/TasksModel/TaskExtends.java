package com.hoanganhdev.todolist.model.TasksModel;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TaskExtends {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String extend_title;
    private String extend_description;
    private String extend_objective;
    private String extend_content;

    @Column(name = "`order`")
    private int order;

    @ManyToOne
    @JoinColumn(name = "task_id")
    private Tasks task;
}


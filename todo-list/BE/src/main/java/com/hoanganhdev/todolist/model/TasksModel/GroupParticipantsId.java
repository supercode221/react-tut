package com.hoanganhdev.todolist.model.TasksModel;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class GroupParticipantsId implements Serializable {
    private int groupId;
    private int userId;
}

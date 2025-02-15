package com.hoanganhdev.todolist.model.TasksModel;

import com.hoanganhdev.todolist.model.Authorizations.RolesGroups;
import com.hoanganhdev.todolist.model.StatusesModel.Statuses;
import com.hoanganhdev.todolist.model.UsersModel.Users;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class GroupParticipants {
    @EmbeddedId
    private GroupParticipantsId groupParticipantsId = new GroupParticipantsId();

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id", nullable = false)
    private Users users;

    @ManyToOne
    @MapsId("groupId")
    @JoinColumn(name = "group_id", nullable = false)
    private Groups group;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private RolesGroups role;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Statuses status;

    private Timestamp join_at;
}

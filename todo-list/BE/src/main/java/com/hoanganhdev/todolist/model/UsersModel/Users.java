package com.hoanganhdev.todolist.model.UsersModel;

import com.hoanganhdev.todolist.model.Authorizations.Roles;
import com.hoanganhdev.todolist.model.PlansModel.UserPlan;
import com.hoanganhdev.todolist.model.StatusesModel.Statuses;
import com.hoanganhdev.todolist.model.TasksModel.GroupParticipants;
import com.hoanganhdev.todolist.model.TasksModel.Tasks;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String user_name;
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    @ColumnDefault("false")
    private boolean email_verified;

    @Column(nullable = false)
    private String first_name;

    @Column(nullable = false)
    private String last_name;

    @ColumnDefault("false")
    private boolean two_factor;

    @ManyToOne
    @JoinColumn(name = "status_id", nullable = false)
    private Statuses status;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Roles role;

    @OneToMany(mappedBy = "user")
    private Set<UserPlan> userPlans;

    private Timestamp update_at;
    private Timestamp last_login_at;

    @OneToMany(mappedBy = "created_by", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Tasks> tasks;

    @OneToMany(mappedBy = "users")
    private List<GroupParticipants> groups;
}

package com.hoanganhdev.todolist.model.Authorizations;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PermissionsGroups {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String permission;

    @ManyToMany(mappedBy = "permissions")
    private List<RolesGroups> roles;
}

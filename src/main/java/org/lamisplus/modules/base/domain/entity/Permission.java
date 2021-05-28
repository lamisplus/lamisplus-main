package org.lamisplus.modules.base.domain.entity;

import lombok.*;
import javax.persistence.*;

@Data
@Entity
@EqualsAndHashCode
@NoArgsConstructor
@RequiredArgsConstructor
public class Permission extends Audit<String> {
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String name;

    @NonNull
    private String description;

    /*@OneToMany(mappedBy = "permissionByPermissionId")
    @ToString.Exclude
    @JsonIgnore
    public List<RolePermission> rolePermissionsById;*/
}
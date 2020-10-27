package org.lamisplus.modules.base.controller;

import lombok.RequiredArgsConstructor;
import org.lamisplus.modules.base.domain.dto.RoleDTO;
import org.lamisplus.modules.base.domain.entity.Permission;
import org.lamisplus.modules.base.domain.entity.Role;
import org.lamisplus.modules.base.repository.RoleRepository;
import org.lamisplus.modules.base.service.RoleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/roles")
@RequiredArgsConstructor
public class RoleController {
    private final RoleService roleService;
    private final RoleRepository roleRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Role> getById(@PathVariable Long id) {
        return ResponseEntity.ok(roleRepository.findById(id).get());
    }

    @GetMapping
    public ResponseEntity<List<Role>> getAll() {
        return ResponseEntity.ok(roleRepository.findAll());
    }

    @PostMapping
    @PreAuthorize("hasAuthority('user_write')")
    @ResponseStatus(HttpStatus.CREATED)
    public Role addRole(@Valid @RequestBody RoleDTO roleDTO) throws Exception {
        return roleService.save(roleDTO);
    }

    @PostMapping("/{id}")
    @PreAuthorize("hasAuthority('user_write')")
    public ResponseEntity<Role> update(@Valid @RequestBody RoleDTO role, @PathVariable Long id) {
        try {
            Role updatedRole = new Role();
            if (!role.getPermissions().isEmpty()){
                updatedRole = roleService.updatePermissions(id, role.getPermissions());
            }
            if (role.getName() != null | !role.getName().isEmpty()){
                updatedRole = roleService.updateName(id, role.getName());
            }
            return ResponseEntity.ok(updatedRole);
        } catch (Exception e) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}

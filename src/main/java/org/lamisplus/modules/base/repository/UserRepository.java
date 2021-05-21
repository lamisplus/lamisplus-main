package org.lamisplus.modules.base.repository;

import org.lamisplus.modules.base.domain.entity.Role;
import org.lamisplus.modules.base.domain.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository  extends JpaRepository<User, Long> {
    Optional<User> findOneByUserName(String userName);

    @EntityGraph(attributePaths = "role")
    Optional<User> findOneWithRoleByUserName(String userName);

    Page<User> findAll(Pageable pageable);

    List<User>findAllByRoleIn(HashSet<Role> roles);
}

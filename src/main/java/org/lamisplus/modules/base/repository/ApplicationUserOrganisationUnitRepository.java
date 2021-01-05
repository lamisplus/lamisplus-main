package org.lamisplus.modules.base.repository;

import org.lamisplus.modules.base.domain.entity.ApplicationUserOrganisationUnit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ApplicationUserOrganisationUnitRepository extends JpaRepository<ApplicationUserOrganisationUnit, Long> , JpaSpecificationExecutor {
    Optional<ApplicationUserOrganisationUnit> findByApplicationUserIdAndOrganisationUnitId(Long applicationUserId, Long organisationUnitId);
}
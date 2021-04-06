package org.lamisplus.modules.base.base.repository;


import org.lamisplus.modules.base.base.domain.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>, JpaSpecificationExecutor {
    List<Appointment> findAllByPatientIdAndArchivedAndVisitId(Long patientId, int archived, Long visitId);

    Optional<Appointment> findByIdAndArchived(Long id, int archived);

    List<Appointment> findAllByArchivedAndOrganisationUnitIdOrderByIdAsc(int archived, Long organisationUnit);
}

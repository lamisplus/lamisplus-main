package org.lamisplus.modules.base.base.domain.mapper;


import org.lamisplus.modules.base.base.domain.dto.ApplicationUserOrganisationUnitDTO;
import org.lamisplus.modules.base.base.domain.entity.ApplicationUserOrganisationUnit;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ApplicationUserOrganisationUnitMapper {

    ApplicationUserOrganisationUnit toApplicationUserOrganisationUnit(ApplicationUserOrganisationUnitDTO applicationUserOrganisationUnitDTO);

    ApplicationUserOrganisationUnitDTO toApplicationUserOrganisationUnitDTO(ApplicationUserOrganisationUnit applicationUserOrganisationUnit);
}

package org.lamisplus.modules.base.domain.mapper;


import org.lamisplus.modules.base.domain.dto.EncounterDTO;
import org.lamisplus.modules.base.domain.entity.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface EncounterMapper {
    Encounter toEncounter(EncounterDTO encounterDTO);
    @Mappings({
            @Mapping(source="patient.id", target="patientId"),
            @Mapping(source="encounter.id", target="encounterId"),
            @Mapping(source="form.id", target="formId"),
            @Mapping(source="form.name", target="formName"),
            @Mapping(source="encounter.programCode", target="programCode"),
    })
    EncounterDTO toEncounterDTO(Patient patient, Encounter encounter, Form form);


}

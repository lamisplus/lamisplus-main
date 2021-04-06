package org.lamisplus.modules.base.base.domain.mapper;


import org.lamisplus.modules.base.base.domain.dto.WardDTO;
import org.lamisplus.modules.base.base.domain.entity.Ward;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface WardMapper {

    Ward toWard(WardDTO wardDTO);

    WardDTO toWardDTO(Ward ward);
}
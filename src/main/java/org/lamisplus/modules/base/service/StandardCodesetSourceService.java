package org.lamisplus.modules.base.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.lamisplus.modules.base.controller.apierror.EntityNotFoundException;
import org.lamisplus.modules.base.controller.apierror.RecordExistException;
import org.lamisplus.modules.base.domain.dto.StandardCodesetSourceDTO;
import org.lamisplus.modules.base.domain.entity.StandardCodesetSource;
import org.lamisplus.modules.base.domain.mapper.StandardCodesetSourceMapper;
import org.lamisplus.modules.base.repository.StandardCodesetSourceRepository;
import org.lamisplus.modules.base.util.GenericSpecification;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class StandardCodesetSourceService {
    private final StandardCodesetSourceRepository standardCodesetSourceRepository;
    private final StandardCodesetSourceMapper standardCodesetSourceMapper;
    public static final int UN_ARCHIVED = 0;
    public static final int ARCHIVED = 1;


    public List<StandardCodesetSourceDTO> getAllStandardCodesetSource() {
        return standardCodesetSourceMapper.toStandardCodesetSourceDTOList(standardCodesetSourceRepository.findAllByArchivedOrderByIdDesc(UN_ARCHIVED));
    }

    public StandardCodesetSource save(StandardCodesetSourceDTO standardCodesetSourceDTO) {
        Optional<StandardCodesetSource> standardCodesetSourceOptional = standardCodesetSourceRepository.findByIdAndAndArchived(standardCodesetSourceDTO.getId(), UN_ARCHIVED);
        if (standardCodesetSourceOptional.isPresent()) throw new RecordExistException(StandardCodesetSource.class, "Id", standardCodesetSourceDTO.getId() + "");
        final StandardCodesetSource standardCodesetSource = standardCodesetSourceMapper.toStandardCodesetSource(standardCodesetSourceDTO);

        standardCodesetSource.setArchived(UN_ARCHIVED);
        return standardCodesetSourceRepository.save(standardCodesetSource);
    }

    public StandardCodesetSourceDTO getStandardCodesetSourceById(Long id) {
        Optional<StandardCodesetSource> standardCodesetSourceOptional = standardCodesetSourceRepository.findByIdAndAndArchived(id, UN_ARCHIVED);
        if (!standardCodesetSourceOptional.isPresent()) throw new EntityNotFoundException(StandardCodesetSource.class, "Id", id + "");

        return standardCodesetSourceMapper.toStandardCodesetSourceDTO(standardCodesetSourceOptional.get());
    }

    public StandardCodesetSource update(Long id, StandardCodesetSourceDTO standardCodesetSourceDTO) {
        Optional<StandardCodesetSource> standardCodesetSourceOptional = standardCodesetSourceRepository.findByIdAndAndArchived(standardCodesetSourceDTO.getId(), UN_ARCHIVED);
        if (standardCodesetSourceOptional.isPresent()) throw new EntityNotFoundException(StandardCodesetSource.class, "Id", id + "");
        final StandardCodesetSource standardCodesetSource = standardCodesetSourceMapper.toStandardCodesetSource(standardCodesetSourceDTO);

        standardCodesetSource.setId(id);
        standardCodesetSource.setArchived(UN_ARCHIVED);
        return standardCodesetSourceRepository.save(standardCodesetSource);
    }

    public Integer delete(Long id) {
        Optional<StandardCodesetSource> standardCodesetSourceOptional = standardCodesetSourceRepository.findByIdAndAndArchived(id, UN_ARCHIVED);
        if (!standardCodesetSourceOptional.isPresent()) throw new EntityNotFoundException(StandardCodesetSource.class, "Id", id + "");
        StandardCodesetSource standardCodesetSource = standardCodesetSourceOptional.get();
        standardCodesetSource.setArchived(ARCHIVED);
        standardCodesetSourceRepository.save(standardCodesetSource);

        return ARCHIVED;
    }
}

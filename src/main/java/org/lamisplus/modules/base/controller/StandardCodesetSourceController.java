package org.lamisplus.modules.base.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.lamisplus.modules.base.domain.dto.HeaderUtil;
import org.lamisplus.modules.base.domain.dto.StandardCodesetSourceDTO;
import org.lamisplus.modules.base.domain.entity.LabTest;
import org.lamisplus.modules.base.domain.entity.LabTestGroup;
import org.lamisplus.modules.base.domain.entity.StandardCodesetSource;
import org.lamisplus.modules.base.service.LabTestGroupService;
import org.lamisplus.modules.base.service.StandardCodesetSourceService;
import org.lamisplus.modules.base.util.GenericSpecification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/standard_codeset_sources")
@Slf4j
@RequiredArgsConstructor
public class StandardCodesetSourceController {
    private final StandardCodesetSourceService standardCodesetSourceService;
    private final String ENTITY_NAME = "StandardCodesetSource";

    @GetMapping
    public ResponseEntity<List<StandardCodesetSourceDTO>> getAllStandardCodesetSource() {
        return ResponseEntity.ok(this.standardCodesetSourceService.getAllStandardCodesetSource());
    }

    @GetMapping("/{id}")
    public ResponseEntity<StandardCodesetSourceDTO> getStandardCodesetSourceById(@PathVariable Long id) {
        return ResponseEntity.ok(standardCodesetSourceService.getStandardCodesetSourceById(id));
    }

    @PostMapping
    public ResponseEntity<StandardCodesetSource> save(@RequestBody StandardCodesetSourceDTO standardCodesetSourceDTO) throws URISyntaxException {
        StandardCodesetSource result = standardCodesetSourceService.save(standardCodesetSourceDTO);
        return ResponseEntity.created(new URI("/api/standard_codeset_sources/" + result.getId()))
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, String.valueOf(result.getId()))).body(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StandardCodesetSource> update(@PathVariable Long id, @RequestBody StandardCodesetSourceDTO standardCodesetSourceDTO) throws URISyntaxException {
        return ResponseEntity.ok(this.standardCodesetSourceService.update(id, standardCodesetSourceDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Integer> delete(@PathVariable Long id) {
        return ResponseEntity.ok(this.standardCodesetSourceService.delete(id));
    }
}

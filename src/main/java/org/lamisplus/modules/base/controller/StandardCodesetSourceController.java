package org.lamisplus.modules.base.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.audit4j.core.annotation.Audit;
import org.lamisplus.modules.base.domain.dto.StandardCodesetSourceDTO;
import org.lamisplus.modules.base.domain.entity.StandardCodesetSource;
import org.lamisplus.modules.base.service.StandardCodesetSourceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/standard_codeset_sources")
@Slf4j
@RequiredArgsConstructor
@Audit
public class StandardCodesetSourceController {
    private final StandardCodesetSourceService standardCodesetSourceService;

    @GetMapping
    public ResponseEntity<List<StandardCodesetSourceDTO>> getAllStandardCodesetSource() {
        return ResponseEntity.ok(standardCodesetSourceService.getAllStandardCodesetSource());
    }

    @GetMapping("/{id}")
    public ResponseEntity<StandardCodesetSourceDTO> getStandardCodesetSourceById(@PathVariable Long id) {
        return ResponseEntity.ok(standardCodesetSourceService.getStandardCodesetSourceById(id));
    }

    @PostMapping
    public ResponseEntity<StandardCodesetSource> save(@RequestBody StandardCodesetSourceDTO standardCodesetSourceDTO) {
        return ResponseEntity.ok(standardCodesetSourceService.save(standardCodesetSourceDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<StandardCodesetSource> update(@PathVariable Long id, @RequestBody StandardCodesetSourceDTO standardCodesetSourceDTO) {
        return ResponseEntity.ok(standardCodesetSourceService.update(id, standardCodesetSourceDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Integer> delete(@PathVariable Long id) {
        return ResponseEntity.ok(standardCodesetSourceService.delete(id));
    }
}

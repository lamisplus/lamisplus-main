package org.lamisplus.modules.base.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.audit4j.core.annotation.Audit;
import org.lamisplus.modules.base.domain.dto.ApplicationCodesetDTO;
import org.lamisplus.modules.base.domain.entity.ApplicationCodeSet;
import org.lamisplus.modules.base.service.ApplicationCodesetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/application-codesets")
@Slf4j
@RequiredArgsConstructor
@Audit
public class ApplicationCodesetController {
    private final ApplicationCodesetService applicationCodesetService;

    @GetMapping("/codesetGroup")
    public ResponseEntity<List<ApplicationCodesetDTO>> getApplicationCodeByCodeSetGroup(@RequestParam String codesetGroup) {
        return ResponseEntity.ok(this.applicationCodesetService.getApplicationCodeByCodesetGroup(codesetGroup));
    }

   /* @GetMapping("/{id}")
    public ResponseEntity<ApplicationCodesetDTO> getApplicationCodeset(@PathVariable Long id) {
        return ResponseEntity.ok(this.applicationCodesetService.getApplicationCodeset(id));
    }*/

    @GetMapping
    public ResponseEntity<List<ApplicationCodesetDTO>> getAllApplicationCodesets() {
        return ResponseEntity.ok(this.applicationCodesetService.getAllApplicationCodeset());
    }

    @PostMapping
    public ResponseEntity<ApplicationCodeSet> save(@RequestBody ApplicationCodesetDTO applicationCodesetDTO) {
        return ResponseEntity.ok(applicationCodesetService.save(applicationCodesetDTO));

    }

    @PutMapping("/{id}")
    public ResponseEntity<ApplicationCodeSet> update(@PathVariable Long id, @RequestBody ApplicationCodesetDTO applicationCodesetDTO) {
        return ResponseEntity.ok(applicationCodesetService.update(id, applicationCodesetDTO));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Integer> delete(@PathVariable Long id) {
        return ResponseEntity.ok(this.applicationCodesetService.delete(id));
    }
}

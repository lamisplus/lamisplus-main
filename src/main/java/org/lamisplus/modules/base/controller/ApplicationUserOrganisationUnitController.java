package org.lamisplus.modules.base.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.lamisplus.modules.base.domain.dto.ApplicationUserOrganisationUnitDTO;
import org.lamisplus.modules.base.domain.dto.HeaderUtil;
import org.lamisplus.modules.base.domain.entity.ApplicationUserOrganisationUnit;
import org.lamisplus.modules.base.domain.entity.FormData;
import org.lamisplus.modules.base.service.ApplicationUserOrganisationUnitService;
import org.lamisplus.modules.base.service.FormDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/application_user_organisation_unit")
@Slf4j
@RequiredArgsConstructor
public class ApplicationUserOrganisationUnitController {
    private final ApplicationUserOrganisationUnitService applicationUserOrganisationUnitService;
    private static final String ENTITY_NAME = "ApplicationUserOrganisationUnit";


    @GetMapping
    public ResponseEntity<List<ApplicationUserOrganisationUnit>> getAllApplicationUserOrganisationUnit() {
        return ResponseEntity.ok(applicationUserOrganisationUnitService.getAllApplicationUserOrganisationUnit());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationUserOrganisationUnit> getApplicationUserOrganisationUnit(@PathVariable Long id) {
        return ResponseEntity.ok(applicationUserOrganisationUnitService.getApplicationUserOrganisationUnit(id));
    }

    @PostMapping
    public ResponseEntity<ApplicationUserOrganisationUnit> save(@RequestBody ApplicationUserOrganisationUnitDTO applicationUserOrganisationUnitDTO) throws URISyntaxException {
        ApplicationUserOrganisationUnit result = applicationUserOrganisationUnitService.save(applicationUserOrganisationUnitDTO);
        return ResponseEntity.created(new URI("/api/application_user_organisation_unit/" + result.getId()))
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, String.valueOf(result.getId()))).body(result);
    }

    @PutMapping("{id}")
    public ResponseEntity<ApplicationUserOrganisationUnit> update(@PathVariable Long id, @RequestBody ApplicationUserOrganisationUnit applicationUserOrganisationUnit) throws URISyntaxException {
        ApplicationUserOrganisationUnit result = applicationUserOrganisationUnitService.update(id, applicationUserOrganisationUnit);
        return ResponseEntity.created(new URI("/api/application_user_organisation_unit/" + result.getId()))
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, String.valueOf(result.getId())))
                .body(result);
    }

    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Long id, @RequestBody ApplicationUserOrganisationUnit applicationUserOrganisationUnit) {
        return this.applicationUserOrganisationUnitService.delete(id, applicationUserOrganisationUnit);
    }
}
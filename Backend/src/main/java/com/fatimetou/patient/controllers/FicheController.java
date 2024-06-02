package com.fatimetou.patient.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatimetou.patient.entities.Fiche;
import com.fatimetou.patient.services.FicheService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/element")
public class FicheController {

    @Autowired
    FicheService ficheServ;

    @GetMapping("/all/fiche")
    public ResponseEntity<List<Fiche>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(ficheServ.listerFiche());
    }

    @PostMapping("/create/fiche")
    public ResponseEntity<Fiche> createFiche(@RequestBody Fiche fiche) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ficheServ.ajouterFiche(fiche));
    }

    // @GetMapping("/{id}")
    // public ResponseEntity<Patient> getPatientById(@PathVariable("idP") Long idP)
    // {
    // return
    // ResponseEntity.status(HttpStatus.OK).body(patientServ.getPatientById(idP));
    // }

    @PutMapping("update/{id}")
    public ResponseEntity<Fiche> updateFiche(@PathVariable("id") Long id, @RequestBody Fiche fiche) {
        return ResponseEntity.status(HttpStatus.OK).body(ficheServ.modifierFiche(fiche, id));
    }
}

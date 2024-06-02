package com.fatimetou.patient.controllers;

import java.util.List;

import com.fatimetou.patient.entities.RendezVous;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatimetou.patient.entities.Consultation;
import com.fatimetou.patient.services.ConsultationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/element")
public class ConsultationController {

    @Autowired
    ConsultationService consServ;
    @GetMapping("/all/consult")
    public ResponseEntity<List<Consultation>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(consServ.listerConslt());
    }

    @PostMapping("/create/consult")
    public ResponseEntity<Consultation> createPatient(@RequestBody Consultation conslt) {
        return ResponseEntity.status(HttpStatus.CREATED).body(consServ.ajouterConslt(conslt));
    }

    @PutMapping("update/conslt/{id}")
    public ResponseEntity<Consultation> updateConslt(@PathVariable("id") Long id, @RequestBody Consultation conslt) {
        return ResponseEntity.status(HttpStatus.OK).body(consServ.modifierconslt(conslt,id));
    }


}

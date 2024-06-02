package com.fatimetou.patient.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatimetou.patient.entities.RendezVous;
import com.fatimetou.patient.services.RendezVousService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/rdv")
public class RendezVousController {

    @Autowired
    RendezVousService rdvserv;

    @GetMapping("/getAll/rdv")
    public ResponseEntity<List<RendezVous>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(rdvserv.listerRdv());
    }

    @PostMapping("/create/rdv")
    public ResponseEntity<RendezVous> createRdv(@RequestBody RendezVous rdv) {
        return ResponseEntity.status(HttpStatus.CREATED).body(rdvserv.ajouterRdv(rdv));
    }

    @PutMapping("update/rdv/{id}")
    public ResponseEntity<RendezVous> updateRdv(@PathVariable("id") Long id, @RequestBody RendezVous rdv) {
        return ResponseEntity.status(HttpStatus.OK).body(rdvserv.modifierRdv(rdv, id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Boolean> deleteRdv(@PathVariable("id") Long idRdv){
        return ResponseEntity.status(HttpStatus.OK).body(rdvserv.delete(idRdv));
    }
}


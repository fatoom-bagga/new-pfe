package com.fatimetou.patient.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatimetou.patient.entities.Bilan;
import com.fatimetou.patient.services.BilanService;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/element")
public class BilanController {

    @Autowired
    BilanService bilanServ;

    @GetMapping("/all/bilan")
    public ResponseEntity<List<Bilan>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(bilanServ.listerBilan());
    }

    @PostMapping("/create/bilan")
    public ResponseEntity<Bilan> createBilan(@RequestBody Bilan bilan) {
        return ResponseEntity.status(HttpStatus.CREATED).body(bilanServ.ajouterBln(bilan));
    }

    @GetMapping("/bilan/{id}")
    public ResponseEntity<Bilan> getBilanById(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(bilanServ.getBilanById(id));
    }

}

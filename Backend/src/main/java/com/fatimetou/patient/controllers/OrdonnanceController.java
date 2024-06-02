package com.fatimetou.patient.controllers;

// import java.util.List;

// import com.fatimetou.patient.entities.Patient;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.*;

// import com.fatimetou.patient.entities.Ordonnance;
// import com.fatimetou.patient.services.OrdonnanceService;

// @RestController
// @CrossOrigin(origins = "http://localhost:4200")
// @RequestMapping("/api/element")
// public class OrdonnanceController {

//     @Autowired
//     OrdonnanceService ordServ;

//     @GetMapping("/getAll/ord")
//     public ResponseEntity<List<Ordonnance>> getAll() {
//         return ResponseEntity.status(HttpStatus.OK).body(ordServ.listerOrdonnance());
//     }

//     @PostMapping("/create/ord/{patientId}")
//     public ResponseEntity<Ordonnance> createOrd(@PathVariable(name = "patientId") Long id,
//             @RequestBody Ordonnance ord) {
//         return ResponseEntity.status(HttpStatus.CREATED).body(ordServ.createOrdonnance(id, ord));
//     }

//     @GetMapping("/ord/{id}")
//     public ResponseEntity<Ordonnance> getOrdonnceById(@PathVariable("id") Long id) {
//         return ResponseEntity.status(HttpStatus.OK).body(ordServ.getOrdonnanceById(id));
//     }

//     @PutMapping("update/ordonnance/{id}")
//     public ResponseEntity<Ordonnance> updateOrd(@PathVariable("id") Long id, @RequestBody Ordonnance ord) {
//         return ResponseEntity.status(HttpStatus.OK).body(ordServ.modifierOrd(ord, id));
//     }

// }
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatimetou.patient.entities.Ordonnance;
import com.fatimetou.patient.services.OrdonnanceService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ordonnances")
public class OrdonnanceController {

    @Autowired
    private OrdonnanceService ordonnanceService;

    @GetMapping
    public List<Ordonnance> getAllOrdonnances() {
        return ordonnanceService.getAllOrdonnances();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ordonnance> getOrdonnanceById(@PathVariable Long id) {
        Optional<Ordonnance> ordonnance = ordonnanceService.getOrdonnanceById(id);
        if (ordonnance.isPresent()) {
            return ResponseEntity.ok(ordonnance.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Ordonnance createOrdonnance(@RequestBody Ordonnance ordonnance) {
        return ordonnanceService.saveOrdonnance(ordonnance);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ordonnance> updateOrdonnance(@PathVariable Long id,
            @RequestBody Ordonnance ordonnanceDetails) {
        Optional<Ordonnance> ordonnance = ordonnanceService.getOrdonnanceById(id);
        if (ordonnance.isPresent()) {
            Ordonnance updatedOrdonnance = ordonnance.get();
            updatedOrdonnance.setDate(ordonnanceDetails.getDate());
            updatedOrdonnance.setPatient(ordonnanceDetails.getPatient());
            updatedOrdonnance.setMedecin(ordonnanceDetails.getMedecin());
            updatedOrdonnance.setMedicaments(ordonnanceDetails.getMedicaments());
            ordonnanceService.saveOrdonnance(updatedOrdonnance);
            return ResponseEntity.ok(updatedOrdonnance);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrdonnance(@PathVariable Long id) {
        Optional<Ordonnance> ordonnance = ordonnanceService.getOrdonnanceById(id);
        if (ordonnance.isPresent()) {
            ordonnanceService.deleteOrdonnance(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

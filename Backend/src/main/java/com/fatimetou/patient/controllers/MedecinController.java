package com.fatimetou.patient.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import com.fatimetou.patient.entities.Medecin;
import com.fatimetou.patient.entities.User;
import com.fatimetou.patient.repositories.MedecinRepository;
import com.fatimetou.patient.repositories.UserRepository;
import com.fatimetou.patient.services.MedecinService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/medecin")
public class MedecinController {

    @Autowired
    MedecinService mdcServ;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    MedecinRepository medecinRepository;

    @GetMapping("/getAll/medecin")
    public ResponseEntity<List<Medecin>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(mdcServ.listMedecin());
    }

    @GetMapping("/medecins")
    public List<Medecin> getAllMedecins() {
        return mdcServ.getAllMedecins();
    }

    @PostMapping("/create/medecin")
    public ResponseEntity<Medecin> createMedecin(@RequestBody Medecin medecin, @RequestParam String email) {
        return ResponseEntity.status(HttpStatus.CREATED).body(mdcServ.ajouterMedecin(medecin, email));
    }

    @PostMapping("/create/medecin2")
    public ResponseEntity<Medecin> createMedecin2(@RequestBody Medecin medecin, @RequestParam String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setMedecin(medecin); // Set the relationship from the user's side
        medecin.setUser(user);
        System.out.println("Saved Medecin: " + user);
        Medecin savedMedecin = medecinRepository.save(medecin);

        // Imprimer l'objet Medecin
        System.out.println("Saved Medecin: " + savedMedecin);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedMedecin);
    }

    // @GetMapping("/{id}")
    // public ResponseEntity<Medecin> getMedcinById(@PathVariable("id") Long id) {
    // return ResponseEntity.status(HttpStatus.OK).body(mdcServ.getMedecinById(id));
    // }
    @GetMapping("/connected")
    public ResponseEntity<Medecin> getConnectedMedecin() {
        // Replace with actual logic to fetch the connected doctor's details
        Medecin medecin = mdcServ.getConnectedMedecin();
        return ResponseEntity.ok(medecin);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medecin> getMedecinById(@PathVariable Long id) {
        Medecin medecin = medecinRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(medecin);
    }

}

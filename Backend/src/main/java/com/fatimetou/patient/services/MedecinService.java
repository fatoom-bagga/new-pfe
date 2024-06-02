package com.fatimetou.patient.services;
import com.fatimetou.patient.entities.Medecin;
import com.fatimetou.patient.entities.User;
import com.fatimetou.patient.repositories.MedecinRepository;
import com.fatimetou.patient.repositories.UserRepository;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MedecinService {
    @Autowired
    MedecinRepository medecinRepository;

    @Autowired
    private UserRepository userRepository;

    public Medecin ajouterMedecin(Medecin medecin, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setMedecin(medecin);  // Set the relationship from the user's side
        medecin.setUser(user);
        System.out.println("Saved Medecin: " + user);
        System.out.println("Saved Medecin: " + medecin);
        Medecin savedMedecin = medecinRepository.save(medecin);
    
        // Imprimer l'objet Medecin
        System.out.println("Saved Medecin: " + savedMedecin);
        
        return savedMedecin;
    }


    public List<Medecin> listMedecin() {
        return medecinRepository.findAll();
    }
    public List<Medecin> getAllMedecins() {
        return medecinRepository.findAll();
    }
    public Medecin getConnectedMedecin() {
        // In a real application, you would retrieve the logged-in doctor's details from the security context
        // For demonstration, let's assume the first doctor in the database is the connected one
        return medecinRepository.findById(1L).orElse(null); // Replace with actual logic
    }


    }

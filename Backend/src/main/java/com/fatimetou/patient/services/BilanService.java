package com.fatimetou.patient.services;

import com.fatimetou.patient.entities.Bilan;
import com.fatimetou.patient.entities.Ordonnance;
import com.fatimetou.patient.repositories.BilanRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BilanService {
    @Autowired
    BilanRepository bilanRepository;

    public List<Bilan> listerBilan() {
        return bilanRepository.findAll();
    }

    public Bilan ajouterBln(Bilan bilan) {
        return bilanRepository.save(bilan);
    }

    public Bilan getBilanById(Long idB) {
        return bilanRepository.findById(idB).
                orElseThrow(() -> new EntityNotFoundException("Prescription not found with id " + idB));
    }

}

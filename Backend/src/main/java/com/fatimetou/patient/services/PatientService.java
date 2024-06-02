package com.fatimetou.patient.services;

import com.fatimetou.patient.entities.Patient;
import com.fatimetou.patient.exception.PatientNotFoundException;
import com.fatimetou.patient.repositories.PatientRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PatientService {
    @Autowired
    PatientRepository patientRepository;

    public Patient ajouterPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public Patient modifierPatient(Patient updatedPatient, Long id) {
        Patient patient = patientRepository.findById(id).orElseThrow(()->new PatientNotFoundException("patient not found !"));
            if (updatedPatient.getNom() != null) {
                patient.setNom(updatedPatient.getNom());
            }
            if (updatedPatient.getDateNaissance() != null) {
                patient.setDateNaissance(updatedPatient.getDateNaissance());
            }
        if (updatedPatient.getPrenom() != null) {
            patient.setPrenom(updatedPatient.getPrenom());
        }
        if (updatedPatient.getAdresse() != null) {
            patient.setAdresse(updatedPatient.getAdresse());
        }
        if (updatedPatient.getSexe() != null) {
            patient.setSexe(updatedPatient.getSexe());
        }
        if (updatedPatient.getEtatCivil() != null) {
            patient.setEtatCivil(updatedPatient.getEtatCivil());
        }
        if (updatedPatient.getLieuNaiss() != null) {
            patient.setLieuNaiss(updatedPatient.getLieuNaiss());
        }
        if (updatedPatient.getNationnalite() != null) {
            patient.setNationnalite(updatedPatient.getNationnalite());
        }







        return patientRepository.save(patient);
    }

    public List<Patient> listerPatient() {
        return patientRepository.findAll();
    }

    public Patient getPatientById(Long idP) {
        return patientRepository.findById(idP)
                .orElseThrow(() -> new EntityNotFoundException("Prescription not found with id " + idP));
    }

    public String getPatientName(Long idP) {
        Patient patient = patientRepository.findById(idP).orElse(null);

        if (patient.getNom() != null) {
            return patient.getNom();
        } else {

            return "null";
        }
    }
}

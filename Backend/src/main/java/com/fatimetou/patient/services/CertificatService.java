package com.fatimetou.patient.services;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.fatimetou.patient.entities.Certificat;
import com.fatimetou.patient.repositories.CertificatRepository;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service

public class CertificatService {
    @Autowired
    CertificatRepository certificatRepository;

    public List<Certificat> listerCertificat() {
        return certificatRepository.findAll();
    }

    public Certificat ajouterCertf(Certificat certificat) {
        return certificatRepository.save(certificat);
    }

    public Certificat getCertificatById(Long idC) {
        return certificatRepository.findById(idC)
                .orElseThrow(() -> new EntityNotFoundException("Prescription not found with id " + idC));
    }

}

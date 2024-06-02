package com.fatimetou.patient.repositories;

import com.fatimetou.patient.entities.Certificat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificatRepository extends JpaRepository<Certificat,Long> {
}

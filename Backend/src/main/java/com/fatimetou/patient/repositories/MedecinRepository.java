package com.fatimetou.patient.repositories;

import com.fatimetou.patient.entities.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MedecinRepository extends JpaRepository<Medecin, Long> {
    List<Medecin> findAll();
}

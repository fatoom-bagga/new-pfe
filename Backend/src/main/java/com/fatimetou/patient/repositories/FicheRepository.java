package com.fatimetou.patient.repositories;

import com.fatimetou.patient.entities.Fiche;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FicheRepository extends JpaRepository<Fiche,Long> {
}

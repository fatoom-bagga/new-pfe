package com.fatimetou.patient.repositories;

import com.fatimetou.patient.entities.Ordonnance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdonnanceRepository extends JpaRepository<Ordonnance,Long> {

}

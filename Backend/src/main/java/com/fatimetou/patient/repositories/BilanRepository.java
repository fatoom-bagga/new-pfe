package com.fatimetou.patient.repositories;

import com.fatimetou.patient.entities.Bilan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BilanRepository extends JpaRepository<Bilan,Long> {
}

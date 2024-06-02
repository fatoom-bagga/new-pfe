package com.fatimetou.patient.entities;

import com.fatimetou.patient.enums.BilanType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@Entity
@Getter
@Setter

public class Bilan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idB;

    private String nomBillan;

    private BilanType typeB;

    @Column(nullable = false)
    private Date date;

    @ManyToOne(optional = false)
    private Patient patient;

    @ManyToOne(optional = true)
    private Medecin medecin;
}

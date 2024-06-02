package com.fatimetou.patient.entities;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import org.hibernate.type.TrueFalseConverter;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)

public class Ordonnance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idOrd;

    @ManyToOne(optional = true)
    @JoinColumn(name = "patient_id")
    @JsonBackReference
    private Patient patient;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medecin_id")
    private Medecin medecin;

    private Date date;


    @OneToMany(mappedBy = "ordonnance", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Medicament> medicaments;


}

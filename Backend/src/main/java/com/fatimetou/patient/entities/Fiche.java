package com.fatimetou.patient.entities;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Fiche {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private  String motifConsult ;

    private String  histMalad;
    private String antecedM;

    private String statusVacc;
    private String commentaire;

    @ManyToOne(optional = false)
    @JoinColumn(name = "medecin_id")
    private Medecin medecin;

    @OneToOne(mappedBy = "fiche")
    @JoinColumn(name = "patient_id")
    private Patient patient;
}

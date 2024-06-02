package com.fatimetou.patient.entities;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor @NoArgsConstructor

public class Patient{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String prenom;
    private String adresse;
    private String sexe;
    private String  dateNaissance;

    private String nationnalite;
    private String etatCivil;
    private String lieuNaiss;

    @ManyToOne
    private Receptionniste receptionniste;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<Consultation> consultations ;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RendezVous> rendezVous;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Ordonnance> ordonnances;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fiche_id", referencedColumnName = "id")
    private Fiche fiche;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<Bilan> bilans;
    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<Certificat> certificats;
}

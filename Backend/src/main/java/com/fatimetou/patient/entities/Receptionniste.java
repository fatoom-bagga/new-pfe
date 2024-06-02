package com.fatimetou.patient.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Receptionniste {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @OneToOne(cascade = CascadeType.ALL,optional = false,fetch = FetchType.LAZY)
    private User user;

    @OneToMany(mappedBy = "receptionniste", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RendezVous> rendezVous;




}

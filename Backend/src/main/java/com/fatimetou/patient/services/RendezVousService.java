package com.fatimetou.patient.services;
import com.fatimetou.patient.entities.RendezVous;
import com.fatimetou.patient.repositories.RendezVousRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RendezVousService {
    @Autowired
    RendezVousRepository rendezVousRepository;

    public RendezVous ajouterRdv(RendezVous rdv){
        return rendezVousRepository.save(rdv);
    }

    public RendezVous modifierRdv(RendezVous rendezVous,long idRdv) {

        RendezVous rendv = rendezVousRepository.findById(idRdv).orElse(null);
        if (rendezVous.getHeure() != null) {
            rendv.setHeure(rendezVous.getHeure());
        }
        if (rendezVous.getDate() != null) {
            rendv.setDate(rendezVous.getDate());
        }

        return rendezVousRepository.save(rendv);
    }

    public List<RendezVous> listerRdv(){
        return rendezVousRepository.findAll();
    }

    public boolean delete(long idRdv){
        Optional<RendezVous> optionalRendezVous=rendezVousRepository.findById(idRdv);
        if (optionalRendezVous.isPresent()){
            rendezVousRepository.deleteById(idRdv);
            return true;
        }
            return false;
    }

}

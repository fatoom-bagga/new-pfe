package com.fatimetou.patient.services;
import com.fatimetou.patient.entities.Fiche;
import com.fatimetou.patient.repositories.FicheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FicheService {
    @Autowired
    FicheRepository ficheRepository;

    public Fiche ajouterFiche(Fiche fiche) {
        return ficheRepository.save(fiche);
    }

    public Fiche modifierFiche(Fiche mdFiche, long idF) {
        Fiche fiche = ficheRepository.findById(idF).orElse(null);
        if(mdFiche.getStatusVacc()!=null){
            fiche.setStatusVacc(mdFiche.getStatusVacc());
        }
        return ficheRepository.save(fiche);
    }

    public List<Fiche> listerFiche(){
        return ficheRepository.findAll();
    }
}

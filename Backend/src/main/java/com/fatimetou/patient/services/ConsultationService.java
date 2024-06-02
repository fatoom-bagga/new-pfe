package com.fatimetou.patient.services;
import com.fatimetou.patient.entities.Consultation;
import com.fatimetou.patient.entities.RendezVous;
import com.fatimetou.patient.repositories.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultationService {
    @Autowired
    ConsultationRepository consultRepository;

    public Consultation ajouterConslt(Consultation conslt) {
        return consultRepository.save(conslt);
    }

    public List<Consultation> listerConslt() {
        return consultRepository.findAll();
    }

    public Consultation modifierconslt(Consultation conslt , long idClt) {

        Consultation consult = consultRepository.findById(idClt).orElse(null);
        if (consult.getFréquenceC() != 0) {
            consult.setFréquenceC(consult.getFréquenceC());
        }
        if (consult.getPressArt() != 0) {
            consult.setPressArt(consult.getPressArt());
        }
        if (consult.getTemperature() != 0) {
            consult.setTemperature(consult.getTemperature());
        }
        return consultRepository.save(conslt);
    }

}

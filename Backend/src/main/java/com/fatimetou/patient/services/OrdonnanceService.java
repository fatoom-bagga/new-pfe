package com.fatimetou.patient.services;

// import com.fatimetou.patient.entities.Medecin;
// import com.fatimetou.patient.entities.Ordonnance;
// import com.fatimetou.patient.entities.Patient;
// import com.fatimetou.patient.exception.OrdNotFoundException;
// import com.fatimetou.patient.exception.PatientNotFoundException;
// import com.fatimetou.patient.repositories.OrdonnanceRepository;
// import jakarta.persistence.EntityNotFoundException;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class OrdonnanceService {
//     @Autowired
//     OrdonnanceRepository ordonnanceRepository;
//     @Autowired
//     private MedecinService medecinService;
//     @Autowired
//     private PatientService patientService;

//     public List<Ordonnance> listerOrdonnance() {
//         return ordonnanceRepository.findAll();
//     }

//     public Ordonnance createOrdonnance(Long patientId,Ordonnance ordonnance) {

//         Patient patient = patientService.getPatientById(patientId);

//             ordonnance.setPatient(patient);
//             //ordonance.set(getConnectedUser)

//         return ordonnanceRepository.save(ordonnance);
//     }

//     public Ordonnance getOrdonnanceById(Long idOrd) {
//         return ordonnanceRepository.findById(idOrd)
//                 .orElseThrow(() -> new EntityNotFoundException("Prescription not found with id " + idOrd));
//     }
//     public Ordonnance modifierOrd(Ordonnance updateOrd, Long id) {
//         Ordonnance ord = ordonnanceRepository.findById(id).orElseThrow(() -> new OrdNotFoundException(id));
//         ord.setDate(updateOrd.getDate());

//         ord.setPatient(updateOrd.getPatient());
//         ord.setMedicaments(updateOrd.getMedicaments());
//         return ordonnanceRepository.save(ord);
//     }
// }
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatimetou.patient.entities.Ordonnance;
import com.fatimetou.patient.repositories.OrdonnanceRepository;

import java.util.List;
import java.util.Optional;

@Service
public class OrdonnanceService {

    @Autowired
    private OrdonnanceRepository ordonnanceRepository;

    public List<Ordonnance> getAllOrdonnances() {
        return ordonnanceRepository.findAll();
    }

    public Optional<Ordonnance> getOrdonnanceById(Long id) {
        return ordonnanceRepository.findById(id);
    }

    public Ordonnance saveOrdonnance(Ordonnance ordonnance) {
        return ordonnanceRepository.save(ordonnance);
    }

    public void deleteOrdonnance(Long id) {
        ordonnanceRepository.deleteById(id);
    }
}
